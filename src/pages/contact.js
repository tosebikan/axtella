import React from 'react'
import Layout from "../components/layout";
import './contact.css';


const Contact = () => (
  <Layout>
  <div className="Contact-Hero">
    <div className='Contact-Map-Section'>
    <img src={require('../images/map.jpg')} alt="contact map"/>
      <div className="Contact-Address">
      <i className="material-icons">place</i>
      <p>Coastal Spintex, Accra</p>
      </div>
    </div>
  </div>
  </Layout>
)

export default Contact;
