import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // Ensure we have styles

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">React API App</Link>
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/food">Food</Link>
        <Link to="/products">Products</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/recipes">Recipes</Link>
      </div>
    </nav>
  );
};

export default Navbar;
