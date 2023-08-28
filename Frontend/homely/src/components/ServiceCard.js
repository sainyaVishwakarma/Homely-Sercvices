// ServiceCard.js
import React, { useState } from "react";
// import "../styles/ServiceCard.css";

const ServiceCard = () => {
  const [services, setServices] = useState([
    // ... (services array)
  ]);

  const [cart, setCart] = useState([]);

  const handleServiceBook = (id) => {
    const updatedServices = services.map((s) =>
      s.id === id ? { ...s, booked: true } : s
    );
    setServices(updatedServices);

    const selectedService = services.find((service) => service.id === id);
    setCart([...cart, selectedService]);
  };

  return (
    <div className="app">
      <h1>Book Services</h1>
      <div className="service-list">
        {services.map((service) => (
          <div
            key={service.id}
            className={`service-card ${service.booked ? "booked" : ""}`}
          >
            <h3>{service.name}</h3>
            <p>{service.description}</p>
            <p>Price: ${service.price.toFixed(2)}</p>
            <button
              onClick={() => handleServiceBook(service.id)}
              disabled={service.booked}
              className={service.booked ? "added-to-cart" : ""}
            >
              {service.booked ? "Added to Cart" : "Book Now"}
            </button>
          </div>
        ))}
      </div>
      <div className="cart">
        {/* ... (previous JSX) */}
      </div>
    </div>
  );
};

export default ServiceCard;