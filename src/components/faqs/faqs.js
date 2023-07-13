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
          <p className="faqs-a">Billy is a fully qualifed and insured technecian with over 2 years experience of tooth gem application. The gems cause no harm to the teeth or gums and are completely safe if accidently eaten. </p>
        </li>
        <li className="faqs-li">
          <p className="faqs-q">HOW LONG WILL THE GEM STAY?</p>
          <p className="faqs-a">The gems can last over a year and most will usually last for 6 months. In the unlikely event that the gem comes off witin the first 4 weeks you are covered by Billys 1 month grace period. This means that she would fit a replacement for free *This excludes crystal dust and gold*. </p>
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
          <p className="faqs-q">IS THE LOCATION ACCESSIBLE?</p>
          <p className="faqs-a">The studio is not on the ground floor but Hamilton House has 2 lifts. Billy is happy to discuss accessibility with you please don't hesitate to get in touch. </p>
        </li>
      </ul>
    
    </div>
  );
}
//exports the file to be used elsewhere
export default Faqs;
