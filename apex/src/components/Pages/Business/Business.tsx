import Footer from "../../footer/footer";
import TopBar from "../../TopBar/TopBar.tsx";
import NavBar from "../../NavBar/NavBar.tsx";

// Import Images
import teamMember1 from "../../../assets/images/team/team-1.jpg";
import teamMember2 from "../../../assets/images/team/team-2.jpg";
import teamMember3 from "../../../assets/images/team/team-3.jpg";

function Business() {
  return (
    <>
      <TopBar />
      <NavBar />
      {/* Main Start  */}

      <main id="main" style={{ background: "#fff" }}>
        {/* <!-- ======= Breadcrumbs ======= --> */}
        <section id="breadcrumbs" className="breadcrumbs">
          <div className="container">
            <ol>
              <li>
                <a>Home</a>
              </li>
              <li>Business Insider</li>
            </ol>
            <h2>Our Business</h2>
          </div>
        </section>
        {/* <!-- End Breadcrumbs --> */}

        {/* <!-- ======= Team Section ======= --> */}
        <section id="team" className="team">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div className="member">
                  <img src={teamMember1} alt="" />
                  <h4>Walter White</h4>
                  <span>Chief Executive Officer</span>
                  <p>
                    Magni qui quod omnis unde et eos fuga et exercitationem.
                    Odio veritatis perspiciatis quaerat qui aut aut aut
                  </p>
                  <div className="social">
                    <a href="">
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div className="member">
                  <img src={teamMember2} alt="" />
                  <h4>Sarah Jhinson</h4>
                  <span>Product Manager</span>
                  <p>
                    Repellat fugiat adipisci nemo illum nesciunt voluptas
                    repellendus. In architecto rerum rerum temporibus
                  </p>
                  <div className="social">
                    <a href="">
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div className="member">
                  <img src={teamMember3} alt="" />
                  <h4>William Anderson</h4>
                  <span>CTO</span>
                  <p>
                    Voluptas necessitatibus occaecati quia. Earum totam
                    consequuntur qui porro et laborum toro des clara
                  </p>
                  <div className="social">
                    <a href="">
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Team Section --> */}
      </main>

      {/* Main End  */}
      <Footer />
    </>
  );
}

export default Business;
