import React from 'react'
import  { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import{faBars} from'@fortawesome/free-solid-svg-icons'
import{faToggleOn} from'@fortawesome/free-solid-svg-icons'
import { faXmark} from '@fortawesome/free-solid-svg-icons';
// hambegeur menu toggling
const Header = () => {
const [isOpen , setisOpen] = useState(false)
const toggleMenu = ()=>{
  setisOpen(!isOpen)
}

// theme switching
if (localStorage.getItem('theme') === 'dark') {
   document.documentElement.classList.add('dark');
}else{
   document.documentElement.classList.add('light');
}

// Toggle and save preference
const toggleDarkMode = () => {
  const isDark = document.documentElement.classList.toggle('dark');
  localStorage.setItem('theme', isDark ? 'light' : 'dark');
};
  return (   
    // header section
    <header className='dark:bg:black'>           
                                                    
        <nav className=' w-full xl:flex  left-0 justify-between   text-center xl:dark:bg-[#212529] xl:dark:text-white
         bg-[#f6f9fa] opacity-[0.9] p-[8px] font-medium shadow-box dark:shadow-box_2 fixed top-0 ' >
             <div>
                <h1 className='xl:text-4xl text-3xl xl:text-black  md:mr-[600px] mr-[400px] xl:r-0   dark:text-white'>Margie</h1>
              </div>
              {/* larger screen nav links */}
            <ul className ="xl:grid hidden text-2xl p-[3px] cursor-pointer  xl:grid-cols-5 ">
                <li  className="m-2 text-black  hover:text-gray-800 pointer hover:transition-colors  dark:text-white"><a href="#" >Home</a> </li>
                <li className="m-2 text-black   hover:text-gray-800 pointer hover:transition-colors  dark:text-white" ><a href="#about" > About</a></li>
                <li className="m-2 text-black   hover:text-gray-800 pointer hover:transition-colors  dark:text-white"><a href="#portofolio" >Portofolio</a> </li>
                <li className="mt-2 text-black   hover:text-gray-800 pointer hover:transition-colors  dark:text-white" ><a href="#contact" >Contact</a></li>
                <FontAwesomeIcon icon={faToggleOn} onClick={toggleDarkMode}  
                className='text-4xl mt-2  ml-10 md:block hidden   dark:bg-[#212529] text-black '/>

            </ul>
            {/* nav links for smaller screens  */}
            {isOpen && (
            <ul className='xl:hidden text-center md:flex lg:flex lg:flex-col flex md:flex-col flex-col text-2xl
             relative transition-all  duration-1000 ease-in-out'>
            <li  className="m-1 text-black  hover:text-gray-800 pointer  "><a href="#" >Home</a> </li>
                <li className="m-1 text-black   hover:text-gray-800 pointer"><a href="#about" > About</a></li>
                <li className="m-1 text-black   hover:text-gray-800 pointer "><a href="#portofolio" >Portofolio</a> </li>
                <li className="m-1 text-black   hover:text-gray-800 pointer  " ><a href="#contact" >Contact</a></li>
    
            </ul>
            )}
            {/* hambeguer btns */}
            <div className='xl:mt-3 xl:hidden flex absolute top-0 md:left-[700px]  left-[350px] '>
              { isOpen ?  (<FontAwesomeIcon icon={faXmark}   className='text-[40px]  transition-all  duration-300 ease-in'
               onClick={toggleMenu}/>):(<FontAwesomeIcon icon={faBars}  className='text-4xl  transition-all  duration-300 ease-out' onClick={toggleMenu}/>)}   
            </div> 
            
        </nav>
       
    </header>
    
  )
}

export default Header
