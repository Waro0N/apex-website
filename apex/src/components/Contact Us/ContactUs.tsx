import React from "react";
import NavBar from "../../components/NavBar/NavBar.tsx";
import Footer from "../../components/footer/footer.tsx";
import { send } from "@emailjs/browser";

const ContactUs = () => {
  const [name, setName] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [subject, setSubject] = React.useState<string>("");
  const [userMessage, setUserMessage] = React.useState<string>("");

  const handleContactUs = () => {
    const templateParams = {
      to_name: "APEX",
      from_name: name,
      reply_to: email,
      subject: subject,
      message: userMessage,
    };

    send("apex_mail", "template_qbjowla", templateParams, "MVi1YIwmU0ITlFbz9")
      .then((response) => {
        setEmail("");
        setUserMessage("");
        setSubject("");
        setName("");
        console.log("Email sent successfully!", response);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  return (
    <>
      <NavBar />

      <main id="main" style={{ background: "#ffffff" }}>
        {/* <!-- ======= Breadcrumbs ======= --> */}
        <section id="breadcrumbs" className="breadcrumbs">
          <div className="container">
            <ol>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>Contact</li>
            </ol>
            <h2>Contact</h2>
          </div>
        </section>
        {/* <!-- End Breadcrumbs --> */}

        {/* <!-- ======= Contact Section ======= --> */}
        <section id="contact" className="contact">
          <div className="container">
            <div style={{ padding: 10 }} className="row">
              <div className="col-lg-6">
                <div className="holographic-card">
                  <i style={{ fontSize: 30 }} className="bx bx-map"></i>
                  <h3 style={{ color: "#30146c" }}>Our Address</h3>
                  <p>
                    SNP43/ 80A & 80A/1, Shashi nagar, Near Anna ikon
                    Building,Sikandra, Agra
                  </p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="holographic-card">
                  <i style={{ fontSize: 30 }} className="bx bx-envelope"></i>
                  <h3 style={{ color: "#30146c" }}>Email Us</h3>
                  <p>Apex_agra@yahoo.com</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="holographic-card">
                  <i style={{ fontSize: 30 }} className="bx bx-phone-call"></i>
                  <h3 style={{ color: "#30146c" }}>Call Us</h3>
                  <p>+91 7983213124</p>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-6 ">
                <iframe
                  className="mb-4 mb-lg-0"
                  src="https://www.google.com/maps/embed/v1/place?q=Apex+Engineers+And+Consultants,+Rishipuram+Colony,+Lohamandi,+Agra,+Uttar+Pradesh,+India&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                  style={{ border: "0", width: "100%", height: "387px" }}
                  allowFullScreen
                ></iframe>
              </div>

              <div className="col-lg-6">
                {/* <form
                  onSubmit={handleContactUs}
                  className="php-email-form"
                > */}
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                </div>
                <div className="form-group mt-3">
                  <input
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    required
                  />
                </div>
                <div className="form-group mt-3">
                  <textarea
                    value={userMessage}
                    onChange={(e) => setUserMessage(e.target.value)}
                    className="form-control"
                    name="message"
                    rows={6}
                    placeholder="Message"
                    required
                  ></textarea>
                </div>
                {/* <div className="my-3">
                    <div className="loading">Loading</div>
                    <div className="error-message"></div>
                    <div className="sent-message">
                      Your message has been sent. Thank you!
                    </div>
                  </div> */}
                <div className="text-center">
                  <button
                    style={{
                      backgroundColor: "#30146c",
                      color: "white",
                      padding: 7,
                      borderRadius: 10,
                      margin: 10,
                    }}
                    onClick={handleContactUs}
                    type="submit"
                  >
                    Send Message
                  </button>
                </div>
                {/* </form> */}
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Contact Section --> */}
      </main>

      {/* End main  */}

      <Footer />
    </>
  );
};

export default ContactUs;
