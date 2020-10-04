import React from 'react'
import './QualitiesSlide.css'
import Fade from 'react-reveal/Fade'; 
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

function QualitiesSlider() {

    const sliderContents = [
        {
            image: '/Images/hardworking.png',
            title: 'Hardworking'
        },
        {
            image: '/Images/adventurous.png',
            title: 'Adventurous'
        },
        {
            image: '/Images/passionate.png',
            title: 'Passionate'
        },
        {
            image: '/Images/inspire.png',
            title: 'Inspiring'
        },
    ];

    return (
        <div className="qualities-slider">
            <div className="slider-container">
                <Slider autoplay={500} >
                    {sliderContents.map((item, index) => (
                        <div className="slider-div">
                            <img src={item.image} className="slider-img"/>
                            <h1 className="slider-title">{item.title}</h1>
                        </div>   
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default QualitiesSlider
