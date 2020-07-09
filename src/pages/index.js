import React, {useState} from "react"
import { Link } from "gatsby";
import Lottie from 'react-lottie';
import animationData from '../lotties/house';

import Layout from "../components/layout"
import '../components/layout.css';
import SEO from "../components/seo";
import data from '../data';

const IndexPage = (props) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('')

  const featured = data.properties.filter((property) => property.featured === true);

  const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };


  const submitForm = (ev) => {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setStatus("SUCCESS")
        setName('')
        setEmail('')
        setMessage('')
      } else {
        setStatus("ERROR")
      }
    };
    xhr.send(data);
  }

  return(
  <Layout>
    <SEO title="Home" />
    <div className="Hero">
      <div className="HeroGroup">
      <a href='tel:+2330558270333'><button className="ContactButton">
      <i style={{color: '#fff'}}className="material-icons">phone_iphone</i>
      +233 55 827 0333</button></a>
      <h1>FIND YOUR DREAM HOME TODAY</h1>
      <p>Contact Axtella for all your Construction & Real Estate Services.</p>
      <Link to="/contact"><button className="ContactUsButton">Contact us</button></Link>
     </div>

     <form className="Form"
     onSubmit={submitForm}
     action="https://formspree.io/xayppdyw"
     method="POST"
     >
     <p>Need Help?</p>
     <h2>MESSAGE US</h2>

     <label>
      <input
        name='name'
        value={name}
        placeholder="Your Name"
        onChange={(e) => setName(e.target.value)}
        required
      />
      </label>

      <label>
      <input
        name="_replyto"
        value={email}
        placeholder="Your Email"
        onChange={(e) => setEmail(e.target.value)}
        required
      />
     </label>

      <label className="Message">
      <textarea
      name="message"
        value={message}
        placeholder="Message"
        onChange={(e) => setMessage(e.target.value)}
        required
      />
     </label>
     <button>Send Message</button>
     {status === 'SUCCESS' ? <p style={{fontSize: 10, marginTop: 0, paddingTop: 3}}>Thanks!</p> : null}
      {
       status === "ERROR" && <p>Ooops! There was an error.</p>
     }
     </form>
    </div>

    <div className="Featured">
    <p>FEATURED LISTINGS</p>
    <h1>FIND YOUR PERFECT HOME</h1>
    <ul>
    {featured.map((feature, id) =>
      <li key={id}>
          <Link to={`/app/property-details/${feature.id}`}><img src={feature.image} alt="home1" className="Img"/></Link>
          <p className="Tag">{feature.tag}</p>
          <h2>{feature.title}</h2>
          <h5>{feature.address}</h5>
          <p className="Price">{feature.price}</p>
        </li>
    )}
    </ul>
    </div>

    <div className="AboutUs">
      <div className="AboutGroup">
      <h3>WHO WE ARE</h3>
      <h1>ABOUT US</h1>

      <p><b>Axtella Properties & Investments</b> is a fully legislated Real Estate Company based in Accra. <br/></p>
      <p>We have over 5 years combined experience covering Sales, Letting & Property Management.We are specialized in Luxury Properties & investment opportunities for foreign investors. Our reputation has grown to represent a trust worthy and transparent independent company providing an exceptional level of customer service... </p>
      <Link to="/about"><button>Read More</button></Link>
      </div>
        <div className="AboutImg">
        </div>
    </div>

    <div className="Featured">
    <p>FIND YOUR PERFECT HOME</p>
    <h1>UNIQUE LISTINGS</h1>
    <ul>
    {data.properties.map((property, id) =>
      <li key={id}>
      <Link to={`/app/property-details/${property.id}`}><img src={property.image} alt='property' className="Img"/></Link>
      <p className="Tag">{property.tag}</p>
      <h2>{property.title}</h2>
      <h5>{property.address}</h5>
      <p className="Price">{property.price}</p>
      </li>
    )}
    </ul>
    </div>

    <div className="Help">
    <div className="HelpGroup">
    <p>WE'RE HERE TO HELP YOU</p>
    <h1>WHAT ARE YOU LOOKING FOR</h1>
    </div>

    <div className="HelpCard">
      <ul>
        <li>
        <img src={require('../images/apartment.png')} alt="apartment" width="60px" height="60px"/>
        <h3> APARTMENTS</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <Link to="/properties"><button>Find Apartments</button></Link>
        </li>
        <li>
        <img src={require('../images/house.png')} alt="apartment" width="60px" height="60px"/>
        <h3> HOUSES</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <Link to="/properties"><button>Find Houses</button></Link>
        </li>
        <li>
        <img src={require('../images/office.png')} alt="apartment" width="60px" height="60px"/>
        <h3>OFFICES</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <Link to="/properties"><button>Find Offices</button></Link>
        </li>
      </ul>
    </div>


    </div>
    <div className="Finder">
      <p><i className="material-icons">phone_iphone</i>
      +233 54 135 6456</p>
      <h1>LET'S FIND THE RIGHT PROPERTY FOR YOU</h1>
      <Link to="/contact"><button>Contact us</button></Link>
      <Lottie
	    options={defaultOptions}
        height={200}
        width={200}
      />
    </div>
  </Layout>
)}

export default IndexPage
