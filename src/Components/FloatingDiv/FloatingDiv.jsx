import React from 'react'
import "./FloatingDiv.css"
export const FloatingDiv = (props) => {
    const {image,txt1,txt2} = props
  return (
    <div  className='floatingdiv'>
        <img src={image} alt="Crown" />
        <span>{txt1} <br/>{txt2} </span>
        
    </div>
  )
}
