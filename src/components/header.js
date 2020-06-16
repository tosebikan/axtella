import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './Header.css';


const Header = ({ siteTitle }) => (
  <div className="Header">
    <div className="HeaderGroup">
      <Link to="/"><img src={require('../images/logo.png')} width='100' alt={siteTitle}/></Link>
      <Link to="/about">Home</Link>
      <Link to="/about-us<">About us</Link>
      <Link to="/properties">Properties</Link>
      <Link to="/agents">Agents</Link>
      <Link to="/faq">FAQ</Link>
      <Link to="/contact">Contact</Link>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
