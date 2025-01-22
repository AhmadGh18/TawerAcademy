import React from "react";
import NavBar from "./components/Navbar";
import Contactus from "./components/ContactUs";
import ClientsReview from "./components/ClientsReview";
import HomePage from "./components/Home";

const App = () => {
  return (
    <div className="">
      <NavBar />
      <HomePage></HomePage>
      <ClientsReview />
      <Contactus />
      
    </div>
  );
};

export default App;
