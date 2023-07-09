import React from "react";
import "../pages/pages.css";
import LogoHero from "../components/hero/logoHero";
import Hero from "../components/hero/hero";
import Tagline from "../components/tagline/tagline";

function Home() {
  return (
    <section className="body-section">
      <Hero/>
      <Tagline/>
    <LogoHero />
    </section>
  );
}

export default Home;