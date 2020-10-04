import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import './Menubar.css'
import Logo from './Logo'
// import $ from 'jquery'
////cnasjkncasjcnasucbasjkbcasjkbaui

function Menubar() {
    
    const [open, setOpen] = useState(false)
    const handleClick = () => {
        // $(".nav-list").css("transform","translateX(-1500px)");
        setOpen(!open);
    }
    
    return (
            <nav>
                <div className="logo"><Logo /></div>
                
                <ul className="nav-list" style={{transform:open?"translateX(-1500px)":"translateX(0px)"}}>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link" >About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/projects" className="nav-link" >Projects</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-link">Contact</Link>
                    </li>
                        
                </ul>
                
                <i className={open?"fas fa-bars":"fas fa-times"} onClick={() => setOpen(!open)}></i>
            </nav>
            
    )
}

export default Menubar
