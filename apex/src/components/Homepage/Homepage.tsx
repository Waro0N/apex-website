import client1 from "../../assets/images/clients/client-1.png";
import client2 from "../../assets/images/clients/client-2.png";
import client3 from "../../assets/images/clients/client-3.png";
import client4 from "../../assets/images/clients/client-4.png";
import client5 from "../../assets/images/clients/client-5.png";
import client6 from "../../assets/images/clients/client-6.png";
import client7 from "../../assets/images/clients/client-7.png";
import client8 from "../../assets/images/clients/client-8.png";
import client9 from "../../assets/images/clients/client-9.png";
import About from "../../assets/images/about.jpg";
import Slider from "../Carousel/Slider.tsx";
import TopBar from "../TopBar/TopBar.tsx";
import NavBar from "../NavBar/NavBar.tsx";
import Hero from "../Hero/Hero.tsx";
import Footer from "../footer/footer.tsx";
import "../Homepage/Homepage.css";


function Homepage() {
  return (
    <>
      <TopBar />
      <NavBar />
      <Hero />

      <main id="main" style={{ backgroundColor: "#fff" }}>
        {/* <!-- ======= Featured Section ======= --> */}
        <section id="featured" className="featured">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="icon-box">
                  {/* <i className="bi bi-card-checklist"></i> */}
                  <h3>
                    <a href="">Expertise in Design and Planning</a>
                  </h3>
                  <p>
                    A strong consultancy offers innovative and efficient designs, ensuring structures are safe, sustainable, and compliant with regulations.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 mt-4 mt-lg-0">
                <div className="icon-box">
                  {/* <i className="bi bi-bar-chart"></i> */}
                  <h3>
                    <a href="">Timely Project Execution</a>
                  </h3>
                  <p>
                    They excel in meeting deadlines through effective project management and resource allocation, minimizing delays and cost overruns.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 mt-4 mt-lg-0">
                <div className="icon-box">
                  {/* <i className="bi bi-binoculars"></i> */}
                  <h3>
                    <a href="">Client-Centric Approach</a>
                  </h3>
                  <p>
                    By maintaining clear communication and understanding client needs, they deliver customized solutions that exceed expectations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Featured Section --> */}

        {/* Slider Carusel Start */}
        <section className="slider">
          <Slider />
        </section>

        {/* Slider Carusel End */}

        {/* <!-- ======= About Section ======= --> */}
        <section id="about" className="about">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <img src={About} className="img-fluid" alt="" />
              </div>
              <div className="col-lg-6 pt-4 pt-lg-0 content">
                <h3>
                  Welcome to <span style={{ color: '#7ea13d' }}>Apex Engineers And Consultants Private Limited </span>
                </h3>
                <p className="fst-italic">
                  Apex Engineers And Consultants Pvt. Ltd is the emerging consultancy company having group of consultants and expert dealing in Engineering, Quality and  testing, Architecture, and Quality construction. With the successful 23 years in the industry while dealing in the sectors of consultancy Apex Engineers And Consultants Pvt. Ltd.   aligns technology solutions with your business and engineering objectives.


                </p>
                <p className="fst-italic">

                  Our team of consultants - We are the team of consultats, engineers, architect and associated experts for specific expert field, drawn from leading business will help transform your engineering operations through process improvement initiatives.


                </p>
                <p className="fst-italic">

                  Using advanced tools and applications, along with proven business and integration, our strategic engineering consulting services have helped many leading manufacturers achieve business breakthroughs. Provides design and development solutions to reduce costs through value engineering.

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
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End About Section --> */}

        {/* <!-- ======= Services Section ======= --> */}
        <section id="services" className="services">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div className="icon-box">
                  <div className="icon">
                    <i className="bx bxl-dribbble"></i>
                  </div>
                  <h4>
                    <a href="">Engineering & Survey</a>
                  </h4>
                  <p>
                    Provides the precise measurement and mapping of land to aid in the planning, design, and construction of infrastructure projects.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                <div className="icon-box">
                  <div className="icon">
                    <i className="bx bx-file"></i>
                  </div>
                  <h4>
                    <a href="">Architecture</a>
                  </h4>
                  <p>
                    Focuses on integrating aesthetic design with structural functionality to create efficient and visually appealing infrastructure and buildings.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
                <div className="icon-box">
                  <div className="icon">
                    <i className="bx bx-tachometer"></i>
                  </div>
                  <h4>
                    <a href="">PMC</a>
                  </h4>
                  <p>
                    Ensures the efficient planning, execution, and delivery of construction projects by overseeing quality, timelines, and resources.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                <div className="icon-box">
                  <div className="icon">
                    <i className="bx bx-world"></i>
                  </div>
                  <h4>
                    <a href="">Quality & Testing </a>
                  </h4>
                  <p>
                    Ensures that construction materials and processes meet specified standards and durability requirements for safe and reliable infrastructure.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                <div className="icon-box">
                  <div className="icon">
                    <i className="bx bx-slideshow"></i>
                  </div>
                  <h4>
                    <a href="">Liaisoning and NOC</a>
                  </h4>
                  <p>
                    Liaisoning and NOC (No Objection Certificate) involve coordinating with government authorities to obtain necessary approvals and clearances for construction projects.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                <div className="icon-box">
                  <div className="icon">
                    <i className="bx bx-arch"></i>
                  </div>
                  <h4>
                    <a href="">Construction</a>
                  </h4>
                  <p>
                    Involves the execution of designs to build infrastructure such as buildings, bridges, roads, and dams, ensuring structural integrity and compliance with standards.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </section>
        {/* <!-- End Services Section --> */}

        {/* <!-- ======= Clients Section ======= --> */}
        <section id="clients" className="clients">
          <div className="container">
            <div className="section-title">
              <h2>Clients</h2>
            </div>
            <div className="clients-grid">
              <img src={client1} height="150px" alt="Bharat Petroleum" />
              <img src={client2} height="150px" alt="Hindustan Petroleum" />
              <img src={client3} height="150px" alt="Indian Oil" />
              <img src={client4} height="150px" alt="IGL" />
              <img src={client5} height="150px" alt="Another Client" />
              <img src={client6} className="small-logo" alt="Smaller Client" />
              <img src={client7} height="150px" alt="Another Client" />
              <img src={client8} className="small-logo" alt="Smaller Client" />
              <img src={client9} height="150px" alt="Gail Gas" />
            </div>
          </div>
        </section>



      </main>

      <Footer />
    </>
  );
}

export default Homepage;
