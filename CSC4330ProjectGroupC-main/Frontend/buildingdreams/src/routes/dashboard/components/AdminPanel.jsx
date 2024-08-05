import React, { useState, useEffect } from "react";
import Build from "./Build";
import "../stylesheets/buildsflex.css";
import { useNavigate } from "react-router-dom";
import { getBuildsNeedingSupport } from "../../../api/firebaseDB";
getBuildsNeedingSupport;

export default function AdminPanel() {
  const navigate = useNavigate();

  const [buildsNeedingSupport, setBuildsNeedingSupport] = useState([]);

  console.log("Admin Panel");
  console.log(buildsNeedingSupport);
  console.log(buildsNeedingSupport.id);

  useEffect(() => {
    const fetchBuildsNeedingSupport = async () => {
      const builds = await getBuildsNeedingSupport();
      setBuildsNeedingSupport(builds);
    };

    fetchBuildsNeedingSupport();
  }, []);

  return (
    <div className="buildsflex">
{buildsNeedingSupport.map((build, index) => (
  <button
    key={index}
    style={{
      backgroundColor: "var(--building-dreams-red)",
      border: "none",
      color: "white",
      padding: "15px 32px",
      textAlign: "center",
      textDecoration: "none",
      display: "inline-block",
      fontSize: "16px",
      margin: "4px 2px",
      cursor: "pointer",
      height: "100px",
      borderColor: "black",
      borderWidth: "2px",
      borderStyle: "solid",
    }}
    onClick={() => navigate(`/builds/create/${build.id}`)}
  >
    {build.BuildName}
  </button>
))}
    </div>
  );
}
