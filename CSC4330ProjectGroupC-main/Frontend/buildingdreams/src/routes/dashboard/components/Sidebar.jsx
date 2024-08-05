import React, { useState } from "react";
import "../stylesheets/sidebar.css";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { auth } from "../../../firebase";

export default function Sidebar(props) {
  // Add adminid from google auth
  const userID = auth.currentUser.uid;
  const adminId = "IsNpfucZZgM9bZmlikY3JlWIfxj1";

  const { username, setCurrentTab } = props;
  const handleLogout = () => {
    auth
      .signOut()
      .then(() => {
        // Sign-out successful.
        console.log("User logged out");
        window.location.href = "/";
      })
      .catch((error) => {
        // An error happened.
        console.error("Error logging out", error);
      });
  };
  return (
    <div className="dashboard-sidebar">
      <div className="dashboard-sidebar-category-container">
        {
          <>
            <img
              src="https://i.kym-cdn.com/entries/icons/facebook/000/048/010/side_eye_cat.jpg"
              alt="Mr Fresh"
            />{""}
            {}
            <h1>Hi {username}!</h1>
            <div className="categories">
              <h3 onClick={() => setCurrentTab("builds")}>My Builds</h3>
              <h3 onClick={() => setCurrentTab("settings")}>Settings</h3>
              {userID === adminId && (
                <h3 onClick={() => setCurrentTab("admin")}>Admin Dashboard</h3>
              )}
              <h3 onClick={handleLogout}>Logout</h3>
            </div>
          </>
        }
      </div>
    </div>
  );
}
