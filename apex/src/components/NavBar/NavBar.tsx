
import { Link } from 'react-router-dom'
import'../../App.css'
import logo from "../../assets/images/Apex Logo.png"

export default function navBar() {
  return (
    <div>
       {/* Header Start  */}
  <header id="header" className="d-flex align-items-center">
    <div className="container d-flex justify-content-between align-items-center">

      <div className="logo">
        {/* <h1><a href="index.html">Apex</a></h1> */}
        
         <a href="index.html"><img src={logo} alt="" className="img-fluid"/></a>
      </div>

      <nav id="navbar" className="navbar">
        <ul>
          <Link to="/"><li>Home</li></Link>
          <Link to="/about"><li>About</li></Link>
          <Link to="/business-insider"><li>Our Business</li></Link>
          <Link to="/sustainablity"><li>Sustainablity</li></Link>
          <Link to="/product"><li>Product and Services</li></Link>
          <Link to="/career"><li>Career</li></Link>
          <Link to="/contact"><li>Contact Us</li></Link>
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>
      {/* Navbar End  */}

    </div>
  </header>
  {/* END Header  */}
    </div>
  )
}
