import React from 'react'
import "./FloatingDiv.css";
import { themeContext } from '../../Context';
import { useContext } from 'react';
export const FloatingDiv = (props) => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
    const {image,txt1,txt2} = props
  return (
    <div  className='floatingdiv'>
        <img src={image} alt="Crown" />
        <span style={{color:darkMode?"black":"black"}}  >{txt1} <br/>{txt2} </span>
        
    </div>
  )
}
