
function TopBar() {

  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/company/apex-engineers-and-consultants/")
  }
  
  return (
    
    <section id="topbar" className="d-flex align-items-center">
    <div className="container d-flex justify-content-center justify-content-md-between">
      <div className="contact-info d-flex align-items-center">
        <i className="bi bi-envelope d-flex align-items-center"><a href="mailto:contact@example.com">Apex_agra@yahoo.com</a></i>
        <i className="bi bi-phone d-flex align-items-center ms-4"><input type="tel" name="Number" value='+91 7983213124' style={{
          background:'rgba(0, 0, 0, 0)', 
          outline:'none',
          border:'none',
          color:'#fff'

        }} /></i>
      </div>
      <div className="social-links d-none d-md-flex align-items-center">
        <a onClick={handleLinkedInClick} className="linkedin"><i className="bi bi-linkedin"></i></a>
      </div>
    </div>
  </section>
    
  )
}

export default TopBar