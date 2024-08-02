import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  const handleExploreRooms = () => {
    navigate('/rooms');
  };

  return (
    <div className="home">
      <h1>Welcome to Our Property Rental Platform</h1>
      <button onClick={handleExploreRooms} className="explore-button">Explore Our Rooms</button>
    </div>
  );
};

export default Home;
