import React from "react";
import NavBar from "./components/Navbar";
import ClientsReview from "./components/ClientsReview";
import HomePage from "./components/Home";
import Contactus from "./components/Contactus";
import ServicesPage from "./components/services/ServicesPage";
import Banner from "./components/Banner";
import TestHome from "./components/TestHome";
import AboutUs from "./components/services/Aboutus";
import WhyUs from "./components/WhyUs";
import Mentors from "./components/Mentors";
import Home2 from "./components/Home2";

const App = () => {
  return (
    <div className="font-body">
      <Home2 />
      {/* <NavBar />

      <Banner />
      <WhyUs />
      <ServicesPage />
      <ClientsReview />

      <AboutUs />
      <Mentors />
      <Contactus /> */}
    </div>
  );
};

export default App;
