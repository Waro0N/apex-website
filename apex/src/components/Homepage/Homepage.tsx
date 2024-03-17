

import client2 from "../../assets/images/clients/client-2.png"
import client3 from "../../assets/images/clients/client-3.png"
import client4 from "../../assets/images/clients/client-4.png"
import client5 from "../../assets/images/clients/client-5.png"
import client6 from "../../assets/images/clients/client-6.png"
import client7 from "../../assets/images/clients/client-7.png"
import client8 from "../../assets/images/clients/client-8.png"
import About from "../../assets/images/about.jpg"
import Slider from "../Carousel/Slider"
import TopBar from "../TopBar/TopBar"
import NavBar from "../NavBar/NavBar"
import Hero from "../Hero/Hero"
import Footer from "../Footer/Footer"

function Homepage() {
  return (
    <>
    <TopBar/>
    <NavBar/>
    <Hero/>
   
    <main id="main" style={{backgroundColor:'#fff'}}>

    {/* <!-- ======= Featured Section ======= --> */}
    <section id="featured" className="featured">
      <div className="container">

        <div className="row">
          <div className="col-lg-4">
            <div className="icon-box">
              <i className="bi bi-card-checklist"></i>
              <h3><a href="">Financial Capital</a></h3>
              <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
            </div>
          </div>
          <div className="col-lg-4 mt-4 mt-lg-0">
            <div className="icon-box">
              <i className="bi bi-bar-chart"></i>
              <h3><a href="">Manufactured Capital</a></h3>
              <p>Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
            </div>
          </div>
          <div className="col-lg-4 mt-4 mt-lg-0">
            <div className="icon-box">
              <i className="bi bi-binoculars"></i>
              <h3><a href="">intellectual Capital</a></h3>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
            </div>
          </div>
        </div>

      </div>
    </section>
    {/* <!-- End Featured Section --> */}

    {/* Slider Carusel Start */}
    <section  className="slider">
    <Slider/>
    </section>

      
    
    {/* Slider Carusel End */}

    {/* <!-- ======= About Section ======= --> */}
    <section id="about" className="about">
      <div className="container">
           
        <div className="row">
          <div className="col-lg-6">
            <img src={About} className="img-fluid" alt=""/>
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0 content">
            <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
            <p className="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
            <ul>
              <li><i className="bi bi-check-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
              <li><i className="bi bi-check-circle"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
              <li><i className="bi bi-check-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
            </ul>
            <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum
            </p>
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
              <div className="icon"><i className="bx bxl-dribbble"></i></div>
              <h4><a href="">Lorem Ipsum</a></h4>
              <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
            <div className="icon-box">
              <div className="icon"><i className="bx bx-file"></i></div>
              <h4><a href="">Sed ut perspiciatis</a></h4>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
            <div className="icon-box">
              <div className="icon"><i className="bx bx-tachometer"></i></div>
              <h4><a href="">Magni Dolores</a></h4>
              <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
            <div className="icon-box">
              <div className="icon"><i className="bx bx-world"></i></div>
              <h4><a href="">Nemo Enim</a></h4>
              <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
            <div className="icon-box">
              <div className="icon"><i className="bx bx-slideshow"></i></div>
              <h4><a href="">Dele cardo</a></h4>
              <p>Quis consequatur saepe eligendi voluptatem consequatur dolor consequuntur</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
            <div className="icon-box">
              <div className="icon"><i className="bx bx-arch"></i></div>
              <h4><a href="">Divera don</a></h4>
              <p>Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit aspernatur</p>
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
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, saepe, molestiae recusandae quod adipisci eaque, ullam eveniet natus impedit totam aliquam laboriosam at repellendus aperiam nobis cumque iure dolore vitae.</p>
        </div>
        

        <div className="clients-slider swiper">
          <div className="swiper-wrapper align-items-center">
            <div className="swiper-slide"><img src={client7} className="img-fluid" alt="Hello"/></div>
            <div className="swiper-slide"><img src={client2} className="img-fluid" alt="Bye"/></div>
            <div className="swiper-slide"><img src={client3} className="img-fluid" alt=""/></div>
            <div className="swiper-slide"><img src={client4} className="img-fluid" alt=""/></div>
            <div className="swiper-slide"><img src={client5} className="img-fluid" alt=""/></div>
            <div className="swiper-slide"><img src={client6} className="img-fluid" alt=""/></div>
            <div className="swiper-slide"><img src={client7} className="img-fluid" alt=""/></div>
            <div className="swiper-slide"><img src={client8} className="img-fluid" alt=""/></div>
          </div>
          <div className="swiper-pagination"></div>
        </div>

      </div>
    </section>

  </main>

  <Footer/>
  </>
  )
}

export default Homepage