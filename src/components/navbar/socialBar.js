import React from "react";
import { SocialIcon } from 'react-social-icons';
import "./socialBar.css"



function SocialBar() {
    return (
<div className="socials">
<ul className="socials-ul">
        <li className="socials-li">
        <h3 className="socials-h3">Instagram  <SocialIcon url="https://www.instagram.com/dolladollabill_yalll/"></SocialIcon>
         </h3>
          </li>

          <li className="socials-li">
          <h3 className="socials-h3">Facebook  <SocialIcon url="https://www.facebook.com/profile.php?id=100083532782159"></SocialIcon>
     </h3>
         
      
          </li>
        
      </ul>
</div>

);
}
export default SocialBar;