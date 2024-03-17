import Footer from "../../Footer/Footer"
import TopBar from "../../TopBar/TopBar"
import NavBar from "../../NavBar/NavBar"

// Image Import 

import skill from "../../../assets/images/skills-img.jpg"

function Product() {
  return (
    <>
        <TopBar/>
        <NavBar/>

        {/* Main Start  */}
        <main id="main" style={{background:'#fff'}}>

{/* <!-- ======= Breadcrumbs ======= --> */}
<section id="breadcrumbs" className="breadcrumbs">
  <div className="container">

    <ol>
      <li><a href="index.html">Home</a></li>
      <li> Product & Services</li>
    </ol>
    <h2>Product & Services</h2>

  </div>
</section>
{/* <!-- End Breadcrumbs --> */}

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

{/* <!-- ======= Our Skills Section ======= --> */}
<section id="skills" className="skills">
  <div className="container">

    <div className="section-title">
      <h2>Our Skills</h2>
      <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
    </div>

    <div className="row">
      <div className="col-lg-6">
        <img src={skill} className="img-fluid" alt=""/>
      </div>
      <div className="col-lg-6 pt-4 pt-lg-0 content">
        <h3>Voluptatem dignissimos provident quasi corporis voluptates</h3>
        <p className="fst-italic">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt direna past reda
        </p>

        <div className="skills-content">

          <div className="progress">
            <span className="skill">HTML <i className="val">100%</i></span>
            <div className="progress-bar-wrap">
              <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} style={{width: '100%'}}></div>
            </div>
          </div>

          <div className="progress">
            <span className="skill">CSS <i className="val">90%</i></span>
            <div className="progress-bar-wrap">
              <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} style={{width: '90%'}}></div>
            </div>
          </div>

          <div className="progress">
            <span className="skill">JavaScript <i className="val">75%</i></span>
            <div className="progress-bar-wrap">
              <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} style={{width: '75%'}}></div>
            </div>
          </div>

          <div className="progress">
            <span className="skill">React <i className="val">55%</i></span>
            <div className="progress-bar-wrap">
              <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow={55} aaria-valuemin={0} aria-valuemax={100} style={{width: '55%'}}></div>
              
            </div>
          </div>

        </div>

      </div>
    </div>

  </div>
</section>
{/* <!-- End Our Skills Section --> */}

</main>

        {/* Main ned  */}
        <Footer/>
    </>
  )
}

export default Product