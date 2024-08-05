import React from "react";
import Messages from "./messages";
import './style.css';

const PrevMess = props => {
    const { messages } = props;

    return(
        <div className="message-container">
            {messages && messages.map((message, index) => (
                <Messages key={index} message={message} />
            ))}
        </div>
    )
}

export default PrevMess;