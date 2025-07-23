import Header from "./header"
import About from "./About"
import Portofolio from "./Portofolio"
import Contact from "./Contact"
import HeroSection from "./heroSection"
import Footer from "./footer"
// import { BrowserRouter as  Router, Route, Switch  } from "react-router-dom";
function App() {

  return (
 
     <div className=" light:bg-[#9db4c0] bg-[#9db4c0]  light:transition-all  text-black light:text-black light:ease-in light:duration-300   font-medium opacity-[0.9] 
      xl:dark:bg-[#212529] xl:dark:text-black dark:transition-all  
     dark:duration-1000 dark:ease-out " > 
     <Header/>
    <HeroSection/>
    <About/>
    <Portofolio/>
    <Contact/>
    <Footer/>

     </div>
  
   
  )
}

export default App
