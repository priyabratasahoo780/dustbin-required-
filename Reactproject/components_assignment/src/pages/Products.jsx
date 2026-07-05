import React, { useState, useEffect } from 'react';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching products:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="loading">Loading...</div>;

  return (
    <div className="page-container">
      <h2>Fake Store Products</h2>
      <div className="cards-grid">
        {products.map(product => (
          <div key={product.id} className="card product-card">
             <div className="image-container">
                <img src={product.image} alt={product.title} />
             </div>
            <h3>{product.title}</h3>
            <p className="price">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
