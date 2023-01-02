import React from 'react'
import './Footer.css';
import GitHub from '@iconscout/react-unicons/icons/uil-github';
import Instagram from '@iconscout/react-unicons/icons/uil-instagram'
import LinkedIn from '@iconscout/react-unicons/icons/uil-linkedin'
const Footer = () => {
  return (
    <div className='footer' >
        <img src="https://user-images.githubusercontent.com/107903370/205672212-c687a19b-adee-4068-884d-926e6239531b.png" alt="footer-background" style={{width:"100%"}} />
        <div className='f-content' >
            <span style={{fontSize:"22px"}} >gedelachandrasekhar@gmail.com</span>
     <div className='f-icons' >
    <a href='https://github.com/Gedelachandrasekhar126396'  > <GitHub  color='white' size='3rem' /></a>
      <Instagram color='white' size='3rem'/>
     <a href='https://www.linkedin.com/in/gedela-chandra-2b4a64246/'> <LinkedIn color='white' size='3rem'/></a>
     </div>
        </div>
    </div>
  )
}

export default Footer