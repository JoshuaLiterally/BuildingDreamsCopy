import React, { useState } from 'react';
import Specifications from './Specifications';
import '../stylesheets/rightsidebar.css';
import SupportButton from './SupportButton';
import SupportChat from './SupportChat/chat';
import './SupportChat/style.css';

function formatUSD(number) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(number);
}

/**
 * @returns 
 */
export default function RightSideBar(props) {

    const { specs, total } = props;

    const price = formatUSD(total);

    const [ visible, setVisible ] = useState(false);

    return (
        <div className="overview-sidebar">
            <div className='specs-button' id='selected'>Specifications</div>
            <Specifications specs={specs}/>
            <div className='specs-checkout'>
                <p className='specs-part-title'>{price}</p>
                <div>
                    <SupportChat 
                        visible={visible} messages={props.messages} buildReference={props.buildReference}
                    />

                    <SupportButton 
                        onClick={() => setVisible(visible => !visible)}
                    />
                </div>
                <button className='checkout-button'>Checkout</button>
            </div>
        </div>
    )
}