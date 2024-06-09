const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right"></i> <a href="#">Home</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="#">About us</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="#">Services</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="#">Terms of service</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="#">Privacy policy</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="#">Web Design</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="#">Web Development</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="#">Product Management</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="#">Marketing</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="#">Graphic Design</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-contact">
              <h4>Contact Us</h4>
              <p>
                300/23 Pashchimpuri <br />
                Sikandra, UP 282007
                <br />
                India <br />
                <br />
                <strong>Phone:</strong> +91 8755 6163 37
                <br />
                <strong>Email:</strong> saransh@gmail.com
                <br />
              </p>
            </div>

            <div className="col-lg-3 col-md-6 footer-info">
              <h3>About Apexma</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptate dolore vel, odit, ipsam at, consequatur eos quos omnis
                fugit deserunt cupiditate quidem.
              </p>
              <div className="social-links mt-3">
                <a href="#" className="twitter">
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
                </a>
                <a href="#" className="linkedin">
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
