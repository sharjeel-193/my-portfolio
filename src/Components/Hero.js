import React from 'react'
import './Hero.css'
import {Link } from 'react-router-dom'
import Roll from 'react-reveal/Roll';
import Bounce from 'react-reveal/Bounce';


function Hero() {
    return (
        <div className="hero-container">
            {/* <video src="/Videos/back1.mp4" autoPlay loop muted />  */}
            {/* <div className="hero-data">
                
            </div> */}
            <Bounce>
                <h1 className="hero-tagline">Hi, I am <span className="glowing-text">Muhammad Sharjeel Maqsood</span>,</h1>
                <h1 className="hero-tagline">
                    Let the design and development enhance the colors of your life with me
                </h1>
            </Bounce>
            <div className="hero-btns">
                <Roll left duration={1000}>
                    <Link to="/contact">
                        <button className="projects-btn">
                            SEE PROJECTS
                        </button>
                    </Link>
                </Roll>
                
                <Roll right duration={1000}>
                    <Link to="/contact">
                        <button className="contact-btn">
                            CONTACT
                        </button>
                    </Link>
                </Roll>
            </div>

        </div>
    )
}

export default Hero
