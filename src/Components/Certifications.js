import React from 'react'
import './Certifications.css'
import Flip from 'react-reveal/Flip'

function Certifications() {

    const certications = [
        {
            name: "Web Development Career Path",
            institute: "CodeCademy",
            link: "#"
        },
        {
            name: "Responsive Web Design Certification",
            institute: "FreeCodeCamp",
            link: "#"
        },
        {
            name: "Android App Specialization",
            institute: "Coursera",
            link: "#"
        },
        {
            name: "Pyhton for Everybody Specialization",
            institute: "Coursera",
            link: "#"
        },
    ];

    return (
        <div className="certifications-container"> 
           
            {certications.map((item) => (
                    <Flip bottom cascade>
                        <div className="certificate-item">
                            <h3 className="certificate-item-heading">{item.name}</h3>
                            <div className="second-part">
                                <h5 className="certificate-institute">{item.institute}</h5>
                                <a href={item.link} className="certificate-link">View Certificate</a>
                            </div>
                        </div>
                    </Flip>
                ))}
        </div>
    )
}

export default Certifications
