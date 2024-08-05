import React, { useEffect } from 'react';
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import './stylesheets//extrafeatures.css';

const styles = {
    container: {
        width: '100%',
        alignItems: 'center',
        backgroundColor: 'var(--building-dreams-red)',
        margin: '2rem',
        padding: '3rem',
        justifyContent: 'space-around'
    },
    featuresContainer: {
        backgroundColor: 'white',
        padding: '1rem'
    },
    featureDiv: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        margin: '.5rem'
    },
    featureText: {
        fontFamily: 'Cousine',
        fontSize: '1rem',
        marginLeft: '.5rem'
    }
}

const features = [
    "Plan your dream PC build",
    "24/7 Expert Support",
    "Accurate Pricing Estimates",
    "Extensive Part Selection",
    "Accurate Component Specifications",
    "Compatibility Checking",
    "Real Time Messaging",
]

export function ExtraFeatures(props) {
    return (
        <div style={ styles.container } className='extra-features' id="features-section">
            <div style={{width: '50%', display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                <p className='extra-features-header'>We have everything you need</p>
                <p className='extra-features-subheader'>We provide you with all the tools you need to plan & configure the perfect PC build that meets all of your requirements.</p>
            </div>
            <div className='extra-features-container'>
                {
                    features.map((feature) => {
                        return (
                            <div style={ styles.featureDiv }>
                                <IoMdCheckmarkCircleOutline color='var(--building-dreams-red)' size={32}/>
                                <p style={ styles.featureText }>{feature}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}