// importing various folders/libraries to use here
import React from "react";
import "./events.css";
import eventsImg from "../../assets/party1.jpg"
import SocialBar from "../navbar/socialBar";


//function that creates a footer element for the App
function Events() {
  return (
    <div className="events-grid">
      <div className="events-gridArea">
        <div className="events">
          <h3 className="events-h3">EVENT BOOKING</h3>
          <ul className="events-ul">
            <li className="events-li">
              WEDDING
            </li>
            <li className="events-li">
              FESTIVAL
            </li>
            <li className="events-li">
              HEN / STAG
            </li>
            <li className="events-li">
              CORPORATE
            </li>
            <li className="events-li">
              BIRTHDAY
            </li>
            <li className="events-li">
              ENGAGEMENT
            </li>
            <li className="events-li">
              CLUB NIGHT
            </li>
          </ul>

<p className="events-p">Looking to add a sparkle at your next party? To disucss event booking please contact Billy on Instagram or Facebook.</p>
<SocialBar/>


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
