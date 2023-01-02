import React from 'react'
import './ProjectsList.css';
import { themeContext } from '../../Context';
import { useContext } from 'react';
const ProjectsList = () => {
   const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='projectList'id='projects' >
      
            <span className='projects-title'> My <span style={{color:"var(--orange"}} > Projects</span></span><br/>
            
            
           
            
        
        
      
          
         
          
   

   
      
    </div>
  )
}

export default ProjectsList