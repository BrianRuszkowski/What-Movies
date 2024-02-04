import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './movies.css';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const numberOfMovies = 150; // Number of random movies to display

  useEffect(() => {
    const fetchData = async () => {
      try {
        const options = {
          method: 'GET',
          url: 'https://moviesdatabase.p.rapidapi.com/titles',
          headers: {
            'X-RapidAPI-Key': 'e3d0f68954msh2db244040b586d0p1f97bdjsnf12fd027f261',
            'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com',
          },
        };

        const allMovies = [];
        for (let year = 2016; year <= 2023; year++) {
          const response = await axios.request({
            ...options,
            params: {
              year: year.toString(),
            },
          });
          allMovies.push(...response.data.results);
        }

        // Filter out movies with missing content, title, or image URLs
        const filteredMovies = allMovies.filter(
          (movie) =>
            movie?.primaryImage?.url && movie?.titleText?.text && movie?.releaseYear?.year
        );

        // Ensure you have fetched at least the desired number of movies
        if (filteredMovies.length > 0) {
          const randomMoviesArray = filteredMovies.slice(0, numberOfMovies);
          setMovies(randomMoviesArray);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='whatmovies__test'>
      <h1>Random Upcoming Movies</h1>
      {movies.length > 0 ? (
        <div className="random-movies-container">
          {movies.map((movie, index) => (
            <div key={index} className="random-movie">
              <img src={movie.primaryImage.url} alt={movie.titleText.text || 'Unknown Title'} />
              <p>Title: {movie.titleText.text || 'Unknown Title'}</p>
              <p>Release Year: {movie.releaseYear.year || 'Unknown Year'}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No movie data available.</p>
      )}
    </div>
  );
};

export default Movies;