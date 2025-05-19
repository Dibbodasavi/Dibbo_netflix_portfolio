import React from 'react';
import './Adventures.css';

const Adventures: React.FC = () => {
  const adventures = [
    {
      title: "Exploring Three Countries",
      description: "My journey across different cultures and landscapes",
      videoUrl: "https://example.com/video1",
      thumbnail: "https://picsum.photos/seed/adventure1/300/200"
    },
    // Add more adventures here
  ];

  return (
    <div className="adventures-container">
      <h2 className="adventures-title">My Adventures</h2>
      <div className="adventures-grid">
        {adventures.map((adventure, index) => (
          <div key={index} className="adventure-card">
            <img src={adventure.thumbnail} alt={adventure.title} className="adventure-image" />
            <div className="adventure-content">
              <h3>{adventure.title}</h3>
              <p>{adventure.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Adventures;