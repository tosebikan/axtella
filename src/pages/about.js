import React from 'react'
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
  <button>
  <i className="material-icons">place</i>
  Contact Us
  </button>
  </div>
  </div>

  <div className="About-Image">
  <img src={require('../images/about.jpg')} alt="aboutus"/>
  </div>
  </div>
  <div className="Services">
    <h3>Services</h3>
    <div className="Service">
    <i className="material-icons">place</i>
      <p>Real Estate</p>
    </div>

  </div>
  </Layout>
)

export default About;
