// importing various folders/libraries to use here
import React from "react";
import HeroImg from "../../assets/logoNameClear.png";
import "./hero.css";
import BelowHero from "../belowHero/belowHero";

//function that creates a hero element for the App
function Hero() {
  return (
    <div>
    <div
      className="hero text-center"
      style={{ backgroundImage: `url(${HeroImg})` }}>
     
    </div>
    <BelowHero />
    </div>
  );
}

//exports the file to be used elsewhere
export default Hero;
