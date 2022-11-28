import React from 'react'
import { FloatingDiv } from '../FloatingDiv/FloatingDiv';
import './intro.css';

const Intro = () => {
  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span>Hello! </span>
                <span>This is Chandra Sekhar</span>
                <span  style={{padding:"15px 0px",fontSize:"20px"}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque aliquam, voluptatibus fugit sapiente eveniet qui veniam, aliquid deserunt dolorem, aut repellendus at impedit. Adipisci incidunt ex voluptatum assumenda in cupiditate?</span>
            </div>
            <button className='button i-button' >Resume</button>
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
            <img src='https://user-images.githubusercontent.com/107903370/204356770-076d0626-26c9-4867-bb4d-17ce731bc5ea.png' alt='glass-emoji'/>
        </div>
        <FloatingDiv image="https://user-images.githubusercontent.com/107903370/204351431-421ad929-f0f5-4ee8-9d46-84fa471eef11.png" txt1="Web" txt2="Developer" />
        
        <div className='blur' style={{backgroundColor:"rgb(238 210 255"}} ></div>
        {/* <div className='blur blue-blur' style={{background:"#C1F5FF",heigth:'11rem',width:'21rem'}} ></div> */}
    </div>
  )
}

export default Intro