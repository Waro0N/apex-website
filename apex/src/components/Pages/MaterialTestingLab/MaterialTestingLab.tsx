import { useState } from "react";
import Footer from "../../footer/footer.tsx";
import NavBar from "../../NavBar/NavBar.tsx";
import { Button } from "@mui/material";

function MaterialTestingLab() {
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);

  return (
    <>
      <NavBar />

      {/* Main Start */}
      <main id="main" style={{ background: "#fff" }}>
        {/* Breadcrumbs */}
        <section id="breadcrumbs" className="breadcrumbs">
          <div className="container">
            <ol>
              <li>
                <a href="#">Home</a>
              </li>
              <li>Lab</li>
            </ol>
            <h2>Material Testing Laboratory – NABL Accredited</h2>
          </div>
        </section>

        {/* Certifications Section */}
        <section id="about" className="about">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 pt-6 pt-lg-0 content">
                <p className="fst-italic">
                  <b>
                    Apex Engineers and Consultants Pvt. Ltd. : Your Trusted
                    Partner in Engineering and Quality Excellence.{" "}
                  </b>
                </p>
                <p className="fst-italic">
                  Apex Engineers and Consultants Pvt. Ltd. is an ISO 9001:2015 &
                  NABL Accredited Material Testing Laboratory, providing
                  accurate, reliable, and timely testing services for building
                  construction, highways, infrastructure, and industrial
                  projects. Our laboratory follows IS, IRC, MoRTH, ASTM, and BIS
                  standards to ensure compliance and quality assurance.
                </p>
              </div>
            </div>
          </div>
        </section>
        <div className="container">
          <div className="section-title">
            <h2>Building Material Testing Services</h2>
          </div>
        </div>
        <section id="about" className="about">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 pt-6 pt-lg-0 content">
                <p className="fst-italic">
                  We offer comprehensive building material testing to ensure
                  structural safety and durability:
                  <ol>
                    <li>
                      <b>Cement Testing (OPC, PPC, PSC):</b> Fineness,
                      consistency, initial & final setting time, soundness,
                      compressive strength.
                    </li>
                    <li>
                      <b>
                        Bricks & Blocks (Clay, Fly Ash, AAC, Concrete Blocks):
                      </b>
                      Compressive strength, water absorption, density,
                      efflorescence, dimensional checks.
                    </li>
                    <li>
                      <b> Concrete Testing:</b> Cube and core compressive
                      strength, block density.
                    </li>
                    <li>
                      <b>Paving Blocks & Natural Stones:</b>
                      Abrasion resistance, compressive strength, water
                      absorption, dimensional accuracy Keywords: cement testing
                      lab, brick testing lab, concrete testing NABL, building
                      material testing laboratory
                    </li>
                  </ol>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="counts" className="counts">
          <div className="container">
            <div className="row no-gutters">
              {/* Certificate of Accreditation */}
              <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
                <div
                  className="holographic-card"
                  onClick={() =>
                    setSelectedPdf("/pdfs/Certificate TC-9743.pdf.pdf")
                  }
                  style={{ cursor: "pointer" }}
                >
                  <i style={{ fontSize: 30 }} className="bi-patch-check"></i>
                  <span className="purecounter"></span>
                  <p>
                    <strong style={{ fontSize: 20 }}>
                      Accrediated with NABL&nbsp;&nbsp;&nbsp;&nbsp;
                      <br />
                      ISO/IEC 17025:2017
                    </strong>
                    <br />
                    <br />
                    <p style={{ color: "red" }}>click here to view</p>
                  </p>
                </div>
              </div>

              {/* Certificate of Quality Management System */}
              <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
                <div
                  className="holographic-card"
                  onClick={() =>
                    setSelectedPdf(
                      "/pdfs/I3264 APEX ENGINEERS & CONSULTANTS.pdf",
                    )
                  }
                  style={{ cursor: "pointer" }}
                >
                  <i style={{ fontSize: 30 }} className="bi-patch-check"></i>
                  <span className="purecounter"></span>
                  <p>
                    <strong style={{ fontSize: 20 }}>
                      Quality Management System <br />
                      ISO 9001:2015
                    </strong>
                    <br />
                    <br />
                    <p style={{ color: "red" }}>click here to view</p>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PDF Viewer */}
        {selectedPdf && (
          <section
            className="pdf-viewer"
            style={{ textAlign: "center", marginTop: "5px" }}
          >
            <iframe
              src={`${selectedPdf}#toolbar=0`}
              // type="application/pdf"
              width="75%"
              height="600px"
              style={{
                borderColor: "none",
              }}
            />
            <br />
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#30146c",
                "&:hover": { backgroundColor: "#251056" },
              }}
              onClick={() => setSelectedPdf(null)}
              // style={{
              //   backgroundColor: "#30146c",
              //   color: "white",
              //   padding: 7,
              //   borderRadius: 10,
              //   margin: 10,
              // }}
            >
              Close PDF
            </Button>
          </section>
        )}
      </main>

      <Footer />
    </>
  );
}

export default MaterialTestingLab;
