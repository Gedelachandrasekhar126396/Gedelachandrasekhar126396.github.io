
import './Contact.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import GitHub from '@iconscout/react-unicons/icons/uil-github';
import LinkedIn from '@iconscout/react-unicons/icons/uil-linkedin';
import Mobile from '@iconscout/react-unicons/icons/uil-phone';
import Gmail from '@iconscout/react-unicons/icons/uil-mailbox';
const Contact = () => {
const[done,setDone] = useState(false)

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_u4u52pk', 'template_bgbbzyh', e.target, 'rTXBrLyDaXjeS0G9K')
        .then((result) => {
            console.log(result.text);
            setDone(true)
            alert("Message has been sent successfully")
        }, (error) => {
            console.log(error.text);
        });
    };

  return (
    <div  className='contact-form'id='Contact' >
       <div className='cont-left' >
        <div className='awesome'>
        
        <span className='my-Tech heading'> Contact <span style={{color:"var(--orange"}} > Info</span></span><br/>
        <div style={{padding:"30px"}} >
          <a href='https://github.com/Gedelachandrasekhar126396' >
          <div style={{display:"flex",alignItems:"center"}} >
          <GitHub  color='var(--orange)' size='2rem' /> <span className='gmail'  >Github</span>
          </div>
          </a>

          <a href='https://www.linkedin.com/in/gedela-chandra-2b4a64246/' >
          <div style={{display:"flex",alignItems:"center",paddingTop:"10px"}} >
          <LinkedIn  color='var(--orange)' size='2rem' /> <span className='gmail' >LinkedIn</span>
          </div>
          </a>

          <div style={{display:"flex",alignItems:"center",paddingTop:"10px"}} >
          <Mobile  color='var(--orange)' size='2rem' /> <span className='gmail' >7659912637</span>
          </div>
          
          <div  style={{display:"flex",alignItems:"center",paddingTop:"10px"}} >
           <Gmail  color='var(--orange)' size='2rem' /> <span className='gmail'   >gedelachandrasekhar@gmail.com</span>
          </div>
        </div>
        </div>
       </div>
       <div className='cont-right' >
        <form ref={form} onSubmit={sendEmail} >
         <input type="text" name= "user_name" className="user" placeholder='Name'id="cont-name" />
            <input type= "email" name="user_email" className= "user" placeholder='Email'id="cont-email" />
            <textarea name='message' className='user' placeholder='Message' id="cont-message" />
            <input type='submit' value='Send' className='button send-button' />
            <span>{done && "Thanks for contacting me"}</span>
            {/* <div className='blur c-blur' style={{background:"var(--purple)"}} ></div> */}
        </form>
       </div>
        
    </div>
  )
}

export default Contact