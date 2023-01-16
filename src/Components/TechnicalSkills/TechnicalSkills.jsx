import React from 'react'
import './TechnicalSkills.css';
import { themeContext } from '../../Context';
import { useContext } from 'react';
const TechnicalSkills = () => {
   const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='technicalskills'id='Skills' >
          <br/>
            <span className='my-Tech'  > Technical <span>Skills</span></span><br/>
            
            
           <br/> <br/>
            <div class="technicalSkillsList" >
        <div style={{textAlign:"center",border:darkMode?"2px solid teal":""}} >
            <img src="https://cdn-icons-png.flaticon.com/512/732/732212.png" alt="html" /> <br/>
            <label>HTML</label>
        </div>
        <div  style={{textAlign:"center",border:darkMode?"2px solid teal":""}}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png" alt="html"  /> <br/>
            <label>CSS</label>
        </div>
        <div style={{textAlign:"center",border:darkMode?"2px solid teal":""}}>
            <img src="https://cdn.icon-icons.com/icons2/2108/PNG/512/javascript_icon_130900.png" alt="html"  /> <br/>
            <label>JavaScript</label>
        </div>
         <div style={{textAlign:"center",border:darkMode?"2px solid teal":""}}>
            <img  src="https://cdn.icon-icons.com/icons2/2415/PNG/96/react_original_logo_icon_146374.png" alt="html" /> <br/>
            <label>React-Js</label>
        </div>
         <div style={{textAlign:"center",border:darkMode?"2px solid teal":""}}>
            <img src="https://www.rlogical.com/wp-content/uploads/2021/08/Rlogical-Blog-Images-thumbnail.png" alt="html" /> <br/>
            <label>Next-Js</label>
        </div> 
        <div style={{textAlign:"center",border:darkMode?"2px solid teal":""}}>
            <img src="https://cdn.icon-icons.com/icons2/2415/PNG/512/typescript_original_logo_icon_146317.png" alt="html" /> <br/>
            <label>TypeScript</label>
        </div> 
        <div style={{textAlign:"center",border:darkMode?"2px solid teal":""}}>
            <img src="https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_node_icon_130301.png" alt="html"  /> <br/>
            <label>Node-Js</label>
        </div>
        
        </div>
      
          
         
          
   

   
      
    </div>
  )
}

export default TechnicalSkills