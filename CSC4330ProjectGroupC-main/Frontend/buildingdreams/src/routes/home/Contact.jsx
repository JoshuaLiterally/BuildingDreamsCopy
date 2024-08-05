import React, { useEffect } from 'react';
import './stylesheets/contact.css';

const styles = {
    leftContainer: {
        padding: '1rem',
    },
    rightContainer: {
        padding: '1rem',
        backgroundColor: 'var(--building-dreams-red)'
    },
    leftHeader: {
        color: '#0a1021',
        fontFamily: 'Cousine',
        fontSize: '2rem',
        margin: '.50rem',
    },
    rightHeader: {
        color: 'white',
        fontFamily: 'Cousine',
        fontSize: '2rem',
        margin: '.50rem',
    },
    leftText: {
        color: '#0a1021',
        fontFamily: 'Cousine',
        fontSize: '1rem',
        margin: '.50rem',
    },
    rightText: {
        color: 'white',
        fontFamily: 'Cousine',
        fontSize: '1rem',
        margin: '.50rem',
    },
    email: {
        color: 'white',
        fontFamily: 'Cousine',
        fontSize: '1.25rem',
        margin: '.50rem',
        textDecoration: 'underline'
    }
}

export function Contact() {
    return (
        <div className='contact-us' id='contact-us-section'>
            <div style={ styles.leftContainer } className="contact-left-container">
                <p style={ styles.leftHeader } id="contact-left-header">We're here</p>
                <p style={ styles.leftText } id="contact-left-text">Whether you have a question, suggestion, or just want to say hi, we're here for you.</p>
            </div>
            <div style={ styles.rightContainer } className="contact-right-container">
                <p style={ styles.rightHeader } id="contact-right-header">Let's talk</p>
                <p style={ styles.rightText } id="contact-right-text">We can't wait to connect with you and make magic happen.</p>
                <a style={ styles.email } id="contact-email" href="mailto: support@buildingdreams.com">support@buildingdreams.com</a>
            </div>
        </div>
    )
}