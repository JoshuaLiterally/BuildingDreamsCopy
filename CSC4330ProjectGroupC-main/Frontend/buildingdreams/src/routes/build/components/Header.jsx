import React, { useState, useRef, useEffect } from "react";
import "../stylesheets/header.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

/**
 * @TODO Make build name input sizing dynamic
 * @param {String} username
 * @param {String} buildReference
 * @param {String} buildName
 * @param {function} setBuildName
 * @returns
 */
export default function Header(props) {
  const navigate = useNavigate();

  const { saveBuild } = props;

  const { username, buildReference, buildName, setBuildName } = props;

  const DEFAULT_BUILD_NAME = "Untitled";

  const [copySuccess, setCopySuccess] = useState("");

  const [isEdittingName, setIsEdittingName] = useState(false);

  const handleClick = () => {
    navigate(`/dashboard`);
  };

  function handleNameChange(e) {
    setBuildName(e.target.value);
  }

  function handleInputBlur() {
    setIsEdittingName(false);
    if (buildName == "") {
      setBuildName(DEFAULT_BUILD_NAME);
    }
  }

  return (
    <header className="editor-header">
      <a className="editor-logo" href="/">
        Building Dreams
      </a>
      <div className="editor-build-info">
        {!isEdittingName ? (
          <p onClick={handleClick} className="editor-build-info-username">
            {username || "Unknown"}
            <span style={{ fontSize: 24, fontWeight: 800 }}> / </span>
          </p>
        ) : null}
        <div>
          <input
            type="text"
            className="build-name-input"
            value={buildName}
            onChange={handleNameChange}
            onFocus={() => setIsEdittingName(true)}
            onBlur={handleInputBlur}
            maxLength={16}
          />
        </div>
      </div>

      <div className="editor-header-tools">
        <input
          className="editor-sharebutton"
          type="button"
          value="Share"
          onClick={() => {
            navigator.clipboard.writeText(
              "Check out my new build I made on Building Dreams! " +
                window.location.href
            );
            setCopySuccess("Copied to clipboard!");
            setTimeout(() => setCopySuccess(""), 2000); // hide the message after 2 seconds
          }}
        />
        {copySuccess && <div className="copy-success">{copySuccess}</div>}
        <input
          className="editor-share"
          type="button"
          value="Save"
          onClick={saveBuild}
        />
      </div>
    </header>
  );
}
