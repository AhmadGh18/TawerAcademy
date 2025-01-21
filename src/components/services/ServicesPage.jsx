import React from "react";
import ServicesCard from "./ServicesCard";
import services from "../../data/services";

const ServicesPage = () => {
  return (
    <div className="py-10 px-4">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800">Our Services</h1>
        <p className="text-lg text-gray-600 mt-2">
          Explore the wide range of programs we offer to boost your skills!
        </p>
      </header>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServicesCard
            key={service.id}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
