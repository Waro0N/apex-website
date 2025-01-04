import { Link } from "react-router-dom";
import Footer from "../../footer/footer";
import TopBar from "../../TopBar/TopBar";
import NavBar from "../../NavBar/NavBar";
import jobOpenings from "../../../data/jobOpenings.json";
import "../Career/Career.css"
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
    const jobs = jobOpenings.filter((value) => value.expire === false)
    return (
        <>
            <TopBar />
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
                        {jobs.length > 0 ? (
                            jobs.map((job, index) => (
                                <div className="col-lg-12" key={index}>
                                    <div className="job-item">
                                        <h3>{job.jobTitle}</h3>
                                        <p>
                                            <strong>Description: </strong>
                                            {job.jobDescription}
                                        </p>
                                        <p>
                                            <strong>Location: </strong>
                                            {job.location}
                                        </p>
                                        <p>
                                            <strong>Employment Type: </strong>
                                            {job.employmentType}
                                        </p>

                                        <h4>Qualifications:</h4>
                                        <ul>
                                            {job.qualifications.map((qualification, qIndex) => (
                                                <li key={qIndex}>{qualification}</li>
                                            ))}
                                        </ul>

                                        <h4>Responsibilities:</h4>
                                        <ul>
                                            {job.responsibilities.map((responsibility, rIndex) => (
                                                <li key={rIndex}>{responsibility}</li>
                                            ))}
                                        </ul>

                                        <h4>Benefits:</h4>
                                        <ul>
                                            {job.benefits.map((benefit, bIndex) => (
                                                <li key={bIndex}>{benefit}</li>
                                            ))}
                                        </ul>

                                        <Link
                                            to={job.applicationLink}
                                            className="btn btn-primary"
                                            style={{ marginTop: "10px" }}
                                        >
                                            Apply Now
                                        </Link>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <>no openings</>
                        )}
         

                            
                        </div>

                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}

export default CareerPage;
