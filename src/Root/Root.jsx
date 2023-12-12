import About from "../Componands/About/About";
import Education from "../Componands/Education/Education";
import Footer from "../Componands/Footer/Footer";
import Intro from "../Componands/Intro/Intro";
import Projects from "../Componands/Projects/Projects";
import Skills from "../Componands/Skills/Skills";
import Contact from "../Contact/Contact";
import Navbar from "../Navbar/Navbar";
 
 
  
 const Root = () => {
    return ( 
        <div className="font-OpenSans">

            <Navbar></Navbar>
              <Intro></Intro>
              <About></About>
              <Skills></Skills>
              <Education></Education>
              <Projects></Projects>
              <Contact></Contact>
              <Footer></Footer>
        </div>
    );
 };
 
 export default Root;