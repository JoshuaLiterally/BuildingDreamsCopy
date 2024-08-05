import React from 'react';
import { useNavigate } from "react-router-dom";
import "./home.css";

import { Header } from './Header';
import { Hero } from './Hero';
import { TrustBanner } from './TrustBanner';
import { Feature } from './Feature';
import { ExtraFeatures } from './ExtraFeatures';
import { Contact } from './Contact';

/* import schedulePic from '../../assets/media/IMG_CC245961636B-1-portrait.png';
import overviewPic from '../../assets/media/IMG_0164-portrait.png';
import manualPic from '../../assets/media/IMG_0163-portrait.png';
import websitePic from '../../assets/media/IMG_0160-portrait.png'; */

const styles = {
    container: {
        width: '100dvw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        overflowX: 'hidden'
    }
}

function HomePage() {
	if (true) {
		return (
			<div style={ styles.container }>
				<Header />
				<Hero />
				<TrustBanner />
				<ExtraFeatures />
				<Contact />
			</div>
		)
	}
}

export default HomePage;