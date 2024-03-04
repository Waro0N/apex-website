import'../../App.css'
import logo from "../../assets/images/Apex Logo.png"

function NavigationBar() {
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
          <li><a className="active" href="index.html">Home</a></li>
          <li><a href="about.html">About</a></li>
          <li><a href="services.html">Our Business</a></li>
          <li><a href="portfolio.html">Sustainablity</a></li>
          <li><a href="team.html">Product and Services</a></li>
          <li><a href="pricing.html">Career</a></li>
          <li><a href="blog.html">Contact Us</a></li>
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

export default NavigationBar