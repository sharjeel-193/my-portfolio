import React from 'react'
import {Link} from 'react-router-dom'
import './Logo.css'

function Logo() {
    return (
        
            <Link to="/" className="logo-div">
                <div className="logo-img">
                     <img src="/Images/logo-noglow.png" />
                </div>
                <h2 className="logo-text">Muhammad Sharjeel Maqsood</h2>
            </Link>
        
    )
}

export default Logo
