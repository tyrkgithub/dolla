// importing various folders/libraries to use here
import React from "react";
import HeroImg from "../../assets/pic25.jpg";
import "./hero.css";

//function that creates a hero element for the App
function Hero() {
  return (
  
    <div
      className="hero text-center"
      style={{ backgroundImage: `url(${HeroImg})` }}>
     
    </div>

    
  );
}

//exports the file to be used elsewhere
export default Hero;
