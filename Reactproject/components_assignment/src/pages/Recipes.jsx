import React, { useState, useEffect } from 'react';

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://dummyjson.com/recipes')
      .then(res => res.json())
      .then(data => {
        setRecipes(data.recipes || []);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching recipes:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="loading">Loading...</div>;

  return (
    <div className="page-container">
      <h2>Delicious Recipes</h2>
      <div className="cards-grid">
        {recipes.map(recipe => (
          <div key={recipe.id} className="card">
            <img src={recipe.image} alt={recipe.name} />
            <h3>{recipe.name}</h3>
            <p>Rating: {recipe.rating} ⭐</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recipes;
