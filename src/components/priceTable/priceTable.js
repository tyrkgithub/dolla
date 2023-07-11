import React from "react";
import "./priceTable.css"

function PriceTable() {
  return (
   
  <div className="container">
    <div className="price-container">
<h2 className="container-h2">PRICE LIST</h2>
<p className="price-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>


<div className="price-row">
    <div className="price-col">
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
    <div className="price-col">
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
    <div className="price-col">
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
    <div className="price-col">
        <p className="price-col-p">SLAY</p>
        <ul className="price-col-ul">
            <li className="price-col-ul-li">FULL TOOTH</li>
            <li className="price">£120</li>

            <li className="price-col-ul-li">DIAMOND DUST</li>
            <li className="price">£150</li>

        </ul>
      
    </div>
    <div className="price-col">
        <p className="price-col-p">GOLD</p>
        <ul className="price-col-ul">
            <li className="price-col-ul-li">22K GOLD</li>
            <li className="price">£140</li>

            <li className="price-col-ul-li">WHITE GOLD</li>
            <li className="price">£160</li>

        </ul>
      
    </div>

</div>



    </div>
    </div>
  );
}

//exports the file to be used elsewhere
export default PriceTable;