import React from 'react'
import { useState } from 'react';
import './Toggle.css';
import { themeContext } from '../../Context';
import { useContext } from 'react';

const Toggle = () => {
  const [text,setText] = useState("Dark");
  const theme = useContext(themeContext);
const darkMode=theme.state.darkMode;
  const handleClick = ()=>{
    setText(darkMode?"Dark":"Light")
    theme.dispatch({type:'toggle'})
  }
  return (
    <div className='toggle' >
       
      <button onClick={handleClick} className="toggle-button" >{text}</button>
       </div>
    
  )
}

export default Toggle