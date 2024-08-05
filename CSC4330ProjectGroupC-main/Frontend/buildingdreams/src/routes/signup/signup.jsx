import React, {useState} from 'react';
import { NavLink, useNavigate, Link } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { getFirestore, doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { LineWave } from 'react-loader-spinner';
import { FiChevronsRight } from 'react-icons/fi';
import './stylesheets/signup.css'

const features = [
    "Plan your dream PC build",
    "24/7 Expert Support",
    "Accurate Pricing Estimates",
    "Extensive Part Selection",
    "Accurate Component Specifications",
    "Compatibility Checking",
    "Real Time Messaging",
]

export function Signup() {
	const navigate = useNavigate();

	const [email, setEmail] = useState('');
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);

	async function onSubmit() {
		setError("");
		setLoading(true);
	
		try {
			const { user } = await createUserWithEmailAndPassword(auth, email, password);
			
			const db = getFirestore();
	
			// Create a new document in the 'users' collection
			await setDoc(doc(db, 'users', user.uid), {
				uid: user.uid,
				email: user.email,
				username: username,
				created_time: serverTimestamp(),
				builds: [],
				// Add other data as needed
			});

			navigate("/login")

		} catch (err) {
			setError("There was a problem creating your account, please try again.");
		}
	}

	if (true) {
		return (
			<div className='signup-container'>
				<div className='form-container'>
					<Link className="logo" to="/"><p>Building Dreams</p></Link>
					<h1>Lets get started!</h1>
					<p style={{fontFamily: 'Cousine'}}>Sign up & use Building Dreams completely for free.</p>
					<div className="input-container">
						<label for="email">Email*</label>
						<input type="text" id="email" name="email" placeholder="e.g. johndoe@gmail.com" maxLength={100} value={email} onChange={(e) => setEmail(e.target.value)}/>
					</div>
					<div className="input-container">
						<label for="email">Username*</label>
						<input type="text" id="username" name="username" placeholder="e.g. johndoe" maxLength={100} value={username} onChange={(e) => setUsername(e.target.value)}/>
					</div>
					<div className="input-container">
						<label for="full-name">Password* (atleast 6 characters)</label>
						<input type="text" id="full-name" name="full-name" placeholder="" value={password} onChange={(e) => setPassword(e.target.value)}/>
					</div>
					{
						loading
						?
						<LineWave
							height="100"
							width="100"
							color="#CC3009"
							ariaLabel="line-wave"
							visible
						/>
						:
						<p style={{textAlign: 'center', width: '50%', fontFamily: 'Cousine', marginTop: 8}}>{error}</p>
					} 
					<button className="create-account-button" disabled={password.length < 6 || email.length < 10} onClick={onSubmit}>Create Account</button>
				</div>
				<div className='features-container'>
					<div className='features-box'>
						<h2 style={{marginTop: 0}}>Try Building Dreams out!</h2>
						<p style={{fontFamily: 'Cousine', marginBottom: '1rem'}}>Watch your dream PC take shape right before your eyes.</p>
						{
							features.map((name) => {
								return (
									<div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
										<FiChevronsRight color='#CC3009' size={18} style={{ marginRight: 4 }}/>
										<p style={{fontFamily: 'Cousine'}}>{name}</p>
									</div>
								)
							})
						}
					</div>
				</div>
			</div>
		)
	} else {
		return (
			<div className="body">
			<div className="login-box">
				<div className="header-text">Create an account with Building Dreams</div>
	
				<div className="email-text">Email address</div>
				<div className="email-input-container">
				<input
					type="email"
					placeholder="Email address"
					onChange={(e) => setEmail(e.target.value)}
					required
				/>
				</div>
	
				<div className="password-text">Password</div>
				<div className="password-input-container">
				<input
					type="password"
					placeholder="Password"
					onChange={(e) => setPassword(e.target.value)}
					required
				/>
				</div>
	
				<div className="login-button-container">
				<button type="submit" onClick={onSubmit}>Sign up</button>
				</div>
	
				<p className="signup-link">Already have an account? <NavLink to="/login">Sign in</NavLink></p>
			</div>
			</div>
		)
	}
}

export default Signup;