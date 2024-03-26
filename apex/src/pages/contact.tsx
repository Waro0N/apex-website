import React from "react";
import './contact.css'
import { Grid, TextField, Button, Divider } from "@mui/material";
import ApexNav from "../components/navBar/navBar";
import ApexFooter from "../components/footer/footer";
import "./contact.css"
import ApexButton from "../components/button/button";



const ApexContact = () => {
    

    return (
        <>
        <ApexNav/>
        
        <div>
            <div>
                <h4 className="heading1">Have a project in mind?</h4>
                <h1 className="heading2">Contact Us</h1>
            </div>
            <div className="Privacy">
                <h4>Privacy is our top priority.</h4>
                <p>
                    We are committed to safeguarding your information. Rest assured, your personal data, including your email address, will be handled with the utmost confidentiality.
                </p>
                <p>
                    We prioritize the security and privacy of our users, and your trust is of paramount importance to us.
                </p>
                <a className="phno" href={`tel:${9412593112}`}>
                    {9412593112}
                </a>
            </div>
            <Grid container spacing={4}>
                <Grid item xs={12} sm={6}>
                    <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7411.233097900851!2d77.95453085080798!3d27.203099505723998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39747784a5cc2857%3A0x176e023829a61839!2sApex%20Engineers%20And%20Consultants!5e0!3m2!1sen!2sin!4v1708665454077!5m2!1sen!2sin" width="100%" height="450" style={{ border: 0 }} allowFullScreen={true} loading="lazy"></iframe>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <div className="container">
                        <form className="contact-form" action="#" method="POST">
                            <TextField
                                fullWidth
                                margin="normal"
                                variant="outlined"
                                label="Full Name"
                                name="username"
                                autoComplete="off"
                                required
                            />
                            <TextField
                                fullWidth
                                margin="normal"
                                variant="outlined"
                                label="Email"
                                name="email"
                                type="email"
                                autoComplete="off"
                                required
                            />
                            <TextField
                                fullWidth
                                margin="normal"
                                variant="outlined"
                                label="Phone Number"
                                name="phone"
                                type="tel"
                                required
                            />
                            <TextField
                                fullWidth
                                margin="normal"
                                variant="outlined"
                                label="Message"
                                name="message"
                                multiline
                                rows={4}
                                required
                            />
                            
                            <ApexButton width='100%' text="Submit" />
      
                        </form>
                    </div>
                </Grid>
            </Grid>
        </div>
        <ApexFooter/>
        </>
    );
}

export default ApexContact;
