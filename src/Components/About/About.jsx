import React from 'react'
import './About.css';
import { Heading } from '@chakra-ui/react';
const About = () => {
  
  
  return (
    <div className='about'id='AboutMe' >
       <Heading style={{fontSize:"42px",textAlign:"center",marginBottom:"30px"}} as='h1' size='2xl' noOfLines={1}>
     About Me
  </Heading>
  {/* <p class='about-heading'>About Me</p> */}
      <div class="description" >
      
        <img class="AboutImg" src="https://user-images.githubusercontent.com/107903370/210316606-1c0f0fc6-2f6b-4377-b3cc-0582b53700d7.jpg" alt="animated" />
      
        <p  class="aboutText">
        Full stack web developer with specialisation in JavaScript, HTML, CSS , REACT , REST API , Git/GITHUB Object-Oriented design. Offering excellence in analytical decision making and articulate presenter with ability to communicate technical information with clear and concise manner. 450+ hours of coding and hands-on experience in developing website features
        </p>
      </div>
    </div>
  )
}

export default About