import React from 'react';
import './Travel.css';

const Travel: React.FC = () => {
  const travels = [
    {
      country: "Country 1",
      description: "Experience and memories from my first international journey",
      image: "https://picsum.photos/seed/travel1/400/300",
      date: "2023"
    },
    // Add more travel experiences here
  ];

  return (
    <div className="travel-container">
      <h2 className="travel-title">Travel Experiences</h2>
      <div className="travel-timeline">
        {travels.map((travel, index) => (
          <div key={index} className="travel-card">
            <img src={travel.image} alt={travel.country} className="travel-image" />
            <div className="travel-content">
              <h3>{travel.country}</h3>
              <span className="travel-date">{travel.date}</span>
              <p>{travel.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Travel;