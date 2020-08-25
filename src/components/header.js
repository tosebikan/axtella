import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./Header.css"

const Header = ({ siteTitle }) => {
  const toggleNav = () => {
    // setNavVisibility(!isNavVisible)
    console.log(document.querySelector(".Nav").classList.toggle("open"))
  }

  return (
    <div className="Header">
      <Link to="/">
        <img
          src={require("../images/logo.png")}
          width="150"
          alt={siteTitle}
          className="Logo"
        />
      </Link>
      <button onClick={toggleNav} className="Burger">
        &#9776;
      </button>
      <nav className="Nav">
        <Link to="/" onClick={toggleNav}>
          Home
        </Link>
        <Link to="/about/" onClick={toggleNav}>
          About
        </Link>
        <Link to="/properties/" onClick={toggleNav}>
          Properties
        </Link>
        {/*<Link to="/agents" onClick={toggleNav}>
          Agents
        </Link>*/}
        <Link to="/faq" onClick={toggleNav}>
          FAQ
        </Link>
        <Link to="/contact" onClick={toggleNav}>
          Contact
        </Link>
      </nav>
    </div>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
