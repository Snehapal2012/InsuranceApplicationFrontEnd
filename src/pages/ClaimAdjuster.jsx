import React, { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import ClaimService from '../services/ClaimService';
import CategoryService from '../services/CategoryService';
import TextField from '@mui/material/TextField';
import './ClaimAdjuster.css';

const ClaimAdjuster= () =>{
    return(<>
            <div class="jumbotron">
                <h2 style={{"textAlign":"center", "color":"maroon",'background-color': 'rgb(192, 197, 197)'
}}>CLAIM ADJUSTER</h2>
            </div>
            
            <div class="container">
                <ul class="nav nav-pills nav-justified">
                    <li class="nav-item">
                        <a class="nav-link" href="CreateProfile.jsp" target="iframe_a">CREATE NEW INSURANCE</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" target="iframe_a" href="CreateClaim.jsp">CREATE CLAIM</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" target="iframe_a" href="ViewClaim.jsp">VIEW INSURANCE CATEGORY</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" target="iframe_a" href="ReportGeneration.jsp">VIEW CLAIM</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="Login.jsp">LOGOUT</a>
                    </li>
                </ul>
            </div>
            <div>
                <iframe src="adjuster_iframe.htm" 
                     name="iframe_a"></iframe>
            </div>
            </>
        
        )

}
export default ClaimAdjuster;
