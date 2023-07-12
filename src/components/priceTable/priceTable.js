import React from "react";
import "./priceTable.css"
import Socialbar from "../navbar/socialBar"

function PriceTable() {
  return (
   
  <div className="container">
    <div className="price-container">
      
<h2 className="container-h2">PRICE LIST</h2>
<p className="price-description">The prices below all include the application of your chosen gem. Be sure to check out the socials for regular discounts and the latest deals! Fancy a different design? Billy would love to bring your idea to life, please drop her a message over on her Facebook or Instagram.</p>


<div className="price-row">
    <div className="p-crystal">
    <p className="price-col-p">X1 CRYSTAL</p>

        <ul className="price-col-ul">
            <li className="price-col-ul-li">CLASSIC</li>
            <li className="price">£30</li>

            <li  className="price-col-ul-li">COLOURED</li>
            <li className="price">£35</li>

            <li  className="price-col-ul-li">SHAPED</li>
            <li className="price">£40</li>

        </ul>
        
  
    </div>
    <div className="p-crystal2">
    <p className="price-col-p">X2 CRYSTALS</p>

        <ul className="price-col-ul">
            <li className="price-col-ul-li">CLASSIC</li>
            <li className="price">£45</li>

            <li  className="price-col-ul-li">COLOURED</li>
            <li className="price">£50</li>

            <li  className="price-col-ul-li">SHAPED</li>
            <li className="price">£75</li>

        </ul>
        
  
    </div>
    <div className="p-designs">
        <p className="price-col-p">DESIGNS</p>
        <ul className="price-col-ul">
            <li  className="price-col-ul-li">ARCH </li>
            <li className="price">£70</li>
            <li  className="price-col-ul-li">FRAME</li>
            <li className="price">£90</li>

            <li className="price-col-ul-li">BUTTERFLY</li>
            <li className="price">£100</li>

        </ul>
  
    </div>
    <div className="p-slay">
        <p className="price-col-p">SLAY</p>
        <ul className="price-col-ul">
            <li className="price-col-ul-li">FULL TOOTH</li>
            <li className="price">£120</li>

            <li className="price-col-ul-li">DIAMOND DUST</li>
            <li className="price">£150</li>

        </ul>
      
    </div>
    <div className="p-gold">
        <p className="price-col-p">GOLD</p>
        <ul className="price-col-ul">
            <li className="price-col-ul-li">22K GOLD</li>
            <li className="price">£140</li>

            <li className="price-col-ul-li">WHITE GOLD</li>
            <li className="price">£160</li>

        </ul>
      
    </div>

</div>

<div className="priceBooking"
          >
            <h3 className="priceBooking-h3">BOOK YOUR APPOINTMENT</h3>
            <p className="priceBooking-p">Dolla Dolla Bill Y'all takes bookings through Instagram and Facebook messages. Click these links below to be directed to the social media accounts.</p>
            <Socialbar/>
          </div>

    </div>
   


   
    </div>
  );
}

//exports the file to be used elsewhere
export default PriceTable;