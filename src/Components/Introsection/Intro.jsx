import React from 'react'
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
            <button className='button i-button' >Hire-Me</button>
            <div className="i-icons">
               <img src="https://user-images.githubusercontent.com/107903370/204101328-9ada5339-1950-41f2-a4d2-f3e6ed413fe5.png" alt="GithubPng" />
               <img src="https://user-images.githubusercontent.com/107903370/204101418-0ac814a3-bacb-4ef1-9959-40d6f9ee8377.png" alt="LinkedPng" />
            </div>
        </div>
        <div className="i-right">
            <img src="https://user-images.githubusercontent.com/107903370/204101972-b002d091-af9f-493f-8ac4-b2de85e084dd.png" alt="vec1" />
            <img src="https://user-images.githubusercontent.com/107903370/204102049-e8be336f-745e-4f56-ac84-85b1dffe6231.png" alt="vec2" />
            <img src="https://user-images.githubusercontent.com/107903370/204106374-2e3d1c82-407e-4f17-888c-e08e45f26719.png" alt="vec3" />
        </div>
    </div>
  )
}

export default Intro