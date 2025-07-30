import React from 'react'

const About = () => {
  return (
    // About Me section
    <div className=' p-[70px] xl:mt-[200px] mt-[50px] ' id='about'>
     <h1 className='xl:text-4xl text-3xl uppercase justify-center text-center hover:text-[#22333b]'>About Me</h1>
      <div className='xl:flex xl:flex-row md:flex-col sm:flex-col lg:flex-col flex flex-col '>
             
      <div className='xl:w-[500px] xl:h-[500px] border-grey xl:border-[30px]  border-[10px] rounded-[10px] mt-10 cursor-pointer w-[300px] h-[370px] xl:hover:-translate-y-2 xl:transition-transform
      md:w-[450px] md:h-[450px]   sm:w-[300px] sm:h-[370px] lg:w-[450px] lg:h-[250px] md:hover:-translate-y-2 md:transition-transform md:duration-300' >
        <img src="src\assets\image _4.jpg" alt="image" className='xl:w-[500px] xl:h-[450px] object-cover object-center opacity-[0.7]  md:w-[450px] md:h-[430px]
         sm:w-[300px] sm:h-[300px]  lg:w-[450px] lg:h-[430px] w-[350px] h-[350px] '/>
      </div> 
      <div className='mt-[100px] xl:ml-[80px] text-[18px] ml-2  '>
        <h2>My name is <span className='text-[#22333b] text-2xl'>Margie DevDreamer</span> , l am a skilled web developer though am still a student at libra vocational and business institute . </h2>
        <p>My passion lies in creating and developing web applications.</p> 
        <p>I do believe that computer programming is not all about writting code but rather finding solutions
           to the problems people are facing in the real world.</p>
        <p>Despite l being a lady, l believe l can  create a change to my MotherLand through developing
           solutions  to uganda's challenges in various sectors like Agri-Sector.</p>
       <p> I  also have a vision and a dream of creating an AI that can solve the world`s problems in fews to come.
         <br /> Kindly contact  me on 0763424261 / 0700871187</p>
         <p>I can speak various programming languages like React , PHP, python , Javascript, html ,Css and Tailwind css </p>
        <a href="./assets/CIRRICULUM VITAE.pdf" target='_blank' download="CIRRICULUM VITAE.pdf" ><button className='py-4 px-5 mt-6 bg-blue-600 rounded-md'>Download C.V</button></a> 
        
   
       </div>
       
      </div>
      {/* Skill section */}
      <section  className='pt-8'>
        <h2 className='xl:text-4xl text-3xl text-[#22333b] text-center p-2 uppercase  dark:text-black'> Skills</h2>
      <div className='xl:flex xl:flex-row md:flex md:flex-row sm:flex-col  lg:flex lg:flex-row'>
        <div className='flex flex-col'>
          <h1 className='xl:text-3xl  text-2xl p-6'>Technical skills</h1>
          <div>
            <h2>Javascript <span className='xl:ml-[300px]'>80%</span></h2>
                <input type="range" name="range" id="" className='xl:w-[400px] w-[200px]' />
                
          </div>
          <div>
            <h2>React  <span className='xl:ml-[300px]'>50%</span></h2>
              <input type="range" name="range" id="" className='xl:w-[400px] w-[200px]' value="50%" />
          </div>
          <div>
            <h2>Python <span className='xl:ml-[300px]'>70%</span></h2>
               <input type="range" name="range" id="" className='xl:w-[400px] w-[200px]' value="70%"/>
          </div>
          <div>
            <h2>HTML  <span className='xl:ml-[300px]'>95%</span></h2>
          <input type="range" name="range" id="" className='xl:w-[400px] w-[200px]' value="95%"/>
          </div>
          <div>
            <h2>Tailwind Css <span className='xl:ml-[280px]'>50%</span></h2>
          <input type="range" name="range" id="" className='xl:w-[400px] w-[200px]' />
          </div>
          <div>
            <h2>PHP  <span className='xl:ml-[300px]'>70%</span></h2>
          <input type="range" name="range" id="" className='xl:w-[400px] w-[200px] ' value="70%"/>
          </div>
        </div>
        <div className='xl:ml-[400px] p-2 mt-24 md:ml-[100px]'>
              <h2 className='xl:text-3xl p-2 text-2xl underline underline-offset-8 xl:text-gray-800 xl:dark:text-black'>Proffessional Skills</h2>
              <div className='ml-5 text-2xl'>
               <p>Communication skills</p>
                <p>Problem Solving skills</p>
               <p>Team work</p>
                <p>Creavity</p>
              </div>
              
        </div>
     
        
        </div>
      </section>
    
    </div>
  )
}

export default About
