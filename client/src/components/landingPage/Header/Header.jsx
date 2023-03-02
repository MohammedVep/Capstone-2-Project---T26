
import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import About from '../About/About';
import Features from '../Features/Features';
import Pricing from '../Pricing/Pricing';
import BecomeTutor from '../BecomeTutor/BecomeTutor';
import ApplyTutor from '../BecomeTutor/ApplyTutor';
import Benefits from '../Benefits/Benefits';
import Home from '../Home/Home';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';
import Payment from '../Signup/Payment';
import PayInfo from '../BecomeTutor/PayInfo'
import ChatApp from '../../registeredUsers/ChatApp';
import UserMainMenu from '../../registeredUsers/MainMenu';
import UserGetHelp from '../../registeredUsers/GetHelp';
import UserProfile from '../../registeredUsers/Profile';
import TutorBlogPost from '../../registeredTutors/BlogPost'
import TutorProfile from '../../registeredTutors/Profile'
import TutorHelpStudent from '../../registeredTutors/HelpStudent';
import TutorUpdateInformation from '../../registeredTutors/UpdateInformation'
import TutorMainMenu from '../../registeredTutors/MainMenu'
import UserSignOut from '../../registeredUsers/SignOut'
import UserCloseAccount from '../../registeredUsers/CloseAccount'
import TutorSignOut from '../../registeredTutors/SignOut'
import TutorCloseAccount from '../../registeredTutors/CloseAccount'

import HomePage from '../../registeredTutors/ChatComponents/videoChatComponents/Home';
import RoomPage from '../../registeredTutors/ChatComponents/videoChatComponents/Room'
import UserBlogPost from '../../registeredUsers/BlogPost'
import UserUpdateInformation from "../../registeredUsers/UpdateInformation"

import HeaderImg from '../../../images/100-header.png'
import AboutImg from '../../../images/about.png'
import WebCamImg from '../../../images/webcam.png'
import PricingImg from '../../../images/best-price.png'
import BenefitImg from '../../../images/benefits.png'
import TutorialImg from '../../../images/tutorial.png'
import RegisterImg from '../../../images/tutorial_logo.png'
import LoginImg from '../../../images/login.png'
  
const Header = () => {
  return (
        <BrowserRouter>
            <div className="main-header"> <img src={HeaderImg} alt="main-header-2" width="100%" height={120} /></div>
            <div className="flex-container">
                <div className="about"> <img src={AboutImg} alt="about" width={50} height={50} /> <Link to="/About">About</Link></div>
                <div className="features"> <img src={WebCamImg} alt="webcam" width={50} height={50} /><Link to="/Features">Features</Link></div>
                <div className="pricing"> <img src={PricingImg} alt="price" width={50} height={50} /><Link to="/Pricing">Pricing</Link></div>  
                <div className="benefits"> <img src={BenefitImg} alt="benefits" width={50} height={50} /><Link to="/Benefits">Benefits</Link></div>
                <div className="becomeTutor"><img src={TutorialImg} alt="tutorial" width={50} height={50} /><Link to="/BecomeTutor">Become Tutor</Link></div>
                <div className="register"> <img src={RegisterImg} alt="register" width={50} height={50} /><Link to="/Signup">Register</Link></div>
                <div className="login"> <img src={LoginImg} alt="login" width={50} height={50} /><Link to="/login">Login</Link></div>
            </div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/user/Profile" element={<UserProfile />} />
                <Route path="/About" element={<About />} />
                <Route path="/Features" element={<Features />}/>
                <Route path="/Pricing" element={<Pricing />}/>
                <Route path="/BecomeTutor" element={<BecomeTutor />}/>
                <Route path="/ApplyTutor" element={<ApplyTutor />}/>
                <Route path="/PayInfo" element={<PayInfo />} />
                <Route path="/Benefits" element={<Benefits />}/>
                <Route path="/Signup" element={<Signup />}/>
                <Route path="/Login" element={<Login />}/>
                <Route path="/Payment" element={<Payment />}/>
                <Route path="/ChatApp" element={<HomePage />} />
                <Route path="/room/:roomId" element={<RoomPage />} />
                <Route path="/user/MainMenu" element={<UserMainMenu />}/>
                <Route path="/user/GetHelp" element={<UserGetHelp />}/>
                <Route path="/user/BlogPost" element={<UserBlogPost />}/>
                <Route path='/user/UpdateInformation' element={<UserUpdateInformation /> } />
                <Route path='/user/SignOut' element={<UserSignOut />}/>
                <Route path='/user/CloseAccount' element={<UserCloseAccount />} />
                <Route path='tutor/MainMenu' element={<TutorMainMenu />} />
                <Route path='tutor/HelpStudent' element={<TutorHelpStudent />} />
                <Route path='tutor/BlogPost' element={<TutorBlogPost />} />
                <Route path='tutor/Profile' element={<TutorProfile />} />
                <Route path='tutor/UpdateInformation' element={<TutorUpdateInformation />} />
                <Route path='tutor/SignOut' element={<TutorSignOut />} />
                <Route path='tutor/CloseAccount' element={<TutorCloseAccount />} />
            </Routes>
        </BrowserRouter>
    
  )
}

export default Header