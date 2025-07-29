import React from 'react'
import clock from 'D:\\me _port\\my-project\\src\\assets\\clock.png'
import login from 'D:\\me _port\\my-project\\src\\assets\\logon.png'
import todo from 'D:\\me _port\\my-project\\src\\assets\\todo.png'
import weather from 'D:\\me _port\\my-project\\src\\assets\\weather.png'


//portofolio section

const Portofolio = () => {
  return (
    <div className='mt-[100px] p-2  z-10' id='portofolio' >
        <h1 className='text-center uppercase xl:text-4xl text-3xl  dark:text-black pb-10'>Portofolio</h1>
        {/* projectscd */}
        <div className='xl:flex xl:flex-row flex-col sm:flex-col md:grid md:grid-cols-2'>
          <div className='m-2  cursor-pointer rounded-md  shadow-box justify-center text-center xl:w-[470px] xl:h-[420px] transition-transform duration-300  hover:bg-[#a393bf]
hover:-translate-y-2 '>
             <img src={weather} alt="images" className='w-full h-[300px] rounded-md ' />
             <div>
             <h1>Weather App</h1>
             <p>The App was developed using HTML,CSS and Javascript. It allows users to enter their desired city and it displayes the weather
               of that city
               <a href='https://margieweathersite.netlify.app' target='_blank' className='text-blue-800'> Link: margieweathersite.netlify.app</a>
              </p>
             </div>
          </div>
    <div className='m-2 rounded-md  shadow-box justify-center text-center xl:w-[470px] xl:h-[420px] md:hover:-translate-y-2 md:transition-transform 
    md:duration-300 cursor-pointer 
    hover:bg-[#9589aa]'>
    <img src ={clock}alt="images" className='xl:w-[500px] xl:h-[300px] w-[300px] h:[300px] rounded-md bg' />
    <div>
      <h1>Real Clock</h1>
      <p>Its a real world clock developed using Css, Js and HTML. It displayes the current time</p>
      <a href='https://margieclock.netlify.app' target='_blank' className='text-blue-800'> Link: margieclock.netlify.app</a>
    </div>

    </div>
       
      <div className='xl:m-2  m-4 rounded-md  shadow-box justify-center text-center xl:w-[470px] xl:h-[420px] md:hover:-translate-y-2 md:transition-transform
       duration-300  cursor-pointer  hover:bg-[#a393bf]'>
          <img src={todo} alt="images" className='xl:w-[500px] xl:h-[300px]  w-300px h-300px rounded-md'/>
          <div>
            <h1 className='text-2xl'>Todo List</h1>
            <p>This App allows users to add and delete their desired tasks. Developed using HTML,CSS and Javascript  ,<a href="http://margietodo.netlify.app" target='_blank' 
            className='text-blue-800'>Link : margietodo.netlify.app</a> </p>
           
          </div>
      </div>
       <div className='m-2 rounded-md  shadow-box justify-center text-center xl:w-[470px] xl:h-[420px] md:hover:-translate-y-2 md:transition-transform 
       md:duration-300 cursor-pointer  hover:bg-[#a393bf]'>
        <div>
           <img src={login} alt="images" className='xl:w-[500px] xl:h-[300px]  w-[300px] h-[300px] rounded-md '/>
           <div>
            <h1>Complete login page</h1>
            <p>Its a complete form with a login page , sign up and home page. It allows users to sign up incase there are not in the database else logining in to the home page</p>
          </div>
           </div>
       </div>
      
        </div>

      
    </div>
  )
}

export default Portofolio

