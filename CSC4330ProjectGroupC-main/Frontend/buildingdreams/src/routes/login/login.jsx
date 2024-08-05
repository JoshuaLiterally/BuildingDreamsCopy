import React, { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { LineWave } from 'react-loader-spinner';
import { auth } from '../../firebase';
import './stylesheets/login.css';

export function LoginPage() {

	const navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);

	async function login() {
		setError('');
		setLoading(true);

		try {
			await signInWithEmailAndPassword(auth, email, password);
			navigate('/dashboard');
		} catch (err) {
			setError("You have entered the wrong email or password, please try again.");
		} finally {
			setLoading(false);
		}		
	}

	return (
		<div className='login-container'>
			<div className='form-container'>
				<Link className="logo" to="/"><p >Building Dreams</p></Link>
				<p className="header-text">A New Building Experience.</p>
				<div className="input-container">
					<label for="login-credential">Email</label>
					<input type="text" id="login-credential" name="login-credential" placeholder="e.g. johndoe@gmail.com" maxLength={100} value={email} onChange={(e) => setEmail(e.target.value)}/>
				</div>
				<div className="input-container">
					<label for="login-credential">Password</label>
					<input type="password" id="login-credential" name="login-credential" placeholder="Password" maxLength={100} value={password} onChange={(e) => setPassword(e.target.value)}/>
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
				<button className="create-account-button" disabled={email.length == 0} onClick={login}>Continue</button>
			</div>
		</div>
	)
}

export default LoginPage;