import Footer from "../../footer/footer";
import TopBar from "../../TopBar/TopBar.tsx";
import NavBar from "../../NavBar/NavBar.tsx";

// Import Images
import AboutImg from "../../../assets/images/about.jpg";

// Clients
import client1 from "../../../assets/images/clients/client-1.png";
import client2 from "../../../assets/images/clients/client-2.png";
import client3 from "../../../assets/images/clients/client-3.png";
import client4 from "../../../assets/images/clients/client-4.png";
import client5 from "../../../assets/images/clients/client-5.png";
import client6 from "../../../assets/images/clients/client-6.png";
import client7 from "../../../assets/images/clients/client-7.png";
import client8 from "../../../assets/images/clients/client-8.png";

// Testimonials
import testimonials1 from "../../../assets/images/testimonials/testimonials-1.jpg";
import testimonials2 from "../../../assets/images/testimonials/testimonials-2.jpg";
import testimonials3 from "../../../assets/images/testimonials/testimonials-3.jpg";
import testimonials4 from "../../../assets/images/testimonials/testimonials-4.jpg";
import testimonials5 from "../../../assets/images/testimonials/testimonials-5.jpg";
import testimonials6 from "../../../assets/images/testimonials/testimonials-6.jpg";

function About() {
  return (
    <>
      <TopBar />
      <NavBar />

      {/* Main Section Start  */}

      <main id="main" style={{ background: "#ffffff" }}>
        {/* <!-- ======= Breadcrumbs ======= --> */}
        <section id="breadcrumbs" className="breadcrumbs">
          <div className="container">
            <ol>
              <li>Home</li>
              <li>About Us</li>
            </ol>
            <h2>About Us</h2>
          </div>
        </section>
        {/* <!-- End Breadcrumbs --> */}

        {/* <!-- ======= About Section ======= --> */}
        <section id="about" className="about">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <img src={AboutImg} className="img-fluid" alt="" />
              </div>
              <div className="col-lg-6 pt-4 pt-lg-0 content">
                <h3>
                  Welcome to <span style={{color: '#7ea13d'}}>Apex Engineers And Consultants Private Limited </span>
                </h3>
                <p className="fst-italic">
                  Apex Engineers And Consultants Pvt. Ltd is the emerging consultancy company having group of consultants and expert dealing in Engineering, Quality and  testing, Architecture, and Quality construction. With the successful 23 years in the industry while dealing in the sectors of consultancy Apex Engineers And Consultants Pvt. Ltd.   aligns technology solutions with your business and engineering objectives.


                </p>
                <p className="fst-italic">

                  Our team of consultants - We are the team of consultats, engineers, architect and associated experts for specific expert field, drawn from leading business will help transform your engineering operations through process improvement initiatives.


                </p>
                <p className="fst-italic">

                Using advanced tools and applications, along with proven business and integration, our strategic engineering consulting services have helped many leading manufacturers achieve business break throughs. Provides design and development solutions to reduce costs through value engineering.

                </p>
                <p className="fst-italic">

                From inception to completion, we plan, execute, and control projects backed by proactive planning and first-hand knowledge of contract terms, client objectives, responsibilities, and capabilities. Adept technical and human resources are pooled to forge effective project organization structures.
                </p>
                {/* <ul>
                  <li>
                    <i className="bi bi-check-circle"></i> Ullamco laboris nisi
                    ut aliquip ex ea commodo consequat.
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i> Duis aute irure dolor
                    in reprehenderit in voluptate velit.
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i> Ullamco laboris nisi
                    ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate trideta storacalaperda mastiro
                    dolore eu fugiat nulla pariatur.
                  </li>
                </ul> */}
                {/* <p>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                  aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum
                </p> */}
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End About Section --> */}

        {/* <!-- ======= Counts Section ======= --> */}
        <section id="counts" className="counts">
          <div className="container">
            <div className="row no-gutters">
              <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
                <div className="count-box">
                  <i className="bi bi-emoji-smile"></i>
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="232"
                    data-purecounter-duration="1"
                    className="purecounter"
                  ></span>
                  <p>
                    <strong style={{fontSize: 20}}>Vision Statement:</strong> <br/> To become the leading provider of innovative solutions, empowering businesses in integration with IT technology to thrive in a rapidly changing world.

                  </p>
                  {/* <a href="#">Find out more &raquo;</a> */}
                </div>
              </div>

              <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
                <div className="count-box">
                  <i className="bi bi-journal-richtext"></i>
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="521"
                    data-purecounter-duration="1"
                    className="purecounter"
                  ></span>
                  <p>
                    <strong style={{fontSize: 20}}>Registrations:</strong> <br/> 1. NABL( IS:17025) <br/> 2. ISO:9001,2015
                  </p>
                  
                  {/* <a href="#0">Find out more &raquo;</a> */}
                </div>
              </div>

              <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
                <div className="count-box">
                  <i className="bi bi-headset"></i>
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="1463"
                    data-purecounter-duration="1"
                    className="purecounter"
                  ></span>
                  <p>
                    <strong>Hours Of Support</strong> aut commodi quaerat.
                    Aliquam ratione
                  </p>
                  <a href="#">Find out more &raquo;</a>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
                <div className="count-box">
                  <i className="bi bi-people"></i>
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="15"
                    data-purecounter-duration="1"
                    className="purecounter"
                  ></span>
                  <p>
                    <strong>Hard Workers</strong> rerum asperiores dolor
                    molestiae doloribu
                  </p>
                  <a href="#">Find out more &raquo;</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* !-- End Counts Section -->  */}

        <div className="section-title">
              <h2> Our Resources</h2>
        </div>
        

            <section id="counts" className="counts">
          <div className="container">
            <div className="row no-gutters">
              <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
                <div className="count-box">
                  {/* <i className="bi bi-emoji-smile"></i> */}
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="232"
                    data-purecounter-duration="1"
                    className="purecounter"
                  ></span>
                  <p>
                    <strong style={{fontSize: 20}}>Human Resources:</strong> <strong><br/>1. <u>Engineering Consultants:</u></strong> Experienced professionals with expertise in specific engineering disciplines.<strong><br/>2. <u>Project Managers:</u></strong> Responsible for overseeing projects and ensuring timely delivery.
                    <strong><br/>3. <u>Design Engineers:</u></strong> Responsible for designing and developing engineering solutions.<strong><br/>4. <u>Drafting Technicians:</u></strong> Assist in creating engineering drawings and models.
                    <strong><br/>5. <u>Administrative Staff:</u></strong> Provide support with administrative tasks, such as HR, finance, and marketing
                  </p>
                  {/* <a href="#">Find out more &raquo;</a> */}
                </div>
              </div>

              <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
                <div className="count-box">
                  {/* <i className="bi bi-journal-richtext"></i> */}
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="521"
                    data-purecounter-duration="1"
                    className="purecounter"
                  ></span>
                  <p>
                  <strong style={{fontSize: 20}}>Physical Resources:</strong>  <strong><br/>1. <u>Office Space:</u></strong> Physical offices, meeting rooms, and other facilities having total carpet aread about 5000 sqft.
                    <strong><br/>2. <u>Engineering Laboratories(NABL accrediated):</u></strong> Facilities for quality testing and validating engineering solutions.
                    <strong><br/>3. <u>Equipment and Instrumentation:</u></strong> Specialized equipment and instruments for engineering(Auto levels, Total Station Machines), design, testing, and analysis.
                    <strong><br/>4. <u>Vehicle Fleet:</u></strong> Company-owned vehicles for site visits, meetings, and other business purposes.

                  </p>
                  {/* <a href="#0">Find out more &raquo;</a> */}
                </div>
              </div>

              <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
                <div className="count-box">
                  {/* <i className="bi bi-headset"></i> */}
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="1463"
                    data-purecounter-duration="1"
                    className="purecounter"
                  ></span>
                  <p>
                    <strong style={{fontSize: 20}}>Technological Resources</strong> 
                    <strong><br/>1. <u> Computer-Aided Design (CAD) Systems:</u></strong>  Software and hardware for designing and modeling engineering solutions.
                    <strong><br/>2. <u>Computational Fluid Dynamics (CFD) and Finite Element Analysis (FEA) Tools:</u></strong> Software for simulating and analyzing complex engineering problems.
                    <strong><br/>3. <u>Building Information Modeling (BIM) Software:</u></strong>  Software for creating and managing digital models of buildings and infrastructure.
                    <strong><br/>4. <u>Geographic Information Systems (GIS):</u></strong> Software for analyzing and visualizing geospatial data.
                    <strong><br/>5. <u>Cloud-Based Collaboration Tools:</u></strong>Software for collaborating and sharing data with clients and team members.
                  </p>
                  {/* <a href="#">Find out more &raquo;</a> */}
                </div>
              </div>

              <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
                <div className="count-box">
                  {/* <i className="bi bi-people"></i> */}
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="15"
                    data-purecounter-duration="1"
                    className="purecounter"
                  ></span>
                  <p>
                    <strong style={{fontSize: 20}}>Our Associations</strong> 
                    <strong><br/>1. <u> Professional Associations:</u></strong>  Memberships in industry-specific associations.
                    <strong><br/>2. <u>Partnerships:</u></strong> Strategic alliances with other companies, organizations, or industry experts.
                    <strong><br/>3. <u>Alumni Network:</u></strong>  Connections with former employees, clients, and partners.
                  </p>
                  {/* <a href="#">Find out more &raquo;</a> */}
                </div>
              </div>
            </div>
          </div>
        </section>








        {/* <!-- ======= Clients Section ======= --> */}
        <section id="clients" className="clients">
          <div className="container">
            <div className="section-title">
              <h2>Clients</h2>
              <p>
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur
                ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
                quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
                Quia fugiat sit in iste officiis commodi quidem hic quas.
              </p>
            </div>

            <div className="clients-slider swiper">
              <div className="swiper-wrapper align-items-center">
                <div className="swiper-slide">
                  <img src={client1} className="img-fluid" alt="" />
                </div>
                <div className="swiper-slide">
                  <img src={client2} className="img-fluid" alt="" />
                </div>
                <div className="swiper-slide">
                  <img src={client3} className="img-fluid" alt="" />
                </div>
                <div className="swiper-slide">
                  <img src={client4} className="img-fluid" alt="" />
                </div>
                <div className="swiper-slide">
                  <img src={client5} className="img-fluid" alt="" />
                </div>
                <div className="swiper-slide">
                  <img src={client6} className="img-fluid" alt="" />
                </div>
                <div className="swiper-slide">
                  <img src={client7} className="img-fluid" alt="" />
                </div>
                <div className="swiper-slide">
                  <img src={client8} className="img-fluid" alt="" />
                </div>
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </div>
        </section>
        {/* <!-- End Clients Section --> */}

        {/* <!-- ======= Testimonials Section ======= --> */}
        <section id="testimonials" className="testimonials">
          <div className="container">
            <div className="section-title">
              <h2>Testimonials</h2>
              <p>
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur
                ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
                quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
                Quia fugiat sit in iste officiis commodi quidem hic quas.
              </p>
            </div>

            <div className="row">
              <div className="col-lg-6">
                <div className="testimonial-item">
                  <img src={testimonials1} className="testimonial-img" alt="" />
                  <h3>Saul Goodman</h3>
                  <h4>Ceo &amp; Founder</h4>
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                    Proin iaculis purus consequat sem cure digni ssim donec
                    porttitora entum suscipit rhoncus. Accusantium quam,
                    ultricies eget id, aliquam eget nibh et. Maecen aliquam,
                    risus at semper.
                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="testimonial-item mt-4 mt-lg-0">
                  <img src={testimonials2} className="testimonial-img" alt="" />
                  <h3>Sara Wilsson</h3>
                  <h4>Designer</h4>
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                    Export tempor illum tamen malis malis eram quae irure esse
                    labore quem cillum quid cillum eram malis quorum velit fore
                    eram velit sunt aliqua noster fugiat irure amet legam anim
                    culpa.
                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="testimonial-item mt-4">
                  <img src={testimonials3} className="testimonial-img" alt="" />
                  <h3>Jena Karlis</h3>
                  <h4>Store Owner</h4>
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                    Enim nisi quem export duis labore cillum quae magna enim
                    sint quorum nulla quem veniam duis minim tempor labore quem
                    eram duis noster aute amet eram fore quis sint minim.
                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="testimonial-item mt-4">
                  <img src={testimonials4} className="testimonial-img" alt="" />
                  <h3>Matt Brandon</h3>
                  <h4>Freelancer</h4>
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                    Fugiat enim eram quae cillum dolore dolor amet nulla culpa
                    multos export minim fugiat minim velit minim dolor enim duis
                    veniam ipsum anim magna sunt elit fore quem dolore labore
                    illum veniam.
                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="testimonial-item mt-4">
                  <img src={testimonials5} className="testimonial-img" alt="" />
                  <h3>John Larson</h3>
                  <h4>Entrepreneur</h4>
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                    Quis quorum aliqua sint quem legam fore sunt eram irure
                    aliqua veniam tempor noster veniam enim culpa labore duis
                    sunt culpa nulla illum cillum fugiat legam esse veniam culpa
                    fore nisi cillum quid.
                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="testimonial-item mt-4">
                  <img src={testimonials6} className="testimonial-img" alt="" />
                  <h3>Emily Harison</h3>
                  <h4>Store Owner</h4>
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                    Eius ipsam praesentium dolor quaerat inventore rerum odio.
                    Quos laudantium adipisci eius. Accusamus qui iste cupiditate
                    sed temporibus est aspernatur. Sequi officiis ea et quia
                    quidem.
                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Testimonials Section --> */}
      </main>

      {/* Main End  */}
      <Footer />
    </>
  );
}

export default About;
