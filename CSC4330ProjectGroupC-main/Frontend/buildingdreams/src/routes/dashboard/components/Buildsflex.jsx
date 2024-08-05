import React, { useState, useRef, useEffect } from "react";
import Build from "./Build";
import "../stylesheets/buildsflex.css";
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


export default function Buildsflex({ builds }) {
  const navigate = useNavigate();

  const handleNewBuild = () => {
    console.log("Creating a new build...");
    // Navigate to the build page
    navigate('/builds/create');
    };

  return (
    <div className="buildsflex">
      <div className="buildsflex-header"> </div>
      {builds.map((build, index) => (
        <Build key={index} build={build} />
      ))}
      <div className="partcontainer" onClick={handleNewBuild}>
        <div className="new-build-container">
          <div className="new-build-icon"></div>
          <h5>+</h5>
          <h4>Create New Build</h4>
        </div>
      </div>
    </div>
  );
}
