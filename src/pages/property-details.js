import React from 'react'
import Layout from "../components/layout";
import data from '../data';

import './property-details.css';


const PropertyDetails = (props) => {
  console.log('m',props.id)
  const property = data.properties.find((x) => x.id === props.id)
  //console.log('data', data.properties)
  console.log('property',property)
  return(
  <Layout>
  <div className="Details">
    <div className="Prop-Details">
      <img alt="home1" src={require('../images/test.jpg')}/>
      <div className="Prop-Info">
        <div className="Prop-Info1">
        <h1>{property.title}</h1>
        <h3>{property.address}</h3>
        </div>
        <div className="Prop-Info2">
        <h1>Price: ${property.price}</h1>
        <h3>{property.tag}</h3>
        </div>
      </div>
    </div>
    <div className="Map">
    <img alt="home1" src={require('../images/test.jpg')}/>
    {/*  <img src={property.image} alt="home1"/> */}
    </div>
  </div>

  </Layout>
)}

export default PropertyDetails;
