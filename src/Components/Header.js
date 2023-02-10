import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import About from './About';
import Features from './Features';
import Pricing from './Pricing';

export default function Header() {
    return (
        <>
            <div className="main-header"> <img src="Project Files/100-header.png" alt="main-header-2" width="100%" height={120} /></div>
            <div className="flex-container">
                <div className="about"> <img src="Project Files/about.png" alt="about" width={50} height={50} /> <a href="../about/about.html">About</a></div>
                <div className="features"> <img src="Project Files/webcam.png" alt="webcam" width={50} height={50} /><a href="../features/features.html">Features</a></div>
                <div className="pricing"> <img src="Project Files/best-price.png" alt="price" width={50} height={50} /><a href="../pricing/pricing.html">Pricing</a></div>  
                <div className="benefits"> <img src="Project Files/benefits.png" alt="benefits" width={50} height={50} /><a href="#Benefits">Benefits</a></div>
                <div className="becomeTutor"><img src="Project Files/tutorial.png" alt="tutorial" width={50} height={50} /><a href="#BecomeTutor">Become Tutor</a></div>
                <div className="register"> <img src="Project Files/tutorial_logo.png" alt="register" width={50} height={50} /><a href="#register">Register</a></div>
                <div className="login"> <img src="Project Files/login.png" alt="login" width={50} height={50} /><a href="#login">Login</a></div>
            </div>
        </>
    )
}
