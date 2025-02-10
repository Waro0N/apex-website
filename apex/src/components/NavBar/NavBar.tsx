import { useState } from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import logo from "../../assets/images/Apex Logo.png";

export default function NavBar() {
  const [isSideNavVisible, setIsSideNavVisible] = useState(false);
  console.log(isSideNavVisible);

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
            className={`bi ${
              isSideNavVisible ? "bi-x" : "bi-list"
            } mobile-nav-toggle`}
            onClick={toggleSideNav}
          ></i>

          {/* Navbar */}
          <nav
            id="navbar"
            className={`navbar ${isSideNavVisible ? "navbar-mobile" : ""}`}
          >
            <ul>
              <li>
                <Link to="/">
                  <b>Home</b>
                </Link>
              </li>
              <li>
                <Link to="/about">
                  <b>About</b>
                </Link>
              </li>
              <li>
                <Link to="/business-insider">
                  <b>Certifications</b>
                </Link>
              </li>
              {/* <li><Link to="/sustainability" onClick={toggleSideNav}>Sustainability</Link></li> */}
              <li>
                <Link to="/services">
                  <b>Services</b>
                </Link>
              </li>
              <li>
                <Link to="/career">
                  <b>Career</b>
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  <b>Contact Us</b>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      {/* END Header */}
    </div>
  );
}
