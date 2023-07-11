import React from "react";
import "../pages/pages.css";
import PriceTable from "../components/priceTable/priceTable";
import OptionDiv1 from "../components/gallery/optionDiv1";
import OptionDiv2 from "../components/gallery/optionDiv2";

function Pricing() {
  return (
    <section className="body-section">
      <PriceTable/>
      <OptionDiv1/>
      <OptionDiv2/>

    
    </section>
  );
}

export default Pricing;