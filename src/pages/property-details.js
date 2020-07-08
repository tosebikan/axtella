import React from 'react';
import {Link} from 'gatsby';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Layout from "../components/layout";
import data from '../data';
import Map from './Map';

import './property-details.css';


const PropertyDetails = (props) => {
  console.log('m',props.id)
  const property = data.properties.find((x) => x.id === props.id)
  //console.log('data', data.properties)
  console.log('property',property)
  if (!props.id) return null

  const settings = {
      dots: true,
      fade:true,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      className:'slides'
    };

  return(
  <Layout>
  <div className="Details">
    <div className="Prop-Details-Section">
      {property.images ? <div className="SliderContainer">
      <Slider {...settings}>
      {property.images.map((image) =>
        <div key={image.url}>
          <img width='50%' src={image.url} alt="images"/>
        </div>
      )}
      </Slider>
      </div> : <img alt="home1" src={property.image}/>}



      <div className="Prop-Info">
        <div className="Prop-Info1">
        <h1>{property.title}</h1>
        <h3>{property.address}</h3>
        </div>
        <div className="Prop-Info2">
        <h1>Price: {property.price}</h1>
        <h3>{property.tag}</h3>
        </div>
      </div>

      <div className="Prop-Extra">
        <div className="Prop-ExtraInfo">
          <h3>Bedrooms</h3>
          <div className="Prop-ExtraBlock">
          <i className="material-icons">airline_seat_individual_suite</i>
          <h3 className="Info-Num">{property.bedrooms}</h3>
        </div>
      </div>
        <div className="Prop-ExtraInfo">
          <h3>Bathrooms</h3>
          <div className="Prop-ExtraBlock">
          <i className="material-icons">bathtub</i>
          <h3 className="Info-Num">{property.baths}</h3>
        </div>
      </div>

        <div className="Prop-ExtraInfo">
          <h3>Size</h3>
          <div className="Prop-ExtraBlock">
          <i className="material-icons">square_foot</i>
          <h3 className="Info-Num">{property.size}sqft</h3>
        </div>
      </div>
      </div>

      <div className="Description">
      <h3>Description</h3>
      <h4>"{property.details}"</h4>
      </div>
    </div>
    <div className="Map">
    <div className="Prop-Map-Container">
      <Map/>
    </div>
    <div className="Map-Info">
    <i className="material-icons">place</i>
    <h3>{property.address}</h3>
    </div>
    <div className="Map-Button-Container">
    <Link to="contact"><button className="Map-Button">Contact Us</button></Link>
    </div>
    </div>
  </div>

  </Layout>
)}

export default PropertyDetails;
