import React from 'react'
import './HomeIntro.css'
import Zoom from 'react-reveal/Zoom';

function HomeIntro() {
    return (
        <Zoom top>
            <div className="intro-container">
                <img src="/Images/dp.png" className="intro-img"/>
                <p className="intro-text">I am a student of National University of Sciences and Technology (NUST), Islamabad, currently enrolled in an Undergraduate Program BS(Computer Science) at School of Electrical Engineering and Computer Sciences (SEECS).
                I just started learning programming from my teenage and chosen the subjecs of Computer in Higher Secondary Education</p>
            </div>
        </Zoom>
    )
}

export default HomeIntro
