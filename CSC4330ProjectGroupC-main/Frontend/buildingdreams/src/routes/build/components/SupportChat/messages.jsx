import React from "react";
import './style.css';
import { auth } from '../../../../firebase';


const Messages = props => {
    const { message } = props;

    if(auth.currentUser.uid == "IsNpfucZZgM9bZmlikY3JlWIfxj1"){
        if(message.sender == "IsNpfucZZgM9bZmlikY3JlWIfxj1"){
            return(
                <div className="user-message">
                    <p>{message.message}</p>
                </div>
            )
        }
        else{
            return(
                <div className="admin-message"> 
                    <p>{message.message}</p>
                </div>
            )
        }
    }
    else{
        if(message.sender == auth.currentUser.uid){
            return(
                <div className="user-message">
                    <p>{message.message}</p>
                </div>
            )
        }
        else{
            return(
                <div className="admin-message">
                    <p>{message.message}</p>
                </div>
            )
        }
    }
    
}

export default Messages;