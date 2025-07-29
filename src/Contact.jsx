import React from 'react'
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState } from 'react';

//Contact page
const Contact = () => {

let message = document.getElementById('message')
// sending and recieving eamils using email.js
 const form = useRef()
  const serviceId = import.meta.env.VITE_SERVICEID;
  const templateId = import.meta.env.VITE_TEMPLATEID;
  const publicId = import.meta.env.VITE_PUBLICID;


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey: publicId,
      })
      .then(
        () => {
          console.log('SUCCESS!');
          message.innerHTML = "Email sent sucessfully"
          
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <section id='contact' className='dark:text-black'>
    <div className='justify-between'>
      <h1 className='text-center uppercase xl:text-4xl text-3xl p-3  dark:text-black pt-10'>Contact </h1>

      {/* form  */}
      <form  ref={form}className='w-[500px] justify-center xl:ml-[490px] ml-6 md:ml-[100px] xl:text-xl  md:text-2xl md:p-2'  onSubmit={sendEmail}>
        <div className='m-2'>
            <input className='xl:w-[500px] md:w-[500px] w-[300px] p-[8px] rounded-lg' type="text"  name="name"  placeholder='UserName' 
             required />
        </div>
        <div className='m-2 xl:w-[500px] p-[5px] rounded-lg w-[300px] md:w-[500px] '>
            <input  className='xl:w-[500px] p-[8px] rounded-lg w-[300px] md:w-[500px] ' type="email" placeholder='Email' name="email"
       required  />
        </div>
       <div className='m-2 '>
           <textarea name="message" className='xl:w-[500px] xl:p-[8px] rounded-lg w-[300px] md:w-[500px]'cols="50" rows="10" 
          required>type your message</textarea>
       </div>
       <div className='m-2'>
           <input className='xl:w-[500px] p-[8px] rounded-lg bg-black xl:dark:text-white text-white text-2xl w-[300px] md:w-[500px]' type="submit"  id="" value="Submit"  />
       </div>
       <h1 id='message' className='text-green-600 md:text-3xl  text-2xl text-center'></h1>
       </form>
      
  </div>
  </section>
  )
}

export default Contact
