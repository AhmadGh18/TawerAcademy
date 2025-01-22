import React from "react";
import NavBar from "./components/Navbar";
import ClientsReview from "./components/ClientsReview";
import HomePage from "./components/Home";
import Contactus from "./components/Contactus";

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
