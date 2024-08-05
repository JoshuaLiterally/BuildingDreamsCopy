import React, { useEffect, useState } from 'react';
import { BiChevronsRight } from "react-icons/bi";
import './stylesheets//trustbanner.css';

const styles = {
    rightHeader: {
        fontSize: 36,
        fontFamily: 'Cousine',
        alignSelf: 'flex-end',
    },
    leftHeader: {
        fontSize: 32,
        fontFamily: 'Cousine',
        lineHeight: '125%',
    },
    subheader: {
        fontFamily: 'Cousine',
        marginTop: '1rem',
        marginBottom: '1rem',
    },
    subsubheader: {
        fontSize: 20,
        fontFamily: 'Cousine',
        lineHeight: '125%',
    }
}

export function TrustBanner() {

    const [count, setCount] = useState(482179);

    useEffect(() => {
        //Implementing the setInterval method
        const interval = setInterval(() => {
            setCount(count + 1);
        }, 1000);
 
        //Clearing the interval
        return () => clearInterval(interval);
    }, [count]);

    return (
        <div className="trust-banner">
            <div className='banner-box'>
                <p style={ styles.leftHeader } className='left-header'>Everything you need to create your <span style={{ color: 'var(--building-dreams-red)' }}>perfect</span> PC</p>
                <p style={ styles.subheader } className='trust-banner-subheader'>Building Dreams is more than just your run of the mill pc builder site. We have a team of hardware industry experts available 24/7 to support you at every step of your journey.</p>
            </div>
            <div className='banner-chevrons'>
                <BiChevronsRight color='var(--building-dreams-red)' size={160}/>
            </div>
            <div className='banner-box'>
                <p style={ styles.rightHeader }><span style={{ color: 'var(--building-dreams-red)' }}>{count} people around the globe</span> trust Building Dreams as there go-to configuration site.</p>
            </div>
        </div>
    )
}