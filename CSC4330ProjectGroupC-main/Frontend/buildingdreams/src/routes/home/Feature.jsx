import React, { useEffect } from 'react';
import { BiChevronsRight } from "react-icons/bi";
import './stylesheets/feature.css';

let isLargeScreen = window.innerWidth > 800;

window.addEventListener("resize", () => {
    isLargeScreen = window.innerWidth > 800;
});

const styles = {
    blueBar: {
        width: '100%',
        height: 3,
        backgroundColor: 'var(--building-dreams-red)',
    },
    title: {
        fontFamily: 'Cousine',
        fontSize: '1.65rem'
    },
    subtitle: {
        fontFamily: 'Cousine',
        fontSize: '1rem',
    }
}

export function Feature(props) {

    const { rtl, title, subtitle, src } = props;

    return (
        <div style={ rtl && isLargeScreen ? { flexDirection: 'row-reverse' } : null } className="feature-container">
            <div style={ rtl && isLargeScreen ? { marginRight: 0, marginLeft: '4rem' } : null } className='image-and-bar'>
                <div className='image-container'>
                    <img src={src}/>
                </div>
                <div style={ styles.blueBar }/>
            </div>
            <div className='text-container'>
                <p style={ styles.title } className='feature-title'>{title}</p>
                <p style={ styles.subtitle } className='feature-subtitle'>{subtitle}</p>
            </div>
        </div>
    )
}