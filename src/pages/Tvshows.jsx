import React, { useState, useEffect } from 'react';
import { fetchUpcomingMovies } from './Home/MovieAPI/MovieAPI';
import './tvshows.css';

const SectionIndicators = ({ totalSections, currentSection, onIndicatorClick }) => {
  const indicators = [];

  for (let i = 0; i < totalSections; i++) {
    const isActive = i === currentSection;
    indicators.push(
      <span
        key={i}
        className={`section-indicator ${isActive ? 'active' : ''}`}
        onClick={() => onIndicatorClick(i)}
      ></span>
    );
  }

  return <div className="section-indicators">{indicators}</div>;
};

const Tvshows = () => {
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [currentSection, setCurrentSection] = useState(0);
  const itemsPerSection = 8; // You can adjust this number as needed.
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  const MovieModal = ({ movie, onClose }) => (
    <div className="movie-modal">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        width="400"
      />
      <h4>{movie.title}</h4>
      <h5>Release Date: {movie.release_date}</h5>
      {/* Add other movie details here */}
      <button onClick={onClose}>Close</button>
    </div>
  );

  useEffect(() => {
    fetchUpcomingMovies()
      .then((response) => {
        const movieData = response.data.results;
        setUpcomingMovies(movieData);
      })
      .catch((error) => {
        console.error('Error fetching upcoming movies:', error);
      });
  }, []);

  const totalSections = Math.ceil(upcomingMovies.length / itemsPerSection);

  const nextSection = () => {
    setCurrentSection((currentSection + 1) % totalSections);
  };

  const prevSection = () => {
    setCurrentSection((currentSection - 1 + totalSections) % totalSections);
  };

  const sectionStartIndex = currentSection * itemsPerSection;
  const sectionEndIndex = sectionStartIndex + itemsPerSection;
  const upcoming = upcomingMovies.slice(sectionStartIndex, sectionEndIndex);

  const handleIndicatorClick = (sectionIndex) => {
    setCurrentSection(sectionIndex);
  };

  return (
    <div>
      <div className="image-slider">
        <div className="slider-wrapper">
          {upcoming.map((movie, index) => (
            <div key={index} className="slide" onClick={() => handleMovieClick(movie)}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={`Movie Poster ${movie.title}`}
                width="400"
              />
            </div>
          ))}
        </div>

        <button onClick={prevSection} className="prev-section-button">
          Previous Section
        </button>
        <button onClick={nextSection} className="next-section-button">
          Next Section
        </button>
      </div>

      <SectionIndicators
        totalSections={totalSections}
        currentSection={currentSection}
        onIndicatorClick={handleIndicatorClick}
      />

      {selectedMovie && (
        <MovieModal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
      )}
    </div>
  );
};

export default Tvshows;