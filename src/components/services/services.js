import React from "react";
import "./services.css";
import viewGalleryImg from "../../assets/pic7.jpg"
import map from "../../assets/map.jpg"
import { NavLink } from "react-router-dom";


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
           

      
           
          </div>

          <aside className="services-aside">
            <ul className="services-ul">
              <li className="location-li">Location</li>
            </ul>
            <h3>Hamilton House</h3>
            <div className="location-img" 
              style={{backgroundImage: `url(${map})`}}>
              
              </div>
              
          </aside>

          <div className="viewGallery"
          style={{ backgroundImage: `url(${viewGalleryImg})` }}>
            <h3 className="viewGallery-h3">Previous Projects</h3>
            <p className="viewGallery-p">Check out some of Billys latest creations over on the gallery page.</p>
            <NavLink
              to="/pricing"
              className="viewGalleryButton"
            >
              View Images
            </NavLink>
          </div>
        </div>
      </section>
  
    </main>
  );
}

//exports the file to be used elsewhere
export default Services;
