import React from "react";
import Typed from "react-typed";

const Header = () =>{
    return(
        <div className="header-wrapper">
            <div className="wrapper"> </div>
                <div className ="main-info">
                    <h1>Web development and websites promotions</h1>
                    <Typed  className = "typed-text" 
                            strings={["Core Java", "Spring boot", "Hibernate","Restful API"]}
                            typeSpeed={40}
                            backSpeed={60}
                            loop/>
                            <a href="#" className="btn-main-offer">Contact Me</a>
                </div>
                
        </div>
    );
}

export default Header;