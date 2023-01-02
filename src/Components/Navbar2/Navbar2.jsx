import React from 'react'
// import Toggle from '../Toggle/Toggle'
import './Navbar2.css';
import { themeContext } from '../../Context';
import { useContext } from 'react';
import { Link } from 'react-scroll';
import { useState } from 'react';

const Navbar2 = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const [clicked,setClicked] = useState(true);
  return (
    <div className="n-wrapper"  style={{color:darkMode?"white":"",background:darkMode?"black":"white"}} id='Navbar' >
        <div className="n-left">
            <div className="n-name">Chandra Sekhar</div>
            {/* <Toggle/> */}
        </div>
        <div className="n-right">
            <div>
                <ul id="n-list" className={clicked? "#n-list":"#n-list active"} style={{color:darkMode?"white":"",background:darkMode?"black":"white"}} > 
                <Link spy={true} to='Navbar' smooth={true} activeClass='activeClass'>
                         <li>Home</li>   </Link>  
                    <Link spy={true} to= 'AboutMe' smooth={true} onClick={()=>{setClicked(!clicked)}} >
                         <li>About Me</li>  </Link>   
                    <Link spy={true} to= 'Skills' smooth={true} onClick={()=>{setClicked(!clicked)}} >
                    <li>Skills</li></Link>  
                    <Link spy={true} to='Projects' smooth={true} onClick={()=>{setClicked(!clicked)}} >
                    <li>Projects</li></Link>   
                    <Link spy={true} to= 'Resume' smooth={true} onClick={()=>{setClicked(!clicked)}} >
                    <li>Resume</li></Link>  
                    <Link spy={true} to= 'Resume' smooth={true} onClick={()=>{setClicked(!clicked)}} >
                    <li>Github-Stats</li></Link>  
                    <Link spy={true} to='ContactMe' smooth={true} onClick={()=>{setClicked(!clicked)}} >
                     <li>Contact Me</li></Link> 
                </ul>
              
            </div>
            
            
        </div>
        <div>
          

        <i id="bar" className={clicked?'fas fa-bars':'fas fa-times'} onClick={()=>{setClicked(!clicked)}} ></i> 
                </div>
      
        {/* <i className='fas fa-times'></i> */}
      
    </div>
  )
}

export default Navbar2