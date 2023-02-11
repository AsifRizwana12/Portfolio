import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Asif Rizwana</h2>
        <br/> 
        <div className="prompt">
          <p>A software developer with a passion for learning and creating.</p>
          <a href="https://www.linkedin.com/in/asif-rizwana-1a7569227"> <LinkedInIcon /> </a>
          <a href="asifrizwana128@gmail.com"> <EmailIcon /> </a>
          <a href="https://github.com/AsifRizwana12"> <GithubIcon /> </a>
          
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              HTML, CSS, React JS , React Native
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              
              MySQL, SQL
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>Python, C, CPP, Java, JavaScript </span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;