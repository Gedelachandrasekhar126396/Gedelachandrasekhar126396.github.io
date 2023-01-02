import React from 'react'
import './Tools.css';
import { themeContext } from '../../Context';
import { useContext } from 'react';
const Tools = () => {
   const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='tools'id='Tools' >
      
            <span className='my-Tech'> <span style={{color:"var(--orange"}} >Tools</span></span><br/>
            
            
           
            <div class="toolsList" >
        <div style={{textAlign:"center",border:darkMode?"1px solid white":""}} >
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="html" /> <br/>
            <label>GitHub</label>
        </div>
        <div  style={{textAlign:"center",border:darkMode?"1px solid white":""}}>
            <img src="https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_vscode_icon_130084.png" alt="html"  /> <br/>
            <label>VS Code</label>
        </div>
        <div style={{textAlign:"center",border:darkMode?"1px solid white":""}}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Repl.it_logo.svg/1200px-Repl.it_logo.svg.png" alt="html"  /> <br/>
            <label>Replit</label>
        </div>
         <div style={{textAlign:"center",border:darkMode?"1px solid white":""}}>
            <img  src="https://www.netlify.com/v3/img/components/logomark-light.png" alt="html" /> <br/>
            <label>Netlify</label>
        </div>
         <div style={{textAlign:"center",border:darkMode?"1px solid white":""}}>
            <img src="https://cdn.worldvectorlogo.com/logos/npm-square-red-1.svg" alt="html" /> <br/>
            <label>NPM</label>
        </div> 
        
        
        </div>
      
          
         
          
   

   
      
    </div>
  )
}

export default Tools