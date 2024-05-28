import React, { useState, useEffect } from 'react';
import { fetchPopularMovies } from './Home/MovieAPI/MovieAPI'; 
import { MovieFooter } from './Home/MovieFooter/MovieFooter';
import './movies.css';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1); 

  useEffect(() => {
    fetchData(page); 
  }, []);

  const fetchData = async (page) => {
    try {
      const response = await fetchPopularMovies(page); 
      setMovies(prevMovies => [...prevMovies, ...response.data.results]); 
    } catch (error) {
      console.error('Failed to fetch movies:', error);
    }
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1); 
    fetchData(page + 1); 
  };

  return (
    <div className='movies__container'>
      <div className="movies__grid">
        {movies.map((movie, index) => (
          <div key={index} className="movie__card">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <div>
              <h4>{movie.title}</h4>
              <h5>Release Date: {new Date(movie.release_date).getFullYear()}</h5>
            </div>
          </div>
        ))}
      </div>
      <button onClick={handleLoadMore} className="loadmore">Load More</button>
    </div>
  );
};

export default Movies;