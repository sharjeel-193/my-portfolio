import React from 'react'
import './Skills.css'
import Flip from 'react-reveal/Flip'

function Skills() {

    const skills = [
        {
            name:"C",
            path:"/Images/technologies/c.png"
        },
        {
            name:"C++",
            path:"/Images/technologies/c++.png"
        },
        {
            name:"Java",
            path:"/Images/technologies/java.png"
        },
        {
            name:"Pyhton",
            path:"/Images/technologies/python.png"
        },
        {
            name:"HTML 5",
            path:"/Images/technologies/html5.png"
        },
        {
            name:"CSS 3",
            path:"/Images/technologies/css3.png"
        },
        {
            name:"Bootstrap",
            path:"/Images/technologies/bootstrap.png"
        },
        {
            name:"React JS",
            path:"/Images/technologies/react.png"
        },

    ];

    return (

        <div className="skills-container">
            
            {skills.map((item) => (
                <Flip top cascade>
                    <div className="skill-item">
                        <img src={item.path} className="skill-img"/>
                        <h3 className="skill-name">{item.name}</h3>
                    </div>
                </Flip>
            ))}
            
        </div>
    )
}

export default Skills
