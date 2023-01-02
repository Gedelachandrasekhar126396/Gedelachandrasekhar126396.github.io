import React from 'react'
import Toggle from '../Toggle/Toggle'
import './Navbar.css';
import { themeContext } from '../../Context';
import { useContext } from 'react';
import { Link } from 'react-scroll';
const Navbar = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className="n-wrapper"  style={{color:darkMode?"white":"",background:darkMode?"black":"white"}} id='Navbar' >
        <div className="n-left">
            <div className="n-name">Chandra Sekhar</div>
            <Toggle/>
        </div>
        <div className="n-right">
            <div>
                <ul className="n-list">
                    
                    <Link spy={true} to='Navbar' smooth={true} activeClass='activeClass'>
                         <li>Home</li>   </Link>  
                    <Link spy={true} to= 'AboutMe' smooth={true} >
                         <li>About Me</li>  </Link>   
                    <Link spy={true} to= 'Skills' smooth={true} >
                    <li>Skills</li></Link>  
                    <Link spy={true} to='Projects' smooth={true} >
                    <li>Projects</li></Link>   
                    <Link spy={true} to= 'Resume' smooth={true} >
                    <li>Resume</li></Link>  
                    <Link spy={true} to='ContactMe' smooth={true} >
                    <button className="button nav-button">Contact Me</button></Link>    
                </ul>
              
            </div>
           
        </div>
      
    </div>
  )
}

export default Navbar