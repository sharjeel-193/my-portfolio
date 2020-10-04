import React from 'react'
import DegreeAccordions from '../Components/DegreeAccordions'
import './About.css'
import Flip from 'react-reveal/Flip';
import Certifications from '../Components/Certifications';
import Skills from '../Components/Skills';
import Interests from '../Components/Interests';

function About() {
    return (
        <div>
            <h1 className="page-heading">About Me</h1>
            <hr />
            <Flip top>
                <h2 className="degree-heading">Degrees</h2>
                <DegreeAccordions />
            </Flip>
            
            <hr />
            <Flip bottom>
                <h2 className="certificate-heading">Courses and Certifications</h2>
                <Certifications />
            </Flip>

            <hr />
            {/* <Flip top> */}
                <h2 className="degree-heading">Skills</h2>
                <Skills />
            {/* </Flip> */}

            <hr />
            {/* <Flip bottom> */}
                <h2 className="certificate-heading">Interests and Hobbies</h2>
                <Interests />
            {/* </Flip> */}
           
        </div>
    )
}

export default About
