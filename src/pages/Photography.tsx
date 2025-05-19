import React from 'react';
import './Photography.css';

const Photography: React.FC = () => {
  const photos = [
    {
      title: "Travel Photography",
      image: "https://picsum.photos/seed/photo1/400/300",
      description: "Capturing moments from my travels"
    },
    // Add more photos here
  ];

  return (
    <div className="photography-container">
      <h2 className="photography-title">Photography Portfolio</h2>
      <div className="photo-grid">
        {photos.map((photo, index) => (
          <div key={index} className="photo-card">
            <img src={photo.image} alt={photo.title} className="photo-image" />
            <div className="photo-overlay">
              <h3>{photo.title}</h3>
              <p>{photo.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Photography;