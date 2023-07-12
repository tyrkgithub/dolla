import React from "react";
import { SocialIcon } from "react-social-icons";
import "./socialBar.css";
import { Link } from "react-router-dom";

function SocialBar() {
  return (
    <div className="socials">
      <ul className="socials-ul">
        <li className="socials-li">
          <Link
            to="https://www.instagram.com/dolladollabill_yalll"
            className="socials-h3"
          >
            Instagram{" "}
            </Link>
            <Link to="https://www.instagram.com/dolladollabill_yalll"
          className="socials-icon">
          
            <SocialIcon url="https://www.instagram.com/dolladollabill_yalll/"></SocialIcon>
          </Link>
        </li>
       
        <li className="socials-li">
          <Link
            to="https://www.facebook.com/profile.php?id=100083532782159"
            className="socials-h3"
          >
            Facebook{" "}
            </Link>

<Link
            to="https://www.facebook.com/profile.php?id=100083532782159"
            className="socials-icon"
          >
            <SocialIcon url="https://www.facebook.com/profile.php?id=100083532782159"></SocialIcon>
          </Link>
        </li>
      </ul>
    </div>
  );
}
export default SocialBar;
