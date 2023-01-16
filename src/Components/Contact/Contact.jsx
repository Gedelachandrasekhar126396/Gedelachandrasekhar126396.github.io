
import './Contact.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import GitHub from '@iconscout/react-unicons/icons/uil-github';
import LinkedIn from '@iconscout/react-unicons/icons/uil-linkedin';
import Mobile from '@iconscout/react-unicons/icons/uil-phone';
// import Gmail from '@iconscout/react-unicons/icons/uil-mailbox';
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
    <div  className='contact-form' id='ContactMe' >
       <div className='cont-left' >
        <div className='awesome'>
        
        <span className='my-Tech heading'> Contact <span  > Info</span></span><br/>
        <div style={{padding:"30px"}} >
          <a href='https://github.com/Gedelachandrasekhar126396' >
          <div style={{display:"flex",alignItems:"center"}} >
          <GitHub  color='rgb(229, 76, 76)' size='2rem' /> <span className='gmail'  >Github</span>
          </div>
          </a>

          <a href='https://www.linkedin.com/in/gedela-chandra-2b4a64246/' >
          <div style={{display:"flex",alignItems:"center",paddingTop:"10px"}} >
          <LinkedIn  color='rgb(229, 76, 76)' size='2rem' /> <span className='gmail' >LinkedIn</span>
          </div>
          </a>

          <div style={{display:"flex",alignItems:"center",paddingTop:"10px"}} >
          <Mobile  color='rgb(229, 76, 76)' size='2rem' /> <span className='gmail' >7659912637</span>
          </div>
          
          <div  style={{display:"flex",alignItems:"center",paddingTop:"10px"}} >
          <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16" color="#e54c4c"><path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"></path></svg>
           <span className='gmail'>gedelachandrasekhar@gmail.com</span>
          </div>
        </div>
        </div>
       </div>
       <div className='cont-right' >
        <form ref={form} onSubmit={sendEmail} >
         <input type="text" name= "user_name" style={{color:"black"}} className="user" placeholder='Name'id="cont-name" />
            <input type= "email" style={{color:"black"}} name="user_email" className= "user" placeholder='Email'id="cont-email" />
            <textarea name='message' className='user' placeholder='Message' style={{color:"black"}} id="cont-message" />
            <input type='submit' value='Send' className='button send-button' />
            <span>{done && "Thanks for contacting me"}</span>
           
        </form>
       </div>
        
    </div>
  )
}

export default Contact