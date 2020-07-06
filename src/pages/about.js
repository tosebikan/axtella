import React from 'react';
import { Link } from "gatsby";
import Layout from "../components/layout";
import './About.css';


const About = () => (
  <Layout>
  <div className="About-Hero">
  <div className="About1">
  <h1>About Us</h1>
  <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </p>
  <p>
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

    <div className="About-Button">
    <Link to="/contact"><button>
    Contact Us
    </button></Link>
    </div>
  </div>

    <div className="About-Image">
    <img src={require('../images/about.jpg')} alt="aboutus"/>
    </div>
  </div>
  <div className="Services">
    <h2>Services</h2>
    <div className="Services-Stack">
    <div className="Service">
    <div className="Icon-Container">
    <img src={require('../images/house2.png')}alt="house"/>
    </div>
      <p>Real Estate</p>
    </div>
    <div className="Service">
    <div className="Icon-Container">
    <img src={require('../images/hotel.png')}alt="house"/>
    </div>
      <p>Hotel Management</p>
    </div>
    <div className="Service">
    <div className="Icon-Container">
    <img src={require('../images/land.png')}alt="house"/>
    </div>
      <p>Land</p>
    </div>
    </div>
  </div>
  <div className="Quote">
  <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
    <div className="Profile">
    <img src={require('../images/about.jpg')}alt="profile"/>
    <h3>Edward</h3>
    <h4>-Axtella</h4>

    </div>
  </div>
  </Layout>
)

export default About;
