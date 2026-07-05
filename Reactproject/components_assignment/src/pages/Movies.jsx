import React, { useState, useEffect } from 'react';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // API is unstable, using hardcoded data for reliability
    const hardcodedMovies = [
      { id: 1, title: "Inception", poster: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg", year: 2010, rating: 8.8 },
      { id: 2, title: "The Dark Knight", poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg", year: 2008, rating: 9.0 },
      { id: 3, title: "Interstellar", poster: "https://image.tmdb.org/t/p/w500/gEU2QniL6C8zEfVfy23rUnOMtpF.jpg", year: 2014, rating: 8.6 },
      { id: 4, title: "Avatar", poster: "https://image.tmdb.org/t/p/w500/kyeqWdyUXW608qlYkRqosgbbJyK.jpg", year: 2009, rating: 7.9 },
      { id: 5, title: "The Avengers", poster: "https://image.tmdb.org/t/p/w500/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg", year: 2012, rating: 8.0 },
      { id: 6, title: "Titanic", poster: "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg", year: 1997, rating: 7.8 }
    ];
    setMovies(hardcodedMovies);
    setLoading(false);
  }, []);

  if (loading) return <div className="loading">Loading...</div>;

  return (
    <div className="page-container">
      <h2>Popular Movies</h2>
      <div className="cards-grid">
        {movies.map(movie => (
          <div key={movie.id} className="card">
            <img src={movie.poster} alt={movie.title} onError={(e) => {e.target.src='https://via.placeholder.com/300x450?text=No+Poster'}} />
            <h3>{movie.title}</h3>
            <p>Year: {movie.year}</p>
            <p>Rating: {movie.rating} ⭐</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;
