import { useState } from "react";
import NavBar from "../../components/NavBar/NavBar.tsx";
import Footer from "../../components/footer/footer.tsx";
import { send } from "@emailjs/browser";
import { Box, CircularProgress, Snackbar, Alert, Button } from "@mui/material";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<
    "success" | "info" | "warning" | "error"
  >("success");
  const [mapLoading, setMapLoading] = useState(true);

  const handleContactUs = () => {
    if (!name || !email || !subject || !userMessage) {
      setSnackbarMessage("Please fill in all fields.");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
      return;
    }

    setLoading(true);
    const templateParams = {
      to_name: "APEX",
      from_name: name,
      reply_to: email,
      subject: subject,
      message: userMessage,
    };

    send(
      "service_dzygr9a",
      "template_qzglvj9",
      templateParams,
      "NE1Qagu2m5S6SiPBk"
    )
      .then(() => {
        setEmail("");
        setUserMessage("");
        setSubject("");
        setName("");
        setSnackbarMessage("Email sent successfully!");
        setSnackbarSeverity("success");
      })
      .catch(() => {
        setSnackbarMessage("Error sending email. Please try again.");
        setSnackbarSeverity("error");
      })
      .finally(() => {
        setLoading(false);
        setSnackbarOpen(true);
      });
  };

  return (
    <>
      <NavBar />
      <main id="main" style={{ background: "#ffffff" }}>
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
        </div>

        <section id="contact" className="contact">
          <div className="container">
            <div className="row">
              <Box className="col-lg-6">
                <Box
                  sx={{ position: "relative", width: "100%", height: "387px" }}
                >
                  {mapLoading && (
                    <Box
                      sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "rgba(255, 255, 255, 0.8)",
                        zIndex: 10,
                      }}
                    >
                      <CircularProgress size={50} />
                    </Box>
                  )}
                  <iframe
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      border: "0",
                    }}
                    src="https://www.google.com/maps/embed/v1/place?q=Apex+Engineers+And+Consultants,+Rishipuram+Colony,+Lohamandi,+Agra,+Uttar+Pradesh,+India&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                    allowFullScreen
                    onLoad={() => setMapLoading(false)}
                  ></iframe>
                </Box>
              </Box>

              <div className="col-lg-6">
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  className="form-control"
                  placeholder="Your Name"
                  required
                />
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  className="form-control mt-3"
                  placeholder="Your Email"
                  required
                />
                <input
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  type="text"
                  className="form-control mt-3"
                  placeholder="Subject"
                  required
                />
                <textarea
                  value={userMessage}
                  onChange={(e) => setUserMessage(e.target.value)}
                  className="form-control mt-3"
                  rows={6}
                  placeholder="Message"
                  required
                ></textarea>
                <div className="text-center mt-3">
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#30146c",
                      "&:hover": { backgroundColor: "#251056" },
                    }}
                    onClick={handleContactUs}
                    disabled={loading}
                  >
                    {loading ? (
                      <CircularProgress size={24} color="inherit" />
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={4000}
        onClose={() => setSnackbarOpen(false)}
      >
        <Alert
          onClose={() => setSnackbarOpen(false)}
          severity={snackbarSeverity}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </>
  );
};

export default ContactUs;
