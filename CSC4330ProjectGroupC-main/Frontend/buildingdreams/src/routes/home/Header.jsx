import React from 'react';
import { Link } from 'react-router-dom';
import './stylesheets/header.css'

export function Header() {
    return (
        <header>
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '2rem'}}>
                <Link className="logo" to="/">Building Dreams</Link>
                <nav className='sub-links'>
                    <ul>
                        <li><a href="/#features-section">Features</a></li>
                        <li><a href="/#contact-us-section">Contact Us</a></li>
                    </ul>
                </nav>
            </div>
            <div id="user-actions">
                <Link to="/login" style={{backgroundColor: 'transparent'}}>Log In</Link>
                <Link to="/signup">Start for free</Link>
            </div>
        </header>
    );
}