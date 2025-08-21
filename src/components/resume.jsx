import React from 'react';
import '../App.css'; // Import the CSS file
import { Typography } from '@mui/material';

export default function Resume() {
    return (
        <>
            <Typography variant="h4" align="center" id="resume-link">
                Download my <a href="https://docs.google.com/document/d/1lmh6kt9L11SEohUry49Czz9uBOuvGOESP3BixFTlWNE/edit?usp=sharing">resume</a>      </Typography>
            <Typography variant="h2" align="center" id="skills">
                Front-end Proficiencies
                <ul>
                    <li><div className="list-item">HTML</div></li>
                    <li><div className="list-item">CSS</div></li>
                    <li><div className="list-item">JavaScript</div></li>
                    <li><div className="list-item">JQuery</div></li>
                    <li><div className="list-item">responsive design</div></li>
                    <li><div className="list-item">React</div></li>
                    <li><div className="list-item">Bootstrap</div></li>
                </ul>
            </Typography>
            <Typography variant="h2" align="center" id='skills2'>
                Back-end Proficiencies
                <ul>
                    <li><div className="list-item">API's</div></li>
                    <li><div className="list-item">Node</div></li>
                    <li><div className="list-item">Express</div></li>
                    <li><div className="list-item">MySQL,Sequelize</div></li>
                    <li><div className="list-item">MongoDB,Mongoose</div></li>
                    <li><div className="list-item">REST</div></li>
                    <li><div className="list-item">GraphQL</div></li>
                </ul>
            </Typography>

        </>
    );
}

