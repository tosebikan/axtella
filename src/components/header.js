import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, {useState, useEffect} from "react"
import './Header.css';


const Header = ({ siteTitle }) => {
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = mediaQuery => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  return(
  <div className="Header">
  <Link to="/"><img src={require('../images/logo.png')} width='150' alt={siteTitle} className="Logo"/></Link>
  <button onClick={toggleNav} className="Burger">
    &#9776;
  </button>
  {(!isSmallScreen || isNavVisible) && (
    <nav className="Nav">
      <Link to="/">Home</Link>
      <Link to="/about/">About</Link>
      <Link to="/properties/">Properties</Link>
      {/*<Link to="/agents">Agents</Link>*/}
      <Link to="/faq">FAQ</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  )}

  </div>
)}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
