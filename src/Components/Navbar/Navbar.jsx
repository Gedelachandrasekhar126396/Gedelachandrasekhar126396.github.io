import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className="n-wrapper">
        <div className="n-left">
            <div className="n-name">Chandra Sekhar</div>
            <span>toggle</span>
        </div>
        <div className="n-rigth">
            <div className="n-list">
                <ul>
                    <li>Home</li>
                    <li>About Me</li>
                    <li>Skills</li>
                    <li>Project</li>
                    <li>Resume</li>
                    <button className="button nav-button">Contact Me</button>
                </ul>
              
            </div>
           
        </div>
      
    </div>
  )
}

export default Navbar