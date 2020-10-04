import React, { Component, useState } from 'react'
import Logo from './Logo'
import './Header.css'

import Menubar from './Menubar'



function Header() {
    return (
        <div className="header">
            <Menubar />
        </div>
    )
}

export default Header

  {/* <Link to="/" className="logo-div nav-link">
                    <div className="logo-img">
                        <img src="/Images/logo-noglow.png" />
                    </div>
                    <div className="logo-text">Muhammad Sharjeel Maqsood</div>
                </Link>
                <ul className={click?'menu-list active': 'menu-list'}>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link" onClick={closeMobileMenu}>About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/projects" className="nav-link" onClick={closeMobileMenu}>Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-link" onClick={closeMobileMenu}>Contact</Link>
                        </li>
                    </ul>
                <div className="menu-icon" onClick={handleClick}>
                        {click?<FaTimes className="nav-icon"/>:<FaBars className="nav-icon"/>}
                </div> */}