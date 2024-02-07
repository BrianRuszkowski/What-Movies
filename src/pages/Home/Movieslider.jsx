// MovieSlider.jsx

import React, { useState, useEffect, useRef } from 'react';
import { fetchUpcomingMovies, fetchPopularMovies, fetchBeingWatchedMovies, fetchLatestMovies } from './MovieAPI';

const Movieslider = () => {
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [latestMovies, setLatestMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [beingWatchedMovies, setBeingWatchedMovies] = useState([]);
  const [currentSection, setCurrentSection] = useState(0);
  const [currentUpcomingSection, setCurrentUpcomingSection] = useState(0);
  const [currentBeingWatchedSection, setCurrentBeingWatchedSection] = useState(0);
  const [currentLatestSection, setCurrentLatestSection] = useState(0);
  const [currentPopularSection, setCurrentPopularSection] = useState(0);

  const sliderRef = useRef(null);
  const [dragStart, setDragStart] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  /* The section below is for the API to fetch the data for each slider */

  useEffect(() => {
    const fetchData = async (fetchFunction, setDataFunction) => {
      const movieData = [];
  
      for (let page = 1; page <= 3; page++) {
        try {
          const response = await fetchFunction(page);
          if (response.data.results) {
            movieData.push(...response.data.results);
          }
        } catch (error) {
          console.error(`Error fetching data from page ${page}: ${error.message}`);
        }
      }
  
      setDataFunction(movieData);
    };
  
    // Fetch and set upcoming movies
    fetchData(fetchUpcomingMovies, setUpcomingMovies);
  
    // Fetch and set popular movies
    fetchData(fetchPopularMovies, setPopularMovies);
  
    // Fetch and set latest movies
    fetchData(fetchLatestMovies, setLatestMovies);
  
    // Fetch and set being watched movies
    fetchData(fetchBeingWatchedMovies, setBeingWatchedMovies);
  }, []);


  /* This is the section indicator where the current/selected slide is being indicated */

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

  const itemsPerSection = 10;
  const totalUpcomingSections = Math.ceil(upcomingMovies.length / itemsPerSection);
  const totalLatestSections = Math.ceil(latestMovies.length / itemsPerSection);
  const totalPopularSections = Math.ceil(popularMovies.length / itemsPerSection);
  const totalBeingWatchedSection = Math.ceil(beingWatchedMovies.length / itemsPerSection);


  /* The sections below are for the next and previous buttons for each category */

  const nextUpcomingSection = () => {
  setCurrentUpcomingSection((currentUpcomingSection + 1) % totalUpcomingSections);
  };

  const prevUpcomingSection = () => {
  setCurrentUpcomingSection((currentUpcomingSection - 1 + totalUpcomingSections) % totalUpcomingSections);
  };

  const nextLatestSection = () => {
  setCurrentLatestSection((currentLatestSection + 1) % totalLatestSections);
  };

  const prevLatestSection = () => {
  setCurrentLatestSection((currentLatestSection - 1 + totalLatestSections) % totalLatestSections);
  };

  const nextBeingWatchedSection = () => {
  setCurrentBeingWatchedSection((currentBeingWatchedSection + 1) % totalBeingWatchedSection);
  };
  
  const prevBeingWatchedSection = () => {
  setCurrentBeingWatchedSection((currentBeingWatchedSection - 1 + totalBeingWatchedSection) % totalBeingWatchedSection);
  };

  const nextPopularSection = () => {
  setCurrentPopularSection((currentPopularSection + 1) % totalPopularSections);
  };

  const prevPopularSection = () => {
  setCurrentPopularSection((currentPopularSection - 1 + totalPopularSections) % totalPopularSections);
  };

  /* The section below is for sections for each category */

  const upcomingSectionStartIndex = currentUpcomingSection * itemsPerSection;
  const upcomingSectionEndIndex = upcomingSectionStartIndex + itemsPerSection;
  const upcoming = upcomingMovies.slice(upcomingSectionStartIndex, upcomingSectionEndIndex);

  const latestSectionStartIndex = currentLatestSection * itemsPerSection;
  const latestSectionEndIndex = latestSectionStartIndex + itemsPerSection;
  const latest = latestMovies.slice(latestSectionStartIndex, latestSectionEndIndex);

  const popularSectionStartIndex = currentPopularSection * itemsPerSection;
  const popularSectionEndIndex = popularSectionStartIndex + itemsPerSection;
  const popular = popularMovies.slice(popularSectionStartIndex, popularSectionEndIndex);

  const beingwatchedSectionStartIndex = currentBeingWatchedSection * itemsPerSection;
  const beingwatchedSectionEndIndex = beingwatchedSectionStartIndex + itemsPerSection;
  const beingwatched = beingWatchedMovies.slice(beingwatchedSectionStartIndex, beingwatchedSectionEndIndex);

  const handleIndicatorClick = (sectionIndex) => {
    setCurrentSection(sectionIndex);
  };

  /* The section below is for the dragging to next and previous section. Still needs to be worked on */

  const handleImageDragStart = (e) => {
    e.preventDefault();
  };

  const handleImageMouseDown = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isDragging) {
        const sliderRect = sliderRef.current.getBoundingClientRect();
        const newPosition = e.clientX - sliderRect.left;

        if (newPosition >= 0 && newPosition <= sliderRect.width) {
          const percentage = (newPosition / sliderRect.width) * 100;
          const sectionIndex = Math.floor((percentage / 100) * totalUpcomingSections);
          setCurrentUpcomingSection(sectionIndex);
        }
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStart(e.clientX);
  };

  {/*

  This needs to be adjusted and fixed with the slider at the moment commented out

    move the code below to image slider when fixing

    ref={sliderRef}
    onMouseDown={handleMouseDown}
    onClick={handleSliderClick}

  const handleSliderClick = (e) => {
    if (!isDragging) {
      const sliderRect = sliderRef.current.getBoundingClientRect();
      const newPosition = e.clientX - sliderRect.left;

      if (newPosition >= 0 && newPosition <= sliderRect.width) {
        const percentage = (newPosition / sliderRect.width) * 100;
        const sectionIndex = Math.floor((percentage / 100) * totalUpcomingSections);
        setCurrentUpcomingSection(sectionIndex);
      }
    }
  };

*/}

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

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  return (
    <div className='whatmovies__slider'>
      <div className='whatmovies__latest'>
        <ul>Latest Movies</ul>

        <div className="image-slider">
          <div className="slider-wrapper">
            {upcoming.map((movie, index) => (
              <div key={index} className="slide" onClick={() => handleMovieClick(movie)}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  width="400"
                  onDragStart={handleImageDragStart}
                  style={{ userSelect: 'none' }} // Add this style to disable selection
                />
              <h4>{movie.title}</h4>
              <h5>Release Date: {movie.release_date}</h5>
            </div>
            ))}
          </div>
        </div>

        <SectionIndicators
          totalSections={totalUpcomingSections}
          currentSection={currentUpcomingSection}
          onIndicatorClick={handleIndicatorClick}
        />

        <button className='Previous' onClick={prevUpcomingSection}>&#9664;</button>
        <button className='Next' onClick={nextUpcomingSection}>&#9654;</button>

        {selectedMovie && (
          <MovieModal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
        )}
      </div>
    
    
      <div className='whatmovies__most-popular'>
        <ul>Popular Movies</ul>

        <div className="image-slider">
          <div className="slider-wrapper">
            {latest.map((movie, index) => (
              <div key={index} className="slide" onClick={() => handleMovieClick(movie)}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  width="400"
                  onDragStart={handleImageDragStart}
                  style={{ userSelect: 'none' }} // Add this style to disable selection
                />
              <h4>{movie.title}</h4>
              <h5>Release Date: {movie.release_date}</h5>
            </div>
            ))}
          </div>
        </div>

        <SectionIndicators
          totalSections={totalLatestSections}
          currentSection={currentLatestSection}
          onIndicatorClick={handleIndicatorClick}
        />

        <button className='Previous' onClick={prevLatestSection}>&#9664;</button>
        <button className='Next' onClick={nextLatestSection}>&#9654;</button>

        {selectedMovie && (
          <MovieModal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
        )}
      </div>

      <div className='whatmovies__being-watched'>
        <ul>Being Watched Movies</ul>

        <div className="image-slider">
          <div className="slider-wrapper">
            {popular.map((movie, index) => (
              <div key={index} className="slide" onClick={() => handleMovieClick(movie)}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  width="400"
                  onDragStart={handleImageDragStart}
                  style={{ userSelect: 'none' }} // Add this style to disable selection
                />
              <h4>{movie.title}</h4>
              <h5>Release Date: {movie.release_date}</h5>
            </div>
            ))}
          </div>
        </div>

        <SectionIndicators
          totalSections={totalPopularSections}
          currentSection={currentPopularSection}
          onIndicatorClick={handleIndicatorClick}
        />

        <button className='Previous' onClick={prevPopularSection}>&#9664;</button>
        <button className='Next' onClick={nextPopularSection}>&#9654;</button>

        {selectedMovie && (
          <MovieModal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
        )}
      </div>

    
      <div className='whatmovies__top-rated'>
        <ul>Top Rated Movies</ul>

        <div className="image-slider">
          <div className="slider-wrapper">
            {beingwatched.map((movie, index) => (
              <div key={index} className="slide" onClick={() => handleMovieClick(movie)}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  width="400"
                  onDragStart={handleImageDragStart}
                  style={{ userSelect: 'none' }} // Add this style to disable selection
                />
              <h4>{movie.title}</h4>
              <h5>Release Date: {movie.release_date}</h5>
            </div>
            ))}
          </div>
        </div>

        <SectionIndicators
          totalSections={totalBeingWatchedSection}
          currentSection={currentBeingWatchedSection}
          onIndicatorClick={handleIndicatorClick}
        />

        <button className='Previous' onClick={prevBeingWatchedSection}>&#9664;</button>
        <button className='Next' onClick={nextBeingWatchedSection}>&#9654;</button>

        {selectedMovie && (
          <MovieModal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
        )}
      </div>
    </div>
)};
 
export default Movieslider;