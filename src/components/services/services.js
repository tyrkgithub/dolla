import React from "react";
import "./services.css";
import viewGalleryImg from "../../assets/pic7.jpg"
import map from "../../assets/map.jpg"
import { NavLink } from "react-router-dom";
import SocialBar from "../navbar/socialBar";
import { Link } from "react-router-dom";


//function that creates a hero element for the App
function Services() {
  return (
    <main className="main">
      <section className="services-grid">
        <div className="services-gridArea">
          <div className="services">
            <h1 className="services-h1">Opening Times and Bookings</h1>
            <p classname="services-p">
              For bookings, opening times and further inquiries please contact Billy-Jo over on Instagram or Facebook. Follow Dolla Dolla Bill Y'all socials to keep up to date with this weeks deals and available booking times.
            </p>
            <SocialBar/>
       
           
          </div>

          <aside className="services-aside">
            <ul className="services-ul">
              <li className="location-li">Location</li>
            </ul>
            <h3 className="location-h3">4B10 Hamilton House</h3>
            <h4 className="location-h4">80 Stokes Croft, St Paul's, Bristol BS1 3QY</h4>
            <div className="location-img" 
              style={{backgroundImage: `url(${map})`}}>
              
              </div>

              <Link
              to="https://goo.gl/maps/8Q5mHMo58DGiFz176"
              className="viewGalleryButton"
            >
              View On Google Maps
            </Link>
              
              
          </aside>

          <div className="viewGallery"
          style={{ backgroundImage: `url(${viewGalleryImg})` }}>
            <h3 className="viewGallery-h3">Gem Options</h3>
            <p className="viewGallery-p">Check out some of the gems available for application over on the Pricing page.</p>
            <NavLink
              to="/pricing"
              className="viewGalleryButton"
            >
              View Gems
            </NavLink>
          </div>
        </div>
      </section>
  
    </main>
  );
}

//exports the file to be used elsewhere
export default Services;
