import React, { useState } from 'react'; // Add this line

import './style.css';
import { auth } from "../../../../firebase";
import {
    getBuildFromFireStore,
    saveBuildToFireStore,
    saveMessageToFireStore,
    setUserNeedsSupport
  } from "../../../../api/firebaseDB";

const Input = props => {
    const { buildReference } = props;

    const [text, setText] = useState('');

    async function handleSendClick() {
        if (!text) return;

        const newMessage = {
            sender: auth.currentUser.uid,
            message: text,
            timestamp: new Date().toISOString(),
        };

        try {
            await saveMessageToFireStore(newMessage, buildReference);
            await setUserNeedsSupport(buildReference);
        } catch (err) {
            console.log(err);
        } finally {
            setText('');
        }
    };

    return(
        <div className="chat-input-container">
            <input type="text" placeholder="Enter your message" onChange={e=>setText(e.target.value)}></input>
            <div className="send">
                <button className="sendButton" onClick={handleSendClick}>Send</button>
            </div>
        </div>
    )
}

export default Input;