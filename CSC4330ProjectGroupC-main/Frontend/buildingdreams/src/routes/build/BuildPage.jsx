import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import RightSideBar from "./components/RightSideBar";
import Viewcanvas from "./components/Viewer";
import {
  getBuildFromFireStore,
  saveBuildToFireStore,
} from "../../api/firebaseDB";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc, updateDoc, arrayUnion, setDoc, onSnapshot, collection } from "firebase/firestore";
import { auth } from "../../firebase";

/**
 * @TODO Implement adding parts to cart
 * @TODO Implement method to get build name via firebase reference
 * @param {*} props
 * @returns
 */

export default function BuildPage() {
	const { buildReference } = useParams();

	const [username, setUsername] = useState('');
	const [buildName, setBuildName] = useState(null); // Max length = 16 Chars.
	const [cpu, setCpu] = useState(null);
	const [gpu, setGpu] = useState(null);
	const [motherboard, setMotherboard] = useState(null);
	const [ram, setRam] = useState([]);
	const [storage, setStorage] = useState(null);
	const [power, setPower] = useState(null);
	const [fan, setFan] = useState(null);
	const [case_, setCase] = useState(null);

  	const [specs, setSpecs] = useState({});
	const [price, setPrice] = useState(0);

	const [messages, setMessages] = useState([]);

	async function saveBuild() {
		const buildData = {
		BuildName: buildName,
		CPU: cpu,
		CPUCooler: fan,
		Case: case_,
		CaseFan: fan,
		GPU: gpu,
		Memory: ram,
		Motherboard: motherboard,
		Powersupply: power,
		Storage: storage,
		};
	
		const buildDocRef = await saveBuildToFireStore(buildData, buildReference);
	
		const db = getFirestore();
		const userDocRef = doc(db, 'users', auth.currentUser.uid);
		const userDoc = await getDoc(userDocRef);
	
		const newBuild = {
			image: 'https://www.newegg.com/insider/wp-content/uploads/2018/10/ABS_BUILD_1.jpg', // Replace with the actual image
			name: buildName,
			reference: buildDocRef.path, // Store the path of the DocumentReference
		};
	
		if (userDoc.exists()) {
		const userBuilds = userDoc.data().builds || [];
		const existingBuildIndex = userBuilds.findIndex(build => build.reference === buildDocRef.path);
	
		if (existingBuildIndex !== -1) {
			// Update the existing build
			userBuilds[existingBuildIndex] = newBuild;
		} else {
			// Add the new build
			userBuilds.push(newBuild);
		}
	
		await updateDoc(userDocRef, { builds: userBuilds });
		} else {
		// The user's document doesn't exist, create a new one
		await setDoc(userDocRef, { builds: [newBuild] });
		}
	}

	async function getBuild() {
		if (buildReference) {
		const res = await getBuildFromFireStore(buildReference);
		const { BuildName, CPU, CPUCooler, Case, CaseFan, GPU, Memory, Motherboard, Powersupply, Storage, messages } = res;

		setBuildName(BuildName);
		setCpu(CPU);
		setFan(CPUCooler);
		setCase(Case);
		setFan(CaseFan);
		setGpu(GPU);
		setRam(Memory);
		setMotherboard(Motherboard);
		setPower(Powersupply);
		setStorage(Storage);
		setMessages(messages);
		}
	}

	useEffect(() => {
		const db = getFirestore();
		const buildsCollectionRef = collection(db, 'Builds');
	
		const unsubscribe = onSnapshot(buildsCollectionRef, 
			(snapshot) => {
				snapshot.docChanges().forEach((change) => {
					if (change.type === "added" || change.type === "modified" || change.type === "removed") {
						getBuild();
						console.log("DOCUMENT CHANGED!!!!")
					}
				});
			}, 
			(error) => {
				console.error("Error listening for document changes: ", error);
			}
		);
	
		// Clean up the subscription on unmount
		return () => unsubscribe();
	}, []);


	useEffect(() => {
		const fetchUserData = async () => {
			const db = getFirestore();
			const docRef = doc(db, 'users', auth.currentUser.uid);
			const docSnap = await getDoc(docRef);

			if (docSnap.exists()) {
				setUsername(docSnap.data().username);
			} else {
				console.log('No such document!');
			}
		};

		fetchUserData();
	}, []);

	useEffect(() => {
		getBuild();
	}, [buildReference])

	async function getTotalRam() {
		const arr = [...ram].map((ram) => {
			const nameArr = ram.name.split(" ");
			const memory = nameArr[nameArr.length - 2];
			return (parseInt(memory));
		});

		const totalMemory = arr.reduce((sum, memory) => sum + memory, 0);
		return (totalMemory);
	}

	async function addRam(newRam) {
		const newMemory = newRam.name.split(" ")
		const total = getTotalRam() + parseInt(newMemory[newMemory.length - 2]);

		const limit = motherboard.max_memory;
		const slots = motherboard.memory_slots;

		if (total > limit) return;

		const arr = [...ram];
		arr.push(newRam);

		if (arr.length > slots) return;

		setRam(arr);
	}

	async function removeRam(index) {
		let res = [];

		for (let i = 0; i < ram.length; i++) {
			if (i != index) {
				res.push(ram[i])
			}
		}

		setRam(res);
	}

	function getPrice() {
		const mbPrice = motherboard?.price ?? 0;
		const cpuPrice = cpu?.price ?? 0;
		const gpuPrice = gpu?.price ?? 0;
		const ramPrice = ram.map((ram) => (ram.price)).reduce((total, price) => (total + price), 0);
		const storagePrice = storage?.price ?? 0;
		const powerPrice = power?.price ?? 0;
		const fanPrice = fan?.price ?? 0;
		const casePrice = case_?.price ?? 0;

		return (mbPrice + cpuPrice + gpuPrice + ramPrice + storagePrice + powerPrice + fanPrice + casePrice)
	}

	useEffect(() => {
		if (motherboard == null) {
			setRam([]);
		}
	}, [motherboard]);

	function getCPUType() {
		if (motherboard?.socket) {
			if (motherboard?.socket.includes("AM")) {
				return ("AMD");
			} else {
				return ("Intel");
			}
		} else {
			return ("");
		}
	}

	return (
		<div style={{ height: "100vh", width: "100dvw", overflowX: "hidden", overflowY: "hidden" }}>
			<Header username={username} buildName={buildName ?? "Untitled"} setBuildName={setBuildName} saveBuild={saveBuild}/>
			<div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
				<Sidebar setSpecs={setSpecs} setCPU={setCpu} setGPU={setGpu} setMotherboard={setMotherboard} addRam={addRam} setStorage={setStorage} setPower={setPower} setFan={setFan} setCase={setCase} ramDisabled={motherboard == null} cpuDisabled={motherboard == null} cpuType={getCPUType()}/>
				<Viewcanvas cpu={cpu} gpu={gpu} motherboard={motherboard} ram={ram} storage={storage} power={power} fan={fan} case_={case_} setSpecs={setSpecs} setCPU={setCpu} setGPU={setGpu} setMotherboard={setMotherboard} removeRam={removeRam} setStorage={setStorage} setPower={setPower} setFan={setFan} setCase={setCase}/>
				<RightSideBar specs={specs} total={getPrice()} messages={messages} buildReference={buildReference} />
			</div>
		</div>
	);
}
