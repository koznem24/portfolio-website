import React from "react";
import Typed from "react-typed";
import Navbar from "./Navbar"

const Header = () =>{
    return(
        <div className="header-wrapper">
            
            <div className="wrapper"> </div>
            <Navbar/>
                <div className ="main-info">
                    <h1>I'm Nematullo</h1>
                    <h1>These are my technical skills:</h1>
                    <Typed  className = "typed-text" 
                            strings={["Java", "Spring-boot","Spring Web","Spring Data", "Hibernate","Thymeleaf","JavaFX","HTML, CSS, Javascript","React Js", "And more..."]}
                            typeSpeed={60}
                            backSpeed={60}
                            loop/>
                            <a href="#Contact" className="btn-main-offer">Contact Me</a>
                </div>
        </div>
    );
}

export default Header;