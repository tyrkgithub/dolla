// importing various folders/libraries to use here
import React from "react";
import "./logoHero.css";
import BelowHero from "../belowHero/belowHero";
import GalleryDiv1 from "../gallery/galleryDiv1";
import GalleryDiv2 from "../gallery/galleryDiv2";

//function that creates a hero element for the App
function LogoHero() {
  return (
    <div>
  
    <GalleryDiv1/>
    <BelowHero />
    <GalleryDiv2/>

   


    </div>
  );
}

//exports the file to be used elsewhere
export default LogoHero;
