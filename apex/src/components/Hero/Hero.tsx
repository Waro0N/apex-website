

function Hero() {
  return (
    <section id="hero">
    <div className="hero-container">
      <div id="heroCarousel" data-bs-interval="5000" className="carousel slide carousel-fade" data-bs-ride="carousel">

        <ol className="carousel-indicators" id="hero-carousel-indicators"></ol>

        <div className="carousel-inner" role="listbox">

          {/* <!-- Slide 1 --> */}
          <div className="carousel-item active" style={{backgroundImage:'url(https://static.vecteezy.com/system/resources/thumbnails/002/016/989/original/the-interior-of-a-large-office-free-video.jpg)'}}>
            <div className="carousel-container">
              <div className="carousel-content">
                <h2 className="animate__animated animate__fadeInDown" style={{color:'#fff'}}>Welcome to <span>Apex Engineers And Consultants Private Limited</span></h2>
                <p className="animate__animated animate__fadeInUp asus"> Apex Engineers And Consultants Pvt. Ltd is the emerging consultancy company having group of consultants and expert dealing in Engineering, Quality and  testing, Architecture, and Quality construction. </p>
                <a href="/about" className="btn-get-started animate__animated animate__fadeInUp">Read More</a>
              </div>
            </div>
          </div>

          {/* <!-- Slide 2 --> */}
          <div className="carousel-item" style={{backgroundImage:'url(https://i.etsystatic.com/36627193/r/il/76cc50/5211422933/il_fullxfull.5211422933_tkpt.jpg)'}}>
            <div className="carousel-container">
              <div className="carousel-content">
                <h2 className="animate__animated fanimate__adeInDown">Lorem <span>Ipsum Dolor</span></h2>
                <p className="animate__animated animate__fadeInUp">sasasa</p>
                <a href="" className="btn-get-started animate__animated animate__fadeInUp">Read More</a>
              </div>
            </div>
          </div>

          {/* <!-- Slide 3 --> */}
          <div className="carousel-item" style={{backgroundImage:'url(https://m.media-amazon.com/images/I/71qrnoTb8qL.jpg)'}}>
            <div className="carousel-container">
              <div className="carousel-content">
                <h2 className="animate__animated animate__fadeInDown">Sequi ea <span>Dime Lara</span></h2>
                <p className="animate__animated animate__fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
                <a href="" className="btn-get-started animate__animated animate__fadeInUp">Read More</a>
              </div>
            </div>
          </div>

        </div>

        <a className="carousel-control-prev" href="#heroCarousel" role="button" data-bs-slide="prev">
          <span className="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
        </a>

        <a className="carousel-control-next" href="#heroCarousel" role="button" data-bs-slide="next">
          <span className="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
        </a>

      </div>
    </div>
  </section>
  )
}

export default Hero