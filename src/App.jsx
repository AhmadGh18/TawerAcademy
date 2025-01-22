import React from "react";
import NavBar from "./components/Navbar";
import Banner from "./components/Banner";
import Contactus from "./components/ContactUs";
import ClientsReview from "./components/ClientsReview";

const App = () => {
  return (
    <div className="">
      <NavBar />
      <Contactus />
      <ClientsReview />
    </div>
  );
};

export default App;
