import React, {useState} from 'react';
import { MdOutlineSupportAgent } from "react-icons/md";


const SupportButton = props => {
    return(
        <div>
            <button className='help-button'
                onClick={() => props.onClick && props.onClick()}
            >
                <MdOutlineSupportAgent size={16}/>
            </button>
        </div>
    )
}

export default SupportButton;