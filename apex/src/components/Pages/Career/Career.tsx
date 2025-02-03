// import { Link } from "react-router-dom";
import Footer from "../../footer/footer";
// import TopBar from "../../TopBar/TopBar";
import NavBar from "../../NavBar/NavBar";
// import jobOpenings from "../../../data/jobOpenings.json";
import "../Career/Career.css";
// import React from "react";

// interface Jobs {
//     jobTitle:string;
//     jobDescription:string;
//     location : string;
//     employmentType: string;
//     qualifications:string[];
//     responsibilities: string[];
//     benefits:string[];
//     applicationLink: string;
// }[]

function CareerPage() {
  // const jobs = jobOpenings.filter((value) => value.expire === false)
  //   const jobs = [];

  return (
    <>
      {/* <TopBar /> */}
      <NavBar />

      <main id="main" style={{ background: "#ffffff" }}>
        <section id="breadcrumbs" className="breadcrumbs">
          <div className="container">
            <ol>
              <li>
                <a href="/">Home</a>
              </li>
              <li>Career</li>
            </ol>
            <h2>Career</h2>
          </div>
        </section>

        <section id="job-openings" className="job-openings">
          <div className="container">
            <div className="section-title">
              <h2>Job Openings</h2>
            </div>

            <div className="row">
              <p style={{ fontSize: 20 }}>No job openings currently.</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default CareerPage;
