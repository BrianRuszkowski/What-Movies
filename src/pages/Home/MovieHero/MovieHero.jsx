// Hero.jsx

import React, { useState, useEffect } from 'react';
import { Background } from '../../../assests/index';
import { fetchLatestMovies } from '../MovieAPI/MovieAPI';
import './moviehero.css';

const questions = [
  {
    text: "What genre of movies do you prefer?",
    options: ["Action", "Comedy", "Drama"]
  },
  {
    text: "Do you like movies from a specific decade?",
    options: ["2020s", "2010s", "2000s", "1990s"]
  }
];

const Hero = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [latestMovies, setLatestMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetchLatestMovies();
        setLatestMovies(response.data.results);  // Assume response.data.results is correct
      } catch (error) {
        console.error('Failed to fetch latest movies:', error);
      }
    };

    fetchMovies();
  }, []);

  const handleQuestionResponse = (option) => {
    console.log("Answer selected:", option);

    if (currentQuestionIndex === questions.length - 1) {
      console.log("Last question answered, should show movies...");
      setShowOverlay(true); // Ensure overlay stays visible to show movies
      setCurrentQuestionIndex(currentQuestionIndex + 1); // Increment to exceed questions.length for rendering condition
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1); // Move to next question
    }
  };

  const handleOverlayOpen = () => {
    setCurrentQuestionIndex(0); // Reset questions
    setShowOverlay(true); // Open overlay for questions
    document.body.classList.add('no-scroll');
  };

  const handleOverlayClose = () => {
    setShowOverlay(false);
    document.body.classList.remove('no-scroll');
  };

  return (
    <div className='whatmovies__hero'>
      <div className='whatmovies__background-image'>
        <img src={Background} alt="Background" />
      </div>
      <div className='whatmovies__background-image-title'>
        <div className='whatmovies__find-movies'>
          <p>Ready to break free from the movie monotony? Discover fantastic films you've yet to experience, handpicked just for you.</p>
          <button onClick={handleOverlayOpen}>Find Now</button>
        </div>

        {showOverlay && (
          <div className="overlay">
            <div className="overlay-content">
              {currentQuestionIndex < questions.length ? (
                <>
                  <h3>{questions[currentQuestionIndex].text}</h3>
                  {questions[currentQuestionIndex].options.map((option, index) => (
                    <button key={index} onClick={() => handleQuestionResponse(option)}>
                      {option}
                    </button>
                  ))}
                </>
              ) : (
                latestMovies.map((movie, index) => (
                  <div key={index} className="slide">
                    <img
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      alt={movie.title}
                      width="400"
                      onDragStart={(e) => e.preventDefault()}
                      style={{ userSelect: 'none' }}
                    />
                    <h4>{movie.title}</h4>
                    <h5>Release Date: {movie.release_date}</h5>
                  </div>
                ))
              )}
              <button onClick={handleOverlayClose}>Close</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;