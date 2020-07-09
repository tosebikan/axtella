import React from 'react';
import { Link } from "gatsby";
import Layout from "../components/layout";
import './About.css';


const About = () => (
  <Layout>
  <div className="About-Hero">
  <div className="About1">
  <h1>About Us</h1>
  <p><b>Axtella Properties & Investments</b> is a fully legislated Real Estate Company based in Accra. <br/> We have over 5 years combined experience covering Sales, Letting & Property Management. We are specialized in Luxury Properties & investment opportunities for foreign investors. Our reputation has grown to represent a trust worthy and transparent independent company providing an exceptional level of customer service.
  </p>
  <p>
  The team <b>Axtella</b> take the time to get to know each client on a one to one basis. We pride ourselves on our professionalism, efficiency and personal touch in dealing with every enquiry, if we don't have what you are looking for, we have an abundance of contacts throughout Ghana who can help us find your idyllic modern home<br/> Whether you're looking to buy, sell or rent, we can offer you a tailored service that you can't get anywhere else. If you have any questions, please don't hesitate to get in touch with us .</p>

  <p><b>Experienced-Trusted-Proven</b></p>

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
    <img src={require('../images/PM.png')}alt="house"/>
    </div>
      <p>Property Management</p>
    </div>
      <div className="Service">
      <div className="Icon-Container">
      <img src={require('../images/land.png')}alt="house"/>
      </div>
        <p>Land Sales</p>
      </div>
      <div className="Service">
      <div className="Icon-Container">
      <img src={require('../images/construction.png')}alt="house"/>
      </div>
        <p>Building Construction</p>
      </div>
      <div className="Service">
      <div className="Icon-Container">
      <img src={require('../images/rent&invest.png')}alt="house"/>
      </div>
        <p>Property Rentals & Investment</p>
      </div>
      <div className="Service">
      <div className="Icon-Container">
      <img src={require('../images/cleaning.png')}alt="house"/>
      </div>
        <p>Cleaning Services</p>
      </div>

    </div>
    <p style={{textAlign:'center', margin:0}}>Commercial & Residential</p>
  </div>
  <div className="Quote">
  <p>"Axtella Properties & Investments, we're dedicated to providing the best customer services at amazing costs and unbeatable client experiences "</p>
    <div className="Profile">
    <img src={require('../images/about.jpg')}alt="profile"/>
    <h3>Edward</h3>
    <h4>-Axtella</h4>

    </div>
  </div>
  </Layout>
)

export default About;
