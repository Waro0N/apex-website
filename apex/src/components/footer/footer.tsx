import React from "react";
import './footer.css'
import ApexLogo from '../../assets/Apex_Logo2.png';
import { Grid } from "@mui/material";


const ApexFooter =() =>{
    return (
        <footer className="footer">
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Grid container alignItems="center">
                        <Grid item>
                            <img src={ApexLogo} alt="Logo" className='Apex-Logo'/>
                        </Grid>
                        <Grid item>
                            <div className="company-details">
                                <h2>APEX ENGINEERS AND CONSULTANTS</h2>
                                <p>Anna Icon | Agra</p>
                                <a className="ph-no" href={`tel:${9412593112}`}>
                                    {9412593112}
                                </a>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={6} className="footer-address">
                    {/* Your content for the footer address */}
                </Grid>
            </Grid>
        </footer>
    )
}

export default ApexFooter;
