import React, {useState} from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo";



const IndexPage = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  return(
  <Layout>
    <SEO title="Home" />
    <div className="Hero">
      <div className="HeroGroup">
      <button className="ContactButton">
      <i class="material-icons">phone_iphone</i>
      +233 54 135 6456</button>
      <h1>FIND YOUR DREAM HOME TODAY</h1>
      <p>Contact Axtella for all your Construction & Real Estate Services.</p>
      <button className="ContactUsButton">Contact us</button>
     </div>

     <form className="Form">
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
        name='email'
        value={email}
        placeholder="Your Email"
        onChange={(e) => setEmail(e.target.value)}
        required
      />
     </label>

      <label className="Message">
      <input
        name='message'
        value={message}
        placeholder="Message"
        onChange={(e) => setMessage(e.target.value)}
        required
      />
     </label>
      <button>Send Message</button>
     </form>
    </div>

    <div>
    <p>FEATURED LISTINGS</p>
    <h1>FIND YOUR PERFECT HOME</h1>
    <ul>
      <li>
        <img src={require('../images/home1.jpg')} alt="home1" width="200"/>
        <p>For Sale</p>
        <h2>Modern Apartment</h2>
        <p>$1000/MO</p>
      </li>
    </ul>

    </div>


    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)}

export default IndexPage
