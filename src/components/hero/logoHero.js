// importing various folders/libraries to use here
import React from "react";
import HeroImg from "../../assets/logoNameClear.png";
import "./logoHero.css";
import BelowHero from "../belowHero/belowHero";
import GalleryDiv1 from "../gallery/galleryDiv1";

//function that creates a hero element for the App
function LogoHero() {
  return (
    <div>
  
    <GalleryDiv1/>
    <BelowHero />
    </div>
  );
}

//exports the file to be used elsewhere
export default LogoHero;
