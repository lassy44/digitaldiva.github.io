import React from 'react'
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <footer className='bg-black text-white p-8 justify-center text-center '>
    <div>
        <p className='text-2xl'>&copy; margie devdreamer limited</p>
        <div>
            <ul className =" cursor-pointer xl:flex xl:flex-row flex  flex-col justify-center p-2 text-2xl">
                <li><a  className="m-2 text-white  hover:text-gray-900 pointer " href="" >Home</a></li>
                <li><a   className="m-2 text-white  hover:text-gray-900 pointer" href="">About</a></li>
                <li><a  className="m-2 text-white   hover:text-gray-900 pointer" href="">Portofolio</a></li>
                <li><a  className="m-2 text-white   hover:text-gray-900 pointer" href="">Contact</a></li>
            </ul>
    
        </div>
        <div className=' cursor-pointer flex justify-center text-center'>
            <div className='m-2 '>
                 <a href="http://wwww.facebook.com" target='_blank'> < FontAwesomeIcon icon={faFacebookSquare}  size='2rem' className='text-[2rem] text-[#22333b]
                  hover:text-zinc-300'/></a>
            </div>
           <div className='m-2'>
                <a href="http://wa.me.watsup.com" target='_blank'><FontAwesomeIcon icon={faWhatsapp} className=' text-[#22333b]  text-[2rem] hover:text-zinc-300'/> </a>   
            </div>
            <div className='m-2'>
            
           <a href="http://www.google.com" target='_blank'><FontAwesomeIcon  icon={faGoogle} className='text-[#22333b]  text-[2rem] hover:text-zinc-300'/></a>
            </div>
           <div className='m-2'>
            <a href="http://www.instagram.com" target='_blank'><FontAwesomeIcon icon={faInstagramSquare}  className='text-[#22333b]  text-[2rem] hover:text-zinc-300'/></a>
            </div>
            <div className='m-2'>
           <a href="http://www.x-twitter.com" target='_blank'> <FontAwesomeIcon icon={faXTwitter}  className='text-[#22333b]  text-[2rem]
            hover:text-zinc-300'/></a>
            </div>
      </div>
    </div>
    </footer>
  )
}

export default Footer