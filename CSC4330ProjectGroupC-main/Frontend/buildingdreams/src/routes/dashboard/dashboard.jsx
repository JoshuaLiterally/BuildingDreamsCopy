import React, { useState, useEffect } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { auth } from "../../firebase";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Buildsflex from "./components/Buildsflex";
import Settings from "./components/Settings";
import AdminPanel from "./components/AdminPanel";

export default function Dashboard() {
  const [builds, setBuilds] = useState([]);
  const [username, setUsername] = useState("");
  const [currentTab, setCurrentTab] = useState("builds"); // Add a state variable for the current tab

  useEffect(() => {
    const fetchUserData = async () => {
      const db = getFirestore();
      const docRef = doc(db, "users", auth.currentUser.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setBuilds(docSnap.data().builds);
        setUsername(docSnap.data().username);
      } else {
        console.log("No such document!");
      }
    };

    fetchUserData();
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        overflowX: "hidden",
        overflowY: "hidden",
      }}
    >
      <div className="dashboard">
        <Header username={username} />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Sidebar username={username} setCurrentTab={setCurrentTab} />{" "}
          {/* Pass setCurrentTab to Sidebar */}
          {currentTab === "builds" ? (
            <Buildsflex builds={builds} />
          ) : currentTab === "admin" ? (
            <AdminPanel />
          ) : (
            <Settings username={username} /> // Render Settings when currentTab is not 'builds' or 'admin'
          )}
        </div>
      </div>
    </div>
  );
}
