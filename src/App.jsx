import React from "react";
import NavBar from "./components/Navbar";
import ClientsReview from "./components/ClientsReview";
import HomePage from "./components/Home";
import Contactus from "./components/Contactus";
import ServicesPage from "./components/services/ServicesPage";
import Banner from "./components/Banner";

const App = () => {
  return (
    <div className="">
      <NavBar />
      <Banner />
      <ClientsReview />
      <ServicesPage />

      <Contactus />
    </div>
  );
};

export default App;
