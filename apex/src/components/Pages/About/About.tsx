import Footer from "../../footer/footer";
// import TopBar from "../../TopBar/TopBar.tsx";
import NavBar from "../../NavBar/NavBar.tsx";

// Import Images
import AboutImg from "../../../assets/images/about.jpg";
import Carousel from "react-bootstrap/Carousel";

// Clients
import client1 from "../../../assets/images/clients/client-1.png";
import client2 from "../../../assets/images/clients/client-2.png";
import client3 from "../../../assets/images/clients/client-3.png";
import client4 from "../../../assets/images/clients/client-4.png";
import client5 from "../../../assets/images/clients/client-5.png";
import client6 from "../../../assets/images/clients/client-6.png";
import client7 from "../../../assets/images/clients/client-7.png";
import client8 from "../../../assets/images/clients/client-8.png";
import client9 from "../../../assets/images/clients/client-9.png";

// Testimonials
// import testimonials1 from "../../../assets/images/testimonials/testimonials-1.jpg";
// import testimonials2 from "../../../assets/images/testimonials/testimonials-2.jpg";
// import testimonials3 from "../../../assets/images/testimonials/testimonials-3.jpg";
// import testimonials4 from "../../../assets/images/testimonials/testimonials-4.jpg";
// import testimonials5 from "../../../assets/images/testimonials/testimonials-5.jpg";
// import testimonials6 from "../../../assets/images/testimonials/testimonials-6.jpg";

const clients = [
  { src: client1, alt: "Bharat Petroleum" },
  { src: client2, alt: "Hindustan Petroleum" },
  { src: client3, alt: "Indian Oil" },
  { src: client4, alt: "IGL" },
  { src: client5, alt: "Another Client" },
  { src: client6, alt: "Smaller Client" },
  { src: client7, alt: "Another Client" },
  { src: client8, alt: "Smaller Client" },
  { src: client9, alt: "Gail Gas" },
];

function About() {
  const chunkSize = 3;
  const slides = [];

  for (let i = 0; i < clients.length; i += chunkSize) {
    slides.push(clients.slice(i, i + chunkSize));
  }

  return (
    <>
      {/* <TopBar /> */}
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
                  Welcome to{" "}
                  <span style={{ color: "#7ea13d" }}>
                    Apex Engineers And Consultants Private Limited{" "}
                  </span>
                </h3>
                <p className="fst-italic">
                  <b>
                    Apex Engineers and Consultants Pvt. Ltd. : Your Trusted
                    Partner in Engineering and Quality Excellence.{" "}
                  </b>
                </p>
                <p className="fst-italic">
                  <b>
                    With over 23 years of industry expertise, Apex Engineers and
                    Consultants Pvt. Ltd. has emerged as a leading consultancy
                    company specializing in Civil Engineering, Architecture,
                    Quality Testing, and Quality Construction. Our mission is to
                    deliver tailored engineering and consultancy solutions that
                    align with your business goals and engineering needs.
                  </b>
                </p>
                <p className="fst-italic">
                  <b>
                    Using advanced tools and applications, along with proven
                    business and integration, our strategic engineering
                    consulting services have helped many leading manufacturers
                    achieve business breakthroughs. Provides design and
                    development solutions to reduce costs through value
                    engineering.
                  </b>
                </p>
                <p className="fst-italic">
                  <b>
                    From inception to completion, we plan, execute, and control
                    projects backed by proactive planning and first-hand
                    knowledge of contract terms, client objectives,
                    responsibilities, and capabilities. Adept technical and
                    human resources are pooled to forge effective project
                    organization structures.
                  </b>
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
                <div className="holographic-card">
                  <i style={{ fontSize: 30 }} className="bi bi-emoji-smile"></i>
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="232"
                    data-purecounter-duration="1"
                    className="purecounter"
                  ></span>
                  <p>
                    <strong style={{ fontSize: 20 }}>Vision Statement:</strong>{" "}
                    <br /> <br /> To become the leading provider of innovative
                    solutions, empowering businesses in integration with IT
                    technology to thrive in a rapidly changing world.
                  </p>
                  {/* <a href="#">Find out more &raquo;</a> */}
                </div>
              </div>

              <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
                <div className="holographic-card">
                  <i
                    style={{ fontSize: 30 }}
                    className="bi bi-journal-richtext"
                  ></i>
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="521"
                    data-purecounter-duration="1"
                    className="purecounter"
                  ></span>
                  <p>
                    <strong style={{ fontSize: 20 }}>Registrations : </strong>{" "}
                    <br /> <br />{" "}
                    <b>Apex Engineers and Consultants Pvt. Ltd.</b> is proudly
                    accredited with <b>NABL (IS:17025)</b> certification,
                    ensuring the highest standards in quality testing and
                    calibration. <br /> Additionally, we are certified with{" "}
                    <b>ISO 9001:2015</b>, demonstrating our commitment to
                    maintaining consistent quality management and delivering
                    exceptional services in every project we undertake.
                  </p>

                  {/* <a href="#0">Find out more &raquo;</a> */}
                </div>
              </div>

              <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
                <div className="holographic-card">
                  <i style={{ fontSize: 30 }} className="bi bi-headset"></i>
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="1463"
                    data-purecounter-duration="1"
                    className="purecounter"
                  ></span>
                  <p>
                    <strong style={{ fontSize: 20 }}>Hours Of Support :</strong>{" "}
                    <br />
                    <br />
                    We understand the importance of timely assistance in
                    engineering projects. Our dedicated team is available 24/7
                    to provide technical guidance, project updates, and
                    troubleshooting support. Whether it's a query about
                    structural design, material selection, or project execution,
                    we are always here to help.
                  </p>
                  {/* <a href="#">Find out more &raquo;</a> */}
                </div>
              </div>

              <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
                <div className="holographic-card">
                  <i style={{ fontSize: 30 }} className="bi bi-people"></i>
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="15"
                    data-purecounter-duration="1"
                    className="purecounter"
                  ></span>
                  <p>
                    <strong style={{ fontSize: 20 }}>Hard Workers :</strong>
                    <br />
                    <br />
                    Our team of skilled engineers, designers, and field experts
                    work tirelessly to deliver high-quality solutions with
                    precision and efficiency. From planning to execution, we
                    ensure that every project meets the highest industry
                    standards, staying true to deadlines and client
                    expectations. Your vision is our mission!
                  </p>
                  {/* <a href="#">Find out more &raquo;</a> */}
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
                <div className="holographic-card">
                  <i style={{ fontSize: 30 }} className="bi bi-people"></i>

                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="232"
                    data-purecounter-duration="1"
                    className="purecounter"
                  ></span>
                  <p>
                    <strong style={{ fontSize: 20 }}>Human Resources:</strong>{" "}
                    <strong>
                      <br /> <br />
                      1. <u>Engineering Consultants:</u>
                    </strong>{" "}
                    Experienced professionals with expertise in specific
                    engineering disciplines.
                    <strong>
                      <br />
                      2. <u>Project Managers:</u>
                    </strong>{" "}
                    Responsible for overseeing projects and ensuring timely
                    delivery.
                    <strong>
                      <br />
                      3. <u>Design Engineers:</u>
                    </strong>{" "}
                    Responsible for designing and developing engineering
                    solutions.
                    <strong>
                      <br />
                      4. <u>Drafting Technicians:</u>
                    </strong>{" "}
                    Assist in creating engineering drawings and models.
                    <strong>
                      <br />
                      5. <u>Administrative Staff:</u>
                    </strong>{" "}
                    Provide support with administrative tasks, such as HR,
                    finance, and marketing
                  </p>
                  {/* <a href="#">Find out more &raquo;</a> */}
                </div>
              </div>

              <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
                <div className="holographic-card">
                  <i style={{ fontSize: 30 }} className="bi bi-tools"></i>
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="521"
                    data-purecounter-duration="1"
                    className="purecounter"
                  ></span>
                  <p>
                    <strong style={{ fontSize: 20 }}>
                      Physical Resources:
                    </strong>{" "}
                    <strong>
                      <br />
                      <br />
                      1. <u>Office Space:</u>
                    </strong>{" "}
                    Physical offices, meeting rooms, and other facilities having
                    total carpet aread about 5000 sqft.
                    <strong>
                      <br />
                      2. <u>Engineering Laboratories(NABL accrediated):</u>
                    </strong>{" "}
                    Facilities for quality testing and validating engineering
                    solutions.
                    <strong>
                      <br />
                      3. <u>Equipment and Instrumentation:</u>
                    </strong>{" "}
                    Specialized equipment and instruments for engineering(Auto
                    levels, Total Station Machines), design, testing, and
                    analysis.
                    <strong>
                      <br />
                      4. <u>Vehicle Fleet:</u>
                    </strong>{" "}
                    Company-owned vehicles for site visits, meetings, and other
                    business purposes.
                  </p>
                  {/* <a href="#0">Find out more &raquo;</a> */}
                </div>
              </div>

              <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
                <div className="holographic-card">
                  <i style={{ fontSize: 30 }} className="bi-laptop"></i>
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="1463"
                    data-purecounter-duration="1"
                    className="purecounter"
                  ></span>
                  <p>
                    <strong style={{ fontSize: 20 }}>
                      Technical Resources :
                    </strong>
                    <strong>
                      <br />
                      <br />
                      1. <u> Computer-Aided Design (CAD) Systems:</u>
                    </strong>{" "}
                    Software and hardware for designing and modeling engineering
                    solutions.
                    <strong>
                      <br />
                      2.{" "}
                      <u>
                        Computational Fluid Dynamics (CFD) and Finite Element
                        Analysis (FEA) Tools:
                      </u>
                    </strong>{" "}
                    Software for simulating and analyzing complex engineering
                    problems.
                    <strong>
                      <br />
                      3. <u>Building Information Modeling (BIM) Software:</u>
                    </strong>{" "}
                    Software for creating and managing digital models of
                    buildings and infrastructure.
                    <strong>
                      <br />
                      4. <u>Geographic Information Systems (GIS):</u>
                    </strong>{" "}
                    Software for analyzing and visualizing geospatial data.
                    <strong>
                      <br />
                      5. <u>Cloud-Based Collaboration Tools:</u>
                    </strong>
                    Software for collaborating and sharing data with clients and
                    team members.
                  </p>
                  {/* <a href="#">Find out more &raquo;</a> */}
                </div>
              </div>

              <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
                <div className="holographic-card">
                  <i
                    style={{ fontSize: 30 }}
                    className="bi bi-person-badge"
                  ></i>
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="15"
                    data-purecounter-duration="1"
                    className="purecounter"
                  ></span>
                  <p>
                    <strong style={{ fontSize: 20 }}>Our Associations :</strong>
                    <strong>
                      <br />
                      <br />
                      1. <u> Professional Associations:</u>
                    </strong>{" "}
                    Memberships in industry-specific associations.
                    <strong>
                      <br />
                      2. <u>Partnerships:</u>
                    </strong>{" "}
                    Strategic alliances with other companies, organizations, or
                    industry experts.
                    <strong>
                      <br />
                      3. <u>Alumni Network:</u>
                    </strong>{" "}
                    Connections with former employees, clients, and partners.
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
            </div>
            <Carousel
              indicators={false}
              controls={true}
              prevIcon={
                <span style={{ color: "black", fontSize: "24px" }}>
                  &#10094;
                </span>
              }
              nextIcon={
                <span style={{ color: "black", fontSize: "24px" }}>
                  &#10095;
                </span>
              }
              style={{
                padding: "20px",
                borderRadius: "10px",
                width: "100%",
              }}
            >
              {slides.map((group, index) => (
                <Carousel.Item key={index}>
                  <div className="clients-grid">
                    {group.map((client, idx) => (
                      <img key={idx} src={client.src} alt={client.alt} />
                    ))}
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </section>
        {/* <!-- End Clients Section --> */}

        {/* <!-- ======= Testimonials Section ======= --> */}
        {/* <section id="testimonials" className="testimonials">
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
        </section> */}
        {/* <!-- End Testimonials Section --> */}
      </main>

      {/* Main End  */}
      <Footer />
    </>
  );
}

export default About;
