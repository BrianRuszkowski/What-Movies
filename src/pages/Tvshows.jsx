import React, { useState, useEffect } from 'react';
import { fetchPopularTVShows } from './Home/MovieAPI/MovieAPI'; 
import './tvshows.css';

const Tvshows = () => {
  const [tvShows, setTvShows] = useState([]);
  const [page, setPage] = useState(1); 

  useEffect(() => {
    fetchData(page); 
  }, []);

  const fetchData = async (page) => {
    try {
      const response = await fetchPopularTVShows(page); 
      setTvShows(prevTvShows => [...prevTvShows, ...response.data.results]); 
    } catch (error) {
      console.error('Failed to fetch TV shows:', error);
    }
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1); 
    fetchData(page + 1); 
  };

  return (
    <div className='tvshows-container'>
      <div className="shows-grid">
        {tvShows.map((show, index) => (
          <div key={index} className="show-card">
            <img
              src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
              alt={show.name}
            />
            <div>
              <h4>{show.name}</h4>
              <h5>Release Date: {show.first_air_date}</h5>
            </div>
          </div>
        ))}
      </div>
      <button onClick={handleLoadMore} className="load-more">Load More</button>
    </div>
  );
};

export default Tvshows;