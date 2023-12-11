import Intro from "../Componands/Intro/Intro";
import Navbar from "../Navbar/Navbar";
 
 
  
 const Root = () => {
    return ( 
        <div className="font-OpenSans">

            <Navbar></Navbar>
              <Intro></Intro>
        </div>
    );
 };
 
 export default Root;