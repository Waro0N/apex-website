import Carousel from "react-bootstrap/Carousel";
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
// import TopBar from "../TopBar/TopBar.tsx";
import NavBar from "../NavBar/NavBar.tsx";
import Hero from "../Hero/Hero.tsx";
import Footer from "../footer/footer.tsx";
import "../Homepage/Homepage.css";

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

function Homepage() {
  const chunkSize = 3;
  const slides = [];

  for (let i = 0; i < clients.length; i += chunkSize) {
    slides.push(clients.slice(i, i + chunkSize));
  }

  return (
    <>
      {/* <TopBar /> */}
      <NavBar />
      <Hero />

      <main id="main" style={{ backgroundColor: "#fff" }}>
        {/* <!-- ======= Featured Section ======= --> */}
        <section id="featured" className="featured">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="holographic-card">
                  <i style={{ fontSize: 30 }} className="bi bi-vector-pen"></i>
                  <h3>
                    <a href="">Design and Planning</a>
                  </h3>
                  <p>
                    A strong consultancy offers innovative and efficient
                    designs, ensuring structures are safe, sustainable, and
                    compliant with regulations.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 mt-4 mt-lg-0">
                <div className="holographic-card">
                  <i
                    style={{ fontSize: 30 }}
                    className="bi bi-clock-history"
                  ></i>
                  <h3>
                    <a href="">Timely Project Execution</a>
                  </h3>
                  <p>
                    They excel in meeting deadlines through effective project
                    management and resource allocation, minimizing delays and
                    cost overruns.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 mt-4 mt-lg-0">
                <div className="holographic-card">
                  <i
                    style={{ fontSize: 30 }}
                    className="bi bi-person-heart"
                  ></i>
                  <h3>
                    <a href="">Client-Centric Approach</a>
                  </h3>
                  <p>
                    By maintaining clear communication and understanding client
                    needs, they deliver customized solutions that exceed
                    expectations.
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
                <div className="holographic-card">
                  <div className="icon">
                    <i style={{ fontSize: 30 }} className="bi bi-rulers"></i>
                  </div>
                  <h4>
                    <a href="/Product">Engineering & Survey</a>
                  </h4>
                  <p>
                    Provides the precise measurement and mapping of land to aid
                    in the planning, design, and construction of infrastructure
                    projects.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                <div className="holographic-card">
                  <div className="icon">
                    <i style={{ fontSize: 30 }} className="bi bi-bricks"></i>
                  </div>
                  <h4>
                    <a href="/Product">Architecture</a>
                  </h4>
                  <p>
                    Focuses on integrating aesthetic design with structural
                    functionality to create efficient and visually appealing
                    infrastructure and buildings.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
                <div className="holographic-card">
                  <div className="icon">
                    <i
                      style={{ fontSize: 30 }}
                      className="bi bi-calendar-check"
                    ></i>
                  </div>
                  <h4>
                    <a href="/Product">PMC</a>
                  </h4>
                  <p>
                    Ensures the efficient planning, execution, and delivery of
                    construction projects by overseeing quality, timelines, and
                    resources.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                <div className="holographic-card">
                  <div className="icon">
                    <i
                      style={{ fontSize: 30 }}
                      className="bi bi-shield-check"
                    ></i>
                  </div>
                  <h4>
                    <a href="/Product">Quality & Testing </a>
                  </h4>
                  <p>
                    Ensures that construction materials and processes meet
                    specified standards and durability requirements for safe and
                    reliable infrastructure.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                <div className="holographic-card">
                  <div className="icon">
                    <i
                      style={{ fontSize: 30 }}
                      className="bi-file-earmark-check"
                    ></i>
                  </div>
                  <h4>
                    <a href="/Product">Liaisoning and NOC</a>
                  </h4>
                  <p>
                    Liaisoning and NOC (No Objection Certificate) involve
                    coordinating with government authorities to obtain necessary
                    approvals and clearances for construction projects.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                <div className="holographic-card">
                  <div className="icon">
                    <i style={{ fontSize: 30 }} className="bi bi-building"></i>
                  </div>
                  <h4>
                    <a href="/Product">Construction</a>
                  </h4>
                  <p>
                    Involves the execution of designs to build infrastructure
                    such as buildings, bridges, roads, and dams, ensuring
                    structural integrity and compliance with standards.
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
      </main>

      <Footer />
    </>
  );
}

export default Homepage;
