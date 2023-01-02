import React from 'react'
import './About.css';
import { themeContext } from '../../Context';
import { useContext } from 'react';
const About = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='about'id='AboutMe' >
        <span style={{textAlign:"center",color:darkMode?"white":""}} ><span style={{color:"var(--orange)"}} >About</span> MySelf</span>
        <p >I am a person who is desired to learn new things and am fascinated by the concepts which thrill me while learning and understanding.With this experience, I was destined to see myself as a tech guy.I have a piece of good knowledge of Data structures and algorithms, HTML, CSS, and JavaScript.Building a few projects got me hands-on experience with React and trained me to become a more adaptive and collaborative professional. <br/><br/>
       <p style={{color:"var(--orange)"}} > Currently, I am enjoying a wonderful opportunity to learn new things about the MERN stack web development and am so excited to become a full-stack web developer.</p> </p>
    </div>
  )
}

export default About