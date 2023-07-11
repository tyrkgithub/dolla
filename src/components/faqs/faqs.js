// importing various folders/libraries to use here
import React from "react";
import "./faqs.css";


//function that creates a footer element for the App
function Faqs() {
  return (
    <div className="faqs-div">
      <h3 className="faqs-h3">FAQS</h3>
      <p className="faqs-p">Here are some Frequently Asked Questions. Can't find the answer you are looking for? Billy is happy to help over on Instagram or Facebook! </p>
      <ul className="faqs-ul">
        <li className="faqs-li">
          <p className="faqs-q">IS IT SAFE?</p>
          <p className="faqs-a">Billy is a fully qualifed and insured technecian with over 2 years experience of tooth gem application. The gems cause no harm on the off chance that one is accidently eaten. </p>
        </li>
        <li className="faqs-li">
          <p className="faqs-q">HOW LONG WILL THE GEM STAY?</p>
          <p className="faqs-a">The gems can last over a year and most will usually last for .......... All gems come with a grace period of .......... meaning  </p>
        </li>
        <li className="faqs-li">
          <p className="faqs-q">WHAT TIMES AND DATES ARE AVAILABLE?</p>
          <p className="faqs-a">Billy usually works one or two evenings per week. Check out the socials to see when her next available appointments are.</p>
        </li>
        <li className="faqs-li">
          <p className="faqs-q">HOW DO I BOOK?</p>
          <p className="faqs-a">Bookings are taken through Instagram and Facebook messages. Please note - a deposit is required at the time of booking. </p>
        </li>
        <li className="faqs-li">
          <p className="faqs-q">IS THE LOCATION ACCESSABLE?</p>
          <p className="faqs-a">...............................................</p>
        </li>
      </ul>
    
    </div>
  );
}
//exports the file to be used elsewhere
export default Faqs;
