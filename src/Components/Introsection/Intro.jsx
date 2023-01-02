import React from 'react'

import './intro.css';
import Resume from './Gedela_Sekhar_Resume.pdf' ;
import { themeContext } from '../../Context';
import { useContext } from 'react';


const Intro = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const transition = {duration:2,type:'spring'}
  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span style={{color:darkMode?"white":""}} >Hello! </span>
                <span>This is Chandra Sekhar</span>
                <span  style={{padding:"0px 0px"}}>Full-Stack Web Developer.</span>
            </div>
            <a href={Resume} download id="Resume" ><button className='button i-button' >Resume</button></a>
            <div className="i-icons">
               <a href='https://github.com/Gedelachandrasekhar126396' ><img src="https://user-images.githubusercontent.com/107903370/204101328-9ada5339-1950-41f2-a4d2-f3e6ed413fe5.png" alt="GithubPng" /></a>
               <a  href='https://www.linkedin.com/in/gedela-chandra-2b4a64246/'>
               <img src="https://user-images.githubusercontent.com/107903370/204101418-0ac814a3-bacb-4ef1-9959-40d6f9ee8377.png" alt="LinkedPng" />
               </a>
               
            </div>
        </div>
        <div className="i-right">
            <img src="https://user-images.githubusercontent.com/107903370/204101972-b002d091-af9f-493f-8ac4-b2de85e084dd.png" alt="vec1" />
            <img src="https://user-images.githubusercontent.com/107903370/204102049-e8be336f-745e-4f56-ac84-85b1dffe6231.png" alt="vec2" />
            <img src="https://user-images.githubusercontent.com/107903370/204104218-89c5e976-39fb-433d-98c3-f2340c6fbb04.PNG" alt="vec3" />
           
        </div>
    
    </div>
  )
}

export default Intro