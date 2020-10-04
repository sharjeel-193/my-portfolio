import React from 'react'
import Hero from '../Components/Hero'
import HomeIntro from '../Components/HomeIntro'
import QualitiesSlider from '../Components/QualitiesSlider'
import './Home.css'

function Home() {
    return (
        <div>
             <video src="/Videos/back1.mp4" autoPlay loop muted />
            <Hero />
            <HomeIntro />
            <QualitiesSlider />
        </div>
    )
}

export default Home
