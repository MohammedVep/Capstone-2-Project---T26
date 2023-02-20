import React from 'react'
import About from '../About/About';
import Features from '../Features/Features';
import Pricing from '../Pricing/Pricing';
import BecomeTutor from '../BecomeTutor/BecomeTutor';
import Benefits from '../Benefits/Benefits';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const Header = () => {
  return (
    <>
        <Router>
            <div className="main-header"> <img src="Project Files/100-header.png" alt="main-header-2" width="100%" height={120} /></div>
            <div className="flex-container">
                <div className="about"> <img src="../../Project Files/about.png" alt="about" width={50} height={50} /> <Link to="/About">About</Link></div>
                <div className="features"> <img src="../../Project Files/webcam.png" alt="webcam" width={50} height={50} /><Link to="/Features">Features</Link></div>
                <div className="pricing"> <img src="../../Project Files/best-price.png" alt="price" width={50} height={50} /><Link to="Pricing">Pricing</Link></div>  
                <div className="benefits"> <img src="../../Project Files/benefits.png" alt="benefits" width={50} height={50} /><Link to="Benefits">Benefits</Link></div>
                <div className="becomeTutor"><img src="../../Project Files/tutorial.png" alt="tutorial" width={50} height={50} /><Link to="#BecomeTutor">Become Tutor</Link></div>
                <div className="register"> <img src="../../Project Files/tutorial_logo.png" alt="register" width={50} height={50} /><a href="#register">Register</a></div>
                <div className="login"> <img src="../../Project Files/login.png" alt="login" width={50} height={50} /><a href="#login">Login</a></div>
            </div>
            <Switch>
                <Route path="/About"><About /></Route>
                <Route path="/Features"><Features /></Route>
                <Route path="/Pricing"><Pricing /></Route>
                <Route path="/BecomeTutor"><BecomeTutor /></Route>
                <Route path="/Benefits"><Benefits /></Route>
            </Switch>
            </Router>
    </>
  )
}

export default Header