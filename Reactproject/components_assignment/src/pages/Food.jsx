import React, { useState, useEffect } from 'react';

const Food = () => {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian')
      .then(res => res.json())
      .then(data => {
        setFoods(data.meals || []);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching food:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="loading">Loading...</div>;

  return (
    <div className="page-container">
      <h2>Food Menu (Canadian)</h2>
      <div className="cards-grid">
        {foods.map(item => (
          <div key={item.idMeal} className="card">
            <img src={item.strMealThumb} alt={item.strMeal} />
            <h3>{item.strMeal}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;
