// importing various folders/libraries to use here
import React from "react";
import "./belowHero.css";
import { NavLink } from "react-router-dom";

//function that creates a hero element for the App
function BelowHero() {
  return (
    <div>
    <div className="belowHero text-center">
      <h2 className="belowHero h2">FOR A SMILE THAT SHINES AS BRIGHT AS YOU</h2>
    </div>
    <div className="belowBelow">
      <h3 className="belowLocation">
       LOCATIONS
      </h3>
      <div className="locationUlDiv">
        <ul className="loactionUl">
<li>
        <NavLink
              to="/booking"
              className="location"
            >
              HAMILTON HOUSE - BRISTOL
            </NavLink>
            </li>
      
         
       
        
          
        </ul>
        
      </div>

    </div>
  
    </div>
    
  );
}

//exports the file to be used elsewhere
export default BelowHero;
