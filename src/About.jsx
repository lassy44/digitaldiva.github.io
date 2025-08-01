import React from 'react'
import cvFile from "./assets/CIRRICULUM VITAE.pdf"
// about me section
const About = () => {
  const skills = [
    { name: 'Communication', percentage: 90 },
    { name: 'Team work', percentage: 75 },
    { name: 'Problem Solving', percentage: 95 },
    // { name: 'Creativity', percentage: 85 },
  ];



  //downloading CV  function
  const handleDownload =()=>{
    const link = document.createElement("a")
    link.href = cvFile;
    link.download = "my Cv"
    link.click()
  }



  return (
    // About Me section
    <div className=' xl:pt-20 md:pt-10 lg:pt-10 sm:pt-10 pt-10  xl:mt-40 ' id='about'>
     <h1 className='xl:text-4xl text-3xl uppercase justify-center text-center hover:text-[#22333b]'>About Me</h1>
      <div className='xl:flex xl:flex-row md:flex-col sm:flex-col lg:flex-col flex flex-col '>
             
      <div className='xl:w-[500px] xl:h-[500px] border-grey xl:border-[30px]  border-[10px] rounded-[10px] mt-10 cursor-pointer w-[300px] h-[370px] 
      xl:hover:-translate-y-2 xl:transition-transform  ml-8
      md:w-[450px] md:h-[450px]   sm:w-[300px] sm:h-[370px] lg:w-[450px] lg:h-[250px] md:hover:-translate-y-2 md:transition-transform md:duration-300' >
        <img src="src\assets\image _4.jpg" alt="image" className='xl:w-[500px] xl:h-[450px] object-cover object-center opacity-[0.7]  md:w-[450px] md:h-[430px]
         sm:w-[300px] sm:h-[300px]  lg:w-[450px] lg:h-[430px] w-[350px] h-[350px] '/>
      </div> 
      <div className='mt-[100px] xl:ml-[80px] text-[18px]   ml-8 '>
        <h2>My name is <span className='text-[#22333b] text-2xl'>Margie DevDreamer</span> , l am a skilled web developer though am still a student at libra vocational and business institute . </h2>
        <p>My passion lies in creating and developing web applications.</p> 
        <p>I do believe that computer programming is not all about writting code but rather finding solutions
           to the problems people are facing in the real world.</p>
        <p>Despite l being a lady, l believe l can  create a change to my MotherLand through developing
           solutions  to uganda's challenges in various sectors like Agri-Sector.</p>
       <p> I  also have a vision and a dream of creating an AI that can solve the world`s problems in fews years to come.
         <br /> Kindly contact  me on 0763424261 / 0700871187</p>
         <p>I can speak various programming languages like React , PHP, python , Javascript, html ,Css and Tailwind css </p>
       <button className='py-4 px-5 mt-6 bg-blue-600 rounded-md' onClick={handleDownload}>Download C.V</button>
        
   
       </div>
       
      </div>
      {/* Skill section */}
      <section  className='pt-8'>
        <h2 className='xl:text-4xl text-3xl text-[#22333b] text-center p-2 uppercase  dark:text-black'> Skills</h2>
      <div className='xl:flex xl:flex-row md:flex md:flex-row sm:flex-col  lg:flex lg:flex-row'>
        <div className='flex flex-col  ml-8'>
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
         {/*Professional Skills section  */}
  <div className='xl:ml-[400px] p-2 mt-2 md:ml-[10px] z-[-1]'>
     <section className="text-center md:p-12 md:ml-2">
      <h2 className="xl:text-3xl  md:text-2xl text-2xl  sm:text-2xl font-bold mb-8">Professional Skills</h2>
      <div className="flex flex-wrap justify-center">
        {skills.map((skill) => (
          <div key={skill.name} className="m-4 flex flex-col items-center">
            <div className="relative">
              <svg width="100" height="100" viewBox="0 0 120 120">
                <circle
                  cx="60"
                  cy="60"
                  r="54"
                  className="stroke-gray-300 stroke-[12] fill-none"
                />
                <circle
                  cx="60"
                  cy="60"
                  r="54"
                  className="stroke-green-500 stroke-[12] fill-none"
                  strokeDasharray="339.292"
                  strokeDashoffset={`${339.292 - (339.292 * skill.percentage) / 100}`}
                  transform="rotate(-90 60 60)"
                />
              </svg>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl font-bold">
                {skill.percentage}%
              </div>
            </div>
            <p className="text-lg mt-2">{skill.name}</p>
          </div>
        ))}
      </div>
      </section>
      
        </div>
     
        
        </div>
      </section>
    
    </div>
  )
}

export default About
