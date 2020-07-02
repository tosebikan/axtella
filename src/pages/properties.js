import React from 'react'
import Layout from "../components/layout";
import './properties.css';


const Properties = () => (
  <Layout>
  <div className="Prop-Hero">
    <div className="Prop-Banner">
    {/*<img src={require('../images/propBanner.jpg')} alt="prop-banner"/>*/}
      <div className="Prop-Hero-Text">
      <p>We find the best<br/>
    houses for you.</p>
      </div>
    </div>

    <div className="Prop-Card">
    <img src={require('../images/home1.jpg')} alt="nice-house"/>

    </div>
  </div>
  </Layout>
)

export default Properties;
