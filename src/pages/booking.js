import React from "react";
import "../pages/pages.css";
import Services from "../components/services/services";
import Events from "../components/events/events";
import Faqs from "../components/faqs/faqs";

function Booking() {
  return (
    <section className="body-section">
    <Services />
    <Events/>
    <Faqs/>

    </section>
  );
}

export default Booking;