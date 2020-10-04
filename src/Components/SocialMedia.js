import React from 'react'
// import {SocialMediaIconsReact} from 'social-media-icons-react';
import {FaTwitter, FaFacebookF, FaLinkedinIn,FaInstagram,FaGithub} from 'react-icons/fa'
import './SocialMedia.css'
import Rotate from 'react-reveal/Rotate'

function SocialMedia() {
    return (
        <div className="social-media-container">
            <Rotate top left cascade>
            <a href="https://twitter.com/sharjeel_4u" target="_blank" className="social-media-icon twitter"><FaTwitter/></a>
            <a href="https://www.facebook.com/mian.sharjeel.14" target="_blank" className="social-media-icon facebook"><FaFacebookF/></a>
            <a href="https://www.linkedin.com/in/muhammad-sharjeel-maqsood-b406591b5/" target="_blank" className="social-media-icon linkedin"><FaLinkedinIn/></a>
            <a href="https://www.instagram.com/sharjeel.4u/" target="_blank" className="social-media-icon instagram"><FaInstagram/></a>
            <a href="https://github.com/sharjeel-193" target="_blank" className="social-media-icon github"><FaGithub/></a>
            </Rotate>
        </div>
    )
}

export default SocialMedia
