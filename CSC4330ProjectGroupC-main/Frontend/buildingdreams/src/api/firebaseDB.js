// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
  limit,
  doc,
  getDoc,
  addDoc,
  setDoc,
  updateDoc,
  arrayUnion,
  startAt,
  endAt,
  orderBy,
} from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyDPooWPpMfXPgKWWEfWv0RMUTTjQyoGP3o",
  authDomain: "pcpicker-9d3e9.firebaseapp.com",
  projectId: "pcpicker-9d3e9",
  storageBucket: "pcpicker-9d3e9.appspot.com",
  messagingSenderId: "194246671439",
  appId: "1:194246671439:web:7abf5c4d010cb88fb97e3a",
  measurementId: "G-7QNJKWWFJS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export async function getValidCPUs(cpuType) {
  let DBQuery;

  console.log(cpuType)

  if (cpuType != "") {
    DBQuery = query(
      collection(db, "/CPUs"),
      orderBy('name'),
      startAt(cpuType),
      endAt(cpuType + '~'),
      limit(50)
    );
  } else {
    DBQuery = query(
      collection(db, "/CPUs"),
      where("price", "!=", null),
      limit(50)
    );
  }

  
  const snapshot = await getDocs(DBQuery);
  
  const list = snapshot.docs.map((doc) => {
    return doc.data();
  });

  return list;
}

export async function getValidGPUs() {
  const DBQuery = query(
    collection(db, "/GPUs"),
    where("price", "!=", null),
    limit(10)
  );

  const snapshot = await getDocs(DBQuery);
  const list = snapshot.docs.map((doc) => {
    return doc.data();
  });

  return list;
}

export async function getValidCPUCoolers() {
  const DBQuery = query(
    collection(db, "/CPUCooler"),
    where("price", "!=", null),
    limit(10)
  );

  const snapshot = await getDocs(DBQuery);
  const list = snapshot.docs.map((doc) => {
    return doc.data();
  });

  return list;
}

export async function getValidMotherboards() {
  const DBQuery = query(
    collection(db, "/Motherboards"),
    where("price", "!=", null),
    limit(10)
  );

  const snapshot = await getDocs(DBQuery);
  const list = snapshot.docs.map((doc) => {
    return doc.data();
  });

  return list;
}

export async function getValidRAM() {
  const DBQuery = query(
    collection(db, "/Memory"),
    where("price", "!=", null),
    limit(10)
  );

  const snapshot = await getDocs(DBQuery);
  const list = snapshot.docs.map((doc) => {
    return doc.data();
  });

  return list;
}

export async function getValidStorage() {
  const DBQuery = query(
    collection(db, "/InternalStorage"),
    where("price", "!=", null),
    limit(10)
  );

  const snapshot = await getDocs(DBQuery);
  const list = snapshot.docs.map((doc) => {
    return doc.data();
  });

  return list;
}

export async function getValidPowerSupplys() {
  const DBQuery = query(
    collection(db, "/PowerSupply"),
    where("price", "!=", null),
    limit(10)
  );

  const snapshot = await getDocs(DBQuery);
  const list = snapshot.docs.map((doc) => {
    return doc.data();
  });

  return list;
}

export async function getValidCases() {
  const DBQuery = query(
    collection(db, "/Case"),
    where("price", "!=", null),
    limit(10)
  );

  const snapshot = await getDocs(DBQuery);
  const list = snapshot.docs.map((doc) => {
    return doc.data();
  });

  return list;
}

export async function getBuildFromFireStore(buildReference) {
  const docRef = doc(db, "Builds", buildReference);

  try {
    const docSnap = await getDoc(docRef);
    const data = docSnap.data();

    return data;
  } catch (err) {
    console.log(err);
  }
}

export async function saveBuildToFireStore(partData, buildReference) {
  if (buildReference) {
    const docRef = doc(db, "Builds", buildReference);
    await setDoc(docRef, partData);
    return docRef;
  } else {
    const docRef = await addDoc(collection(db, "/Builds"), partData);
    return docRef;
  }
}

export async function saveMessageToFireStore(message, buildReference) {
  if (buildReference) {
    const docRef = doc(db, "Builds", buildReference);
    await updateDoc(docRef, {
      messages: arrayUnion(message)
    });
    return docRef;
  } else {
    console.error("No build reference provided");
  }

}

export async function getBuildsNeedingSupport() {
  const DBQuery = query(
    collection(db, "/Builds"),
    where("needSupport", "==", true)
  );

  const snapshot = await getDocs(DBQuery);
  const list = snapshot.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });

  return list;
}

export async function setUserNeedsSupport(buildReference) {
	const docRef = doc(db, "Builds", buildReference);
    await updateDoc(docRef, {"needSupport": true});
    return docRef;
}