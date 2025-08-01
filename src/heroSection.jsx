import React from 'react'
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState , useEffect } from 'react';
import './style.css'
import image from './assets/image.png'

const HeroSection = () => {
  // random carrier generator
  let carrierText = ["Webdeveloper", "Junior Fullstack developer"]
    const [currentText, setCurrentText] = useState(0);
    const [displayText, setDisplayText]  = useState('');
    const [isDeleting, setisDeleting] = useState(false)
    useEffect(()=>{
      const intervalId = setInterval(()=>{
        const fullText = carrierText[currentText]
        if(!isDeleting){
          // setDisplayText(fullText.substring(0,displayText))
          if(displayText.length < fullText.length){
            setDisplayText(fullText.substring(0,displayText.length +1))
          }else{
            setTimeout(() => {
              setisDeleting(true)
              
            },1000);
          }

        }else{
          if(displayText.length > 0){
               setDisplayText(fullText.substring(0,displayText.length -1));
          }else{
            setisDeleting(false)
            setCurrentText((prevText) => (prevText + 1) % carrierText.length )
          }

        }
      },100)
      return ()=> clearInterval(intervalId)
    },[displayText, currentText, isDeleting])
 

//hero section
  return (
    <section  className='xl:pt-20 md:pt-10 lg:pt-10 sm:pt-10 pt-10 '>
         
    <div className='w-full   h-full flex flex-col md:wfull md:h-full  lg:flex lg:flex-row xl:flex xl:flex-row md:flex-row sm-flex-col'>    
        <div className='image xl:ml-[100px] ml-2  xl:p-0 md:p-[10px] lg:p-[10px] sm:p-[10px] p-[10px] z-[-1]'>   
            <div className='rounded-[50%] dark:border-black  border-[#22333b]  xl:w-[500px] xl:h-[500px]  xl:border-[60px]  border-[40px] relative z-[10] top-[100px] cursor-pointer
             sm:w-[340px] sm:h-[340px] lg:w-[340px] lg:h-[340px] md:w-[340px] md:h-[340px] w-[340px] h-[340px] '>
              {/* hero image */}
                <img className='absolute z-[-8] xl:w-[460px] xl:h-[510px] object-cover object-center cursor-pointer  md:w-[400px] md:h-[400px] sm:w-[400px] sm:h-[400px] 
                 lg:h-[400px] lg:w-[400px] w-[400px] h-[400px] ' src={image} alt="photo " />
              
            </div>
      
        </div>
     
      <div className=" p-[10px] xl:flex xl:flex-row flex flex-col  md:flex sm:flex lg:flex md:flex-col sm:flex-col lg:flex-col mt-[200px] 
      xl:ml-[80px] ml-6">
        <div>
           <h1 className='love xl:text-4xl text-2xl xl:py-2  md:text-2xl lg:text-2xl sm:text-2xl  '>Hi My Name is <span className='text-[#22333b] dark:text-black'>Margie DevDreamer</span></h1>
            <p className='love_2 text-2xl xl:ml-[50px] ml-1'>I am a {displayText}</p>
           <a href="#about"><button className='love_3 cursor-pointer xl:px-16 xl:py-3 px-6 py-1 bg-black rounded-[10px]
             mt-6 xl:ml-[100px] text-[#eae0d5] text-2xl shadow-black shadow-sm hover:bg-[#22333b]  '>Learn More</button></a> 
        </div>
          {/* Icons */}
        <div className='xl:ml-[250px] cursor-pointer flex flex-row xl:flex xl:flex-col md:mt-[20px] sm:mt-[20px] lg:mt-[20px] mt-[20px]'>
            <div className='xl:mb-1 ml-3 sm:ml-3 lg:ml-3 md:ml-3'>
                 <a href="http://www.facebook.com" target='_blank'><FontAwesomeIcon icon={faFacebookSquare} size='2rem' className='text-[2rem] text-[#22333b]  dark:text-black
                  hover:text-black  dark:hover:text-gray-900'/></a> 
            </div>
           <div className='xl:mb-1 ml-3 sm:ml-3 md:ml-3 lg:ml-3'>
                <a href="http://wa.me.watsup.com" target='_blank'><FontAwesomeIcon icon={faWhatsapp} className=' text-[#22333b]  text-[2rem] hover:text-black
                 dark:text-black  dark:hover:text-gray-900'/></a>   
            </div>
            <div className='xl:mb-1 ml-3 sm:ml-3 lg:ml-3 md:ml-3'>
              <a href="http://www.google.com" target='_blank'><FontAwesomeIcon icon={faGoogle} className='text-[#22333b]  text-[2rem] hover:text-black
               dark:text-black  dark:hover:text-gray-900'/></a>
            </div>
           <div className='mb-1 ml-3 sm:ml-3 lg:ml-3'>
           <a href="http://www.instagram.com" target='_blank'> <FontAwesomeIcon icon={faInstagramSquare} className='text-[#22333b]  text-[2rem] hover:text-black
            dark:text-black  dark:hover:text-gray-900'/></a>
            </div>
            <div className='xl:mb-1 sm:ml-3 ml-3 md:ml-3 lg:ml-3'>
            <a href="http://www.x-twitter.com" target='_blank'>< FontAwesomeIcon icon={faXTwitter}   className='text-[#22333b]  text-[2rem] dark:text-black
             hover:text-black dark:hover:text-gray-900'/></a>
            </div>
      </div>
   
        
    </div>
    </div>
    </section>

  )
}

export default HeroSection
