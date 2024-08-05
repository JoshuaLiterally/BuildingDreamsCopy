import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './routes/login/login';
import HomePage from './routes/home/home';
import BuildPage from './routes/build/BuildPage';
import Dashboard from './routes/dashboard/dashboard';
import Signup from './routes/signup/signup';
import './global.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <HomePage/> }/>
                <Route path='/login' element={ <LoginPage/> }/>
                <Route path='/builds' element={ null }/> {/* Builds Page */}
                <Route path='/dashboard' element={ <Dashboard/> }/>
                <Route path='/builds/create/:buildReference?' element={ <BuildPage/> }/>
                <Route path="/signup" element={<Signup/>}/>
                <Route path='*' element={ null }/> {/* Error Page */}
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);