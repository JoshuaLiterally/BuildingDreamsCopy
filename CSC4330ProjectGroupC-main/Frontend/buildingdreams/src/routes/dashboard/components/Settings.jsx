import React, { useState, useRef, useEffect } from "react";
import Build from "./Build";
import "../stylesheets/settings.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Settings(props) {


  return (
    <div className="settings">
      <h1>Settings</h1>
      <div>
        <h3>Change Username</h3>
        <input type="text" placeholder={props.username} />
        <button>Change Username</button>
      </div>
      <div>
        <h3>Change Password</h3>
        <input type="password" placeholder="New Password" />
        <button>Change Password</button>
      </div>
      <div>
        <h3>Delete Account</h3>
        <button>Delete Account</button>
      </div>
    </div>
  );
}
