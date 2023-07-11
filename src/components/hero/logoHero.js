// importing various folders/libraries to use here
import React from "react";
import "./logoHero.css";
import BelowHero from "../belowHero/belowHero";
import GalleryDiv1 from "../gallery/galleryDiv1";
import GalleryDiv2 from "../gallery/galleryDiv2";
import Socialbar from "../navbar/socialBar"

//function that creates a hero element for the App
function LogoHero() {
  return (
    <div>
  
    <GalleryDiv1/>
    <BelowHero />
    <GalleryDiv2/>
    <div className="sleep">
    <div className="priceBooking"
          >
            <h3 className="priceBooking-h3">BOOK YOUR APPOINTMENT</h3>
            <p className="priceBooking-p">Dolla Dolla Bill Y'all takes bookings through Instagram and Facebook messages. Click these links below to be directed to the social media accounts.</p>
            <Socialbar/>
          </div>
          </div>

   


    </div>
  );
}

//exports the file to be used elsewhere
export default LogoHero;
