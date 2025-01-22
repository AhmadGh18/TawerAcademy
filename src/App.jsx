import React from "react";
import NavBar from "./components/Navbar";
import ClientsReview from "./components/ClientsReview";
import HomePage from "./components/Home";
import Contactus from "./components/Contactus";
import ServicesPage from "./components/services/ServicesPage";

const App = () => {
  return (
    <div className="">
      <NavBar />
      <HomePage />
      <ClientsReview />
      <ServicesPage />

      <Contactus />
    </div>
  );
};

export default App;
