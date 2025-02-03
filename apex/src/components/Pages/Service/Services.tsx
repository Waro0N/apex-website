import Footer from "../../footer/footer.tsx";
// import TopBar from "../../TopBar/TopBar.tsx";
import NavBar from "../../NavBar/NavBar.tsx";

// Image Import

// import skill from "../../../assets/images/skills-img.jpg";

function Services() {
  return (
    <>
      {/* <TopBar /> */}
      <NavBar />

      {/* Main Start  */}
      <main id="main" style={{ background: "#fff" }}>
        {/* <!-- ======= Breadcrumbs ======= --> */}
        <section id="breadcrumbs" className="breadcrumbs">
          <div className="container">
            <ol>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li> Services</li>
            </ol>
            <h2>Services</h2>
          </div>
        </section>
        {/* <!-- End Breadcrumbs --> */}

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
                    <a href="/services">Engineering & Survey</a>
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
                    <a href="/services">Architecture</a>
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
                    <a href="/services">PMC</a>
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
                    <a href="/services">Quality & Testing </a>
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
                    <a href="/services">Liaisoning and NOC</a>
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
                    <a href="/services">Construction</a>
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

        {/* <!-- ======= Our Skills Section ======= --> */}
        {/* <section id="skills" className="skills">
          <div className="container">
            <div className="section-title">
              <h2>Our Skills</h2>
              <p>
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur
                ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
                quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
                Quia fugiat sit in iste officiis commodi quidem hic quas.
              </p>
            </div>

            <div className="row">
              <div className="col-lg-6">
                <img src={skill} className="img-fluid" alt="" />
              </div>
              <div className="col-lg-6 pt-4 pt-lg-0 content">
                <h3>
                  Voluptatem dignissimos provident quasi corporis voluptates
                </h3>
                <p className="fst-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt direna past reda
                </p>

                <div className="skills-content">
                  <div className="progress">
                    <span className="skill">
                      HTML <i className="val">100%</i>
                    </span>
                    <div className="progress-bar-wrap">
                      <div
                        className="progress-bar progress-bar-striped progress-bar-animated"
                        role="progressbar"
                        aria-valuenow={100}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "100%" }}
                      ></div>
                    </div>
                  </div>

                  <div className="progress">
                    <span className="skill">
                      CSS <i className="val">90%</i>
                    </span>
                    <div className="progress-bar-wrap">
                      <div
                        className="progress-bar progress-bar-striped progress-bar-animated"
                        role="progressbar"
                        aria-valuenow={90}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "90%" }}
                      ></div>
                    </div>
                  </div>

                  <div className="progress">
                    <span className="skill">
                      JavaScript <i className="val">75%</i>
                    </span>
                    <div className="progress-bar-wrap">
                      <div
                        className="progress-bar progress-bar-striped progress-bar-animated"
                        role="progressbar"
                        aria-valuenow={75}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "75%" }}
                      ></div>
                    </div>
                  </div>

                  <div className="progress">
                    <span className="skill">
                      React <i className="val">55%</i>
                    </span>
                    <div className="progress-bar-wrap">
                      <div
                        className="progress-bar progress-bar-striped progress-bar-animated"
                        role="progressbar"
                        aria-valuenow={55}
                        aaria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "55%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* <!-- End Our Skills Section --> */}
      </main>

      {/* Main ned  */}
      <Footer />
    </>
  );
}

export default Services;
