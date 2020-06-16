import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './Header.css';


const Header = ({ siteTitle }) => {
  const [isExpanded, toggleExpansion] = React.useState(false)
  return(
  <div className="Header">
  <Link to="/"><img src={require('../images/logo.png')} width='100' alt={siteTitle} className="Logo"/></Link>
    <div className="HeaderGroup">
      <Link to="/about">Home</Link>
      <Link to="/about-us<">About us</Link>
      <Link to="/properties">Properties</Link>
      <Link to="/agents">Agents</Link>
      <Link to="/faq">FAQ</Link>
      <Link to="/contact">Contact</Link>
    </div>
  </div>
)}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
