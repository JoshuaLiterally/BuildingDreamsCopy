import React, { useState, useRef, useEffect } from "react";
import "../stylesheets/build.css";
import { useNavigate } from "react-router-dom";


export default function Build({ build }) {
  const { image, name, reference } = build;
  const navigate = useNavigate();


  console.log(image); // Add this line to check the image URL

  const handleClick = () => {
    // If reference ID is not define, then the reference is stored as a string, not an object
    // The string would like like this Build/1234567890
    // So we just need to extract the ID from the string
    if (typeof reference === 'string') {
      console.log("The reference is a string")
      const id = reference.split('/')[1];
      console.log('Going to build page with reference:', id);
      navigate(`/builds/create/${id}`);
      return;
    }
    console.log("The reference is an object")
    console.log(reference);
    console.log('Going to build page with reference:', reference.id);
    navigate(`/builds/create/${reference.id}`);
  };

  return (
    <div className="partcontainer" onClick={handleClick}>
      <img src={image} alt={name} />
      <h4>{name}</h4>
    </div>
  );
}