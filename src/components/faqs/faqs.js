// importing various folders/libraries to use here
import React from "react";
import "./faqs.css";


//function that creates a footer element for the App
function Faqs() {
  return (
    <div className="faqs-div">
      <h3 className="faqs-h3">FAQS</h3>
      <p className="faqs-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt </p>
      <ul className="faqs-ul">
        <li className="faqs-li">
          <p className="faqs-q">Lorem ipsum dolor sit amet?</p>
          <p className="faqs-a">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </li>
        <li className="faqs-li">
          <p className="faqs-q">Lorem ipsum dolor sit amet?</p>
          <p className="faqs-a">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </li>
        <li className="faqs-li">
          <p className="faqs-q">Lorem ipsum dolor sit amet?</p>
          <p className="faqs-a">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </li>
        <li className="faqs-li">
          <p className="faqs-q">Lorem ipsum dolor sit amet?</p>
          <p className="faqs-a">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </li>
        <li className="faqs-li">
          <p className="faqs-q">Lorem ipsum dolor sit amet?</p>
          <p className="faqs-a">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </li>
      </ul>
    
    </div>
  );
}
//exports the file to be used elsewhere
export default Faqs;
