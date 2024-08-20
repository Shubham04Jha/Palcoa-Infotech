import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

function About() {
  return (
    <div className="flex flex-col  min-h-screen">
      <Header />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default About;
