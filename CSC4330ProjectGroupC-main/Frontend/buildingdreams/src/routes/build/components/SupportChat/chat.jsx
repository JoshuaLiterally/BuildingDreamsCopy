import React from 'react';
import Messages from './messages';
import PrevMess from './prevMessages';
import Input from './input';
import './style.css';

const SupportChat = props => {
    const { messages, visible, buildReference } = props;

    return (
        <div className='chat-container' style={!visible ? {display: 'none'} : null}>
            <p style={{fontFamily: 'Cousine', paddingTop: '.5rem', paddingBottom: '.5rem', width: '100%', textAlign: 'center', backgroundColor: 'white', borderBottom: '3px solid var(--building-dreams-red)'}}>Support Chat</p>
            <PrevMess messages={messages}/>
            <Input buildReference={buildReference} />
        </div>
    )
}

export default SupportChat