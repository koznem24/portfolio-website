import "bootstrap/dist/css/bootstrap.min.css"
import Header from './components/Header'
import "./App.css";
import Particles from "react-particles-js";
import Project from "./components/Project";
import Contact from "./components/Contact";
function App() {
  return (
   <div>
     <Particles 
        className="particles-canvas"
        params={{
            particles:{
              number:{value:70, density:{enable:true, value_area : 900}},
              shape: {type:"circle", stroke:{width : 6, color:"#fff"}}
              
            }
        }} 
     />
      <Header/>
        <div className="row">
        <Project projectName = "Members" 
                 projectDescription="Web application to manage team members with Mysql database support (Backend - Spring framework, Frontend - React Js)"
                 imageSource = "/project-images/Members/Members.png"
                 gitSource="https://github.com/koznem24/Members"/>
      
        <Project projectName = "GNU Calculator" 
                 projectDescription="Basic Web-Calculator with GNU like interface written using ReactJS Library"
                 imageSource = "/project-images/GNUCalculator/GNUCalculator.png"
                 gitSource = "https://github.com/koznem24/Basic-GNU-Calculator-React-App"/>
      
        <Project projectName = "Members"
                 projectDescription="Web application to manage team members with mysql database support"
                 imageSource = "/project-images/Members/Members.png"/>
       
        <Project projectName = "Members"
                 projectDescription="Web application to manage team members with mysql database support"
                 imageSource = "/project-images/Members/Members.png"/>
        </div>
        <Contact/>
   </div>

  );
}

export default App;
