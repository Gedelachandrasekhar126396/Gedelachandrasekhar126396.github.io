import React from "react";

function SliderContent({ activeIndex, sliderImage }) {
  return (
    <div id="Projects" >
            <span className='my-Tech heading'>My Portfolio <span style={{color:"var(--orange)",marginBottom:"100px"}} >Projects</span></span><br/>
      {sliderImage.map((slide, index) => (
      <a href={slide.netlify} >  <div
          key={index}
          className={index === activeIndex ? "slides active" : "inactive"}
        >
          <img className="slide-image" src={slide.urls} alt={slide.title} width="100%" height= "100" />
          {/* <h2 className="slide-title">{slide.title}</h2> */}
          {/* <h3 className="slide-text" style={{color:"black"}} >{slide.description}</h3> */}
        </div></a>
      ))} 
    </div>
  );
}

export default SliderContent;