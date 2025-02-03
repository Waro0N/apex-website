import { Link } from "react-router-dom";

const Footer = () => {
  const handleLinkedInClick = () => {
    window.open(
      "https://www.linkedin.com/company/apex-engineers-and-consultants/"
    );
  };

  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  {/* <a href="/about">About us</a> */}
                  <Link to="/about">About us</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  {/* <a href="/services">Services</a> */}
                  <Link to="/services">Services</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  {/* <a href="/career">Career</a> */}
                  <Link to="/career">Career</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  {/* <a href="/contact">Contact Us</a> */}
                  <Link to="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  {/* <a href="/services">Engineering & Survey</a> */}
                  <Link to="/services">Engineering & Survey</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <Link to="/services">Architecture</Link>
                  {/* <a href="/services">Architecture</a> */}
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <Link to="/services">PMC</Link>
                  {/* <a href="/services">PMC</a> */}
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <Link to="/services">Quality & Testing </Link>
                  {/* <a href="/services">Quality & Testing </a> */}
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <Link to="/services">Liasioning and NOC</Link>
                  {/* <a href="/services">Liasioning and NOC</a> */}
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <Link to="/services">Construction</Link>
                  {/* <a href="/services">Construction</a> */}
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-contact">
              <h4>Contact Us</h4>
              <p>
                SNP43/ 80A & 80A/1, Shashi nagar, Near Anna ikon
                Building,Sikandra, Agra
                <br />
                India <br />
                <br />
                <strong>Phone:</strong> +91 7983213124
                <br />
                <strong>Email:</strong> Apex_agra@yahoo.com
                <br />
              </p>
            </div>

            <div className="col-lg-3 col-md-6 footer-info">
              <h3>About Apexma</h3>
              <p>
                Apex Engineers And Consultants Pvt. Ltd is the emerging
                consultancy company having group of consultants and expert
                dealing in Engineering, Quality and testing, Architecture, and
                Quality construction.
              </p>
              <div className="social-links mt-3">
                {/* <a href="#" className="twitter">
                  <i className="bx bxl-twitter"></i>
                </a>
                <a href="#" className="facebook">
                  <i className="bx bxl-facebook"></i>
                </a>
                <a href="#" className="instagram">
                  <i className="bx bxl-instagram"></i>
                </a>
                <a href="#" className="google-plus">
                  <i className="bx bxl-skype"></i>
                </a> */}
                <a onClick={handleLinkedInClick} className="linkedin">
                  <i className="bx bxl-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="copyright">
          &copy; Copyright 2024{" "}
          <strong>
            <span>Apexma</span>
          </strong>
          . All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
