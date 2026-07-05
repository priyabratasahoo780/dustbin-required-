import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const cards = [
    { title: 'Food API', description: 'Explore delicious food items', route: '/food' },
    { title: 'Products API', description: 'Browse fake store products', route: '/products' },
    { title: 'Movies API', description: 'Discover popular movies', route: '/movies' },
    { title: 'Recipes API', description: 'Find tasty recipes', route: '/recipes' },
  ];

  return (
    <div className="page-container">
      <h1>Welcome to React API Integration</h1>
      <p>This project demonstrates routing and data fetching from multiple public APIs.</p>
      
      <div className="cards-grid">
        {cards.map((card, index) => (
          <div key={index} className="card home-card" onClick={() => navigate(card.route)}>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
