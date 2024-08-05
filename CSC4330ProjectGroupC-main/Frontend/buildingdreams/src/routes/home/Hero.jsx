import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import './stylesheets/hero.css';

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignSelf: 'center',
        width: '35%',
        gap: '1rem'
    },
    header: {
        color: 'white', 
        fontFamily: 'Cousine', 
        fontSize: '1.35rem',
        marginBottom: 0
    },
    subheader: {
        color: 'var(--building-dreams-red)', 
        fontFamily: 'Cousine', 
        fontWeight: 'bold'
    },
    text: {
        color: 'white', 
        fontFamily: 'Cousine', 
        fontSize: 18, 
        lineHeight: '150%'
    },
    button: {
        fontFamily: 'Cousine',
        fontSize: '1rem',
        padding: '1rem',
        color: 'white',
        margin: 0,
        textDecoration: 'none',
        whiteSpace: 'nowrap',
    }
}

export function Hero() {
    return (
        <div className='hero-container'>
            <div style={ styles.container }>
                <p style={ styles.header }>Built For PC Enthusiasts & Begineers</p>
                <p style={ styles.subheader } className='hero-subheader'>BUILDING DREAMS</p>
                <p style={ styles.text } className='hero-text'>Building Dreams allows anyone to make their dream PC build a reality</p>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <Link style={ styles.button } className="hero-button" to="/signup">Join Building Dreams Now</Link>
                </div>
            </div>
            <Carousel className='carousel' autoPlay showIndicators={false} showArrows={false} showStatus={false} showThumbs={false} axis='vertical' interval={3500} infiniteLoop>
                <img style={{ width: '100%' }} src='public/Untitled_design_11_5d97869a-be31-4026-8403-7783b4e8b78d.png.webp' />
                <img style={{ width: '100%' }} src='public/nzxt-starter-pc-gaming-desktop.png.webp' />
                <img style={{ width: '100%' }} src='public/Avalanche_Hardline_Liquid_Cooled_Gaming_PC.png' />
                <img style={{ width: '100%' }} src='public/960x0.png.webp' />
                <img style={{ width: '100%' }} src='public/FOCUSEXTREME.png' />
            </Carousel>
            <div style={{ ...styles.container, alignItems: 'flex-end' }}>
                <p style={{ ...styles.header, fontWeight: 'bold', fontSize: '1.75rem' }}>Our Story</p>
                <p style={{ ...styles.text, fontSize: '1rem', textAlign: 'right' }} className='hero-text'>Building Dreams began as a unique PC integration service that allowed our founder to build customized PCs according to the customer's individual needs. After years of growing demand, we launched Building Dreams to the public to allow anyone to configure their dream builds at anytime, anywhere.</p>
            </div>
        </div>
    )
}