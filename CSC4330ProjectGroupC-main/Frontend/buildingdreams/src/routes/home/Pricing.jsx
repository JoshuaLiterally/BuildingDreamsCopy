import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import './stylesheets//pricing.css';

const styles = {
    button: {
        width: 'min-content',
        fontFamily: 'Cousine',
        fontSize: '1rem',
        padding: '.75rem',
        color: 'white',
        textDecoration: 'none',
        whiteSpace: 'nowrap',
    },
    main: {
        border: '3px solid var(--building-dreams-red)'
    }
}

function Plan(props) {
    const { title, subtitle, price, includes, features, isMain } = props;

    return (
        <div style={ isMain ? styles.main : null} className='plan-container'>
            <p className='plan-title'>{title}</p>
            <p className='plan-subtitle'>{subtitle}</p>
            <p className='plan-price'>${price}/mo</p>
            <Link 
                style={ styles.button } 
                className="hero-button" 
                to={ "https://apps.apple.com/us/app/coorly-for-mobile-detailers/id6449264347" }
            >
                Start <span style={{ fontFamily: 'Cousine' }}>free</span> trial
            </Link>
            <p className='plan-includes'>{includes ?? "Includes:"}</p>
            {
                features.map((feature) => {
                    return (
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', margin: '.25rem'}}>
                            <IoMdCheckmarkCircleOutline color='var(--building-dreams-red)' size='24px'/>
                            <p className='plan-feature'>{feature}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export function Pricing(props) {

    const features = {
        basic: [
            "Scheduling & Appointments",
            "Business Management",
            "Unlimited Reminders",
            "Unlimited Client Text Alerts",
            "Branded Booking Website",
            "Detailed Appointment Overviews"
        ],
        plus: [
            "More Schedule Customization",
            "Marketing Tools",
            "Client Database",
            "More Booking Site Customization",
            "Deposits (Soon)",
            "Payment Processing (Soon)"
        ]
    }

    return (
        <div className='pricing-container' id='pricing-section'>
            <p className='pricing-header'>Choose the <span style={{ color: 'var(--building-dreams-red)' }}>Perfect</span> Plan for Your Detailing Business</p>
            <p className='pricing-subheader'>Whether you just started your business yesterday, or have been in the industry for years; our <span style={{ fontFamily: 'Cousine' }}>flexible pricing options</span> are tailored to meet your business' needs as it grows with <span style={{ fontFamily: 'Cousine' }}>powerful tools</span> to match your business requirements. New users enjoy a <span style={{ fontFamily: 'Cousine' }}>free</span> trial of up to <span style={{ fontFamily: 'Cousine' }}>21 days</span>.</p>
            <div style={{ marginTop: '2rem' }} className='plans-container'>
                <Plan 
                    title="Basic" 
                    subtitle="Perfect for new businesses looking to grow." 
                    price="25"
                    features={features.basic}
                    isMain
                />
{/*                 <Plan 
                    title={<span style={{ color: 'var(--building-dreams-red)' }}>Plus</span>}
                    subtitle="Perfect for established businesses looking to scale." 
                    price="45"
                    includes={<>Everything in <span style={{ color: 'var(--building-dreams-red)', fontFamily: 'Cousine' }}>Basic</span>, plus:</>}
                    features={features.plus}
                    isMain
                /> */}
            </div>
        </div>
    )
}