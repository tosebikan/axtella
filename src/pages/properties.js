import React from 'react'
import Layout from "../components/layout";
import './properties.css';


const Properties = () => (
  <Layout>
  <div className="Prop-Hero">
    <div className="Prop-Banner">
      <div className="Prop-Hero-Text">
      <p>We find the best<br/>
    houses for you.</p>
      </div>
    </div>

    <div className="Prop-Container">
    <div className="Prop-Section">
    <img className="Center" src={require('../images/home1.jpg')} alt="nice-house"/>
      <div className="Prop-Details">
        <div className="Prop-Details-Top">
        <p>Modern Apartment</p>
        <p>$ 100,000</p>
        </div>
        <div className="Prop-Details-Bottom">
        <p>Coastal Spintex, Accra Ghana</p>
        <h4> For Sale</h4>
        </div>
      </div>
    </div>

      <div className="Prop-Section">
      <img className="Center" src={require('../images/home2.jpg')} alt="nice-house"/>
        <div className="Prop-Details">
          <div className="Prop-Details-Top">
          <p>Family Home</p>
          <p>$ 200,000</p>
          </div>
          <div className="Prop-Details-Bottom">
          <p>Coastal Spintex, Accra Ghana</p>
          <h4> For Sale</h4>
          </div>
        </div>
      </div>

      <div className="Prop-Section">
      <img className="Center" src={require('../images/home3.jpg')} alt="nice-house"/>
        <div className="Prop-Details">
          <div className="Prop-Details-Top">
          <p>Apartment</p>
          <p>$ 5,000</p>
          </div>
          <div className="Prop-Details-Bottom">
          <p>Coastal Spintex, Accra Ghana</p>
          <h4> For Rent</h4>
          </div>
        </div>
      </div>

      <div className="Prop-Section">
      <img className="Center" src={require('../images/home4.jpg')} alt="nice-house"/>
        <div className="Prop-Details">
          <div className="Prop-Details-Top">
          <p>Apartment</p>
          <p>$ 5,000</p>
          </div>
          <div className="Prop-Details-Bottom">
          <p>Coastal Spintex, Accra Ghana</p>
          <h4> For Rent</h4>
          </div>
        </div>
      </div>


    </div>
  </div>
  </Layout>
)

export default Properties;
