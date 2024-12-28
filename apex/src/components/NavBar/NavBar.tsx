import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import logo from "../../assets/images/Apex Logo.png";

export default function NavBar() {
  const [isSideNavVisible, setIsSideNavVisible] = useState(false);
  console.log(isSideNavVisible)

  const toggleSideNav = () => {
    setIsSideNavVisible(!isSideNavVisible);
  };

  return (
    <div>
      {/* Header Start */}
      <header id="header" className="d-flex align-items-center">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="logo">
            <a href="/">
              <img src={logo} alt="Apex Logo" className="img-fluid" />
            </a>
          </div>

          {/* Mobile Toggle Icon */}
          <i
            className={`bi ${isSideNavVisible ? 'bi-x' : 'bi-list'} mobile-nav-toggle`}
            onClick={toggleSideNav} 
          ></i>

          {/* Navbar */}
          <nav id="navbar" className={`navbar ${isSideNavVisible ? 'navbar-mobile' : ''}`}>
            <ul>
              <li><Link to="/" onClick={toggleSideNav}>Home</Link></li>
              <li><Link to="/about" onClick={toggleSideNav}>About</Link></li>
              <li><Link to="/business-insider" onClick={toggleSideNav}>Our Business</Link></li>
              <li><Link to="/sustainability" onClick={toggleSideNav}>Sustainability</Link></li>
              <li><Link to="/product" onClick={toggleSideNav}>Product and Services</Link></li>
              <li><Link to="/career" onClick={toggleSideNav}>Career</Link></li>
              <li><Link to="/contact" onClick={toggleSideNav}>Contact Us</Link></li>
            </ul>
          </nav>
        </div>
      </header>
      {/* END Header */}
    </div>
  );
}
