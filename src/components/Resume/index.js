import React from "react";
import ResumeDoc from "../../assets/files/Adam-Payne-Resume-2015.pdf"

function Resume() {
    return (
        <section className="resume">
            <div className="resume-column left">
                <h3>Coding Skills</h3>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Flex Box</li>
                    <li>Javascript</li>
                    <li>JQuery</li>
                    <li>JQuery UI</li>
                    <li>Web APIs</li>
                    <li>Bootstrap</li>
                    <li>Server Side APIs</li>
                    <li>Node.Js</li>
                    <li>Object-Oriented Programming</li>
                    <li>Test Driven Development</li>
                    <li>Express.js</li>
                    <li>MySQL</li>
                    <li>Sequelize</li>
                    <li>Model-View-Controller</li>
                    <li>Regex</li>
                    <li>MongoDB</li>
                    <li>Progressive Web Applications</li>
                    <li>React</li>
                </ul>
            </div>
            <div className="resume-column right">
            <h3>Design Skills</h3>
            
                <ul>
                    <li>Final Cut Pro</li>
                    <li>Apple Motion</li>
                    <li>Compressor</li>
                    <li>Photoshop</li>
                    <li>AfterEffects</li>
                    <li>Illustrator</li>
                </ul>
            
                <h4><a href={ResumeDoc} download={ResumeDoc}>Download Resume</a></h4>
            </div>
            
        </section>
    )
}

export default Resume;