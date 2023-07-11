// importing various folders/libraries to use here
import React from "react";
import "./events.css";
import eventsImg from "../../assets/party1.jpg"


//function that creates a footer element for the App
function Events() {
  return (
    <div className="events-grid">
      <div className="events-gridArea">
        <div className="events">
          <h3 className="events-h3">EVENT BOOKING</h3>
          <p className="events-p"><p className="price-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
</p>
<h5 className="events-h5">To disucss event booking please contact Billy over on her socials</h5>


        </div>
        <div className="events-img-pdiv">
        <div className="events-img"
        style={{ backgroundImage: `url(${eventsImg})` }}>

        </div>
        </div>
      </div>
    
   
    </div>
  );
}
//exports the file to be used elsewhere
export default Events;
