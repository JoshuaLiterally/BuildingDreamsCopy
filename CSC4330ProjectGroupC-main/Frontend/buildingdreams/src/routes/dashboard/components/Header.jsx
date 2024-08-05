import React, { useState, useRef, useEffect } from 'react';
import '../stylesheets/header.css';

/**
 * @param {String} username
 * @returns 
 */
export default function Header(props) {
    const { username } = props;
    
    return (
        <header className="dashboard-header">
            <a className="dashboard-logo" href='/'>Building Dreams</a>
            <h1>PC Builds</h1>
            {/* This is where a user popup will go */}
            <h2>{username}</h2>
        </header>
    )
}