import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
      <a href="https://www.linkedin.com/in/asif-rizwana-1a7569227"> <LinkedInIcon /> </a>
        <a href="https://www.instagram.com/"> <InstagramIcon /> </a>

      </div>
      
    </div>
  );
}

export default Footer;