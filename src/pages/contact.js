import React, {useState} from 'react'
import Layout from "../components/layout";
import './contact.css';


const Contact = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  return(
  <Layout>
  <div className="Contact-Hero">
    <div className='Contact-Map-Section'>
    <img src={require('../images/map.jpg')} alt="contact map"/>
      <div className="Contact-Address">
      <i style={{color: 'red'}}className="material-icons">place</i>
      <p>Coastal Spintex, Accra</p>
      </div>
    </div>

  <div className="Contact-Info">
    <div className="Contact-Info-Details">
      <div className="Contact-Info-Details-Block">
      <p>Phone</p>
      <h4>054135668</h4>
      </div>
      <div className="Contact-Info-Details-Block">
      <p>Email</p>
      <h4>Axtella@gmail.com</h4>
      </div>
      <div className="Contact-Info-Details-Block">
      <p>Mon - Fri: 8:00 am - 6pm</p>
      </div>
    </div>
    <form className="Contact-Info-Form">
      <label className="Name">
        <input
        name="name"
        value={name}
        placeholder="name"
        onChange={(e) => setName(e.target.value)}
        required
        />
      </label>
      <label className="Phone">
        <input
        name="phone"
        value={phone}
        placeholder="phone number"
        onChange={(e) => setPhone(e.target.value)}
        />
      </label>
      <label className="Email">
        <input
        name="email"
        value={email}
        placeholder="email address"
        onChange={(e) => setEmail(e.target.value)}
        required
        />
      </label>
      <label className="Contact-Message">
        <textarea
        value={message}
        placeholder="message"
        onChange={(e) => setMessage(e.target.value)}
        required/>
      </label>
      <button className="Form-Button">send message</button>
    </form>

  </div>
</div>
  </Layout>
)}

export default Contact;
