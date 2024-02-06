// Hero.jsx

import React, { useState } from 'react';
import { Background, IT, Interstellar, Joker, M3gan, Oppenheimer, BigBang, TheNun2, AquaManLK, Shazam, Mario } from '../../assests/index';

const Hero = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [isMovieOrbitHidden, setIsMovieOrbitHidden] = useState(false);

  /* This section is for opening the overlay */
  const handleOverlayOpen = () => {
    setShowOverlay(true);
    setIsMovieOrbitHidden(true);
    document.body.classList.add('no-scroll');
  };

  /* This section is for closing the overlay */
  const handleOverlayClose = () => {
    setShowOverlay(false);
    setIsMovieOrbitHidden(false);
    document.body.classList.remove('no-scroll');
  };

  return (
    <div className='whatmovies__hero'>
      <div className='whatmovies__background-image'>
        <img src={Background} alt="Background" />
      </div>
      <div className='whatmovies__background-image-title'>
        <div className='whatmovies__find-movies'>
          <p>Ready to break free from the movie monotony? Discover fantastic films you've yet to experience, handpicked just for you</p>
          <button onClick={handleOverlayOpen}>Find Now</button>

          {showOverlay && (
        <div className="overlay">
          <div className="overlay-content">
            <h3>Movie Recommendation Questionnaire</h3>
            {/* Add your questionnaire form here */}
            <button onClick={handleOverlayClose}>Close</button>
          </div>
        </div>
      )}
        </div>
      </div>

    <div className={`movie-orbit ${isMovieOrbitHidden ? 'hidden' : ''}`}>
      <div className="movie">
          <img src={IT} alt="IT" />
      </div>
      <div className="movie">
        <img src={Interstellar} alt="Interstellar" />
      </div>
      <div className="movie">
        <img src={Joker} alt="Joker" />
      </div>
      <div className="movie">
        <img src={M3gan} alt="M3gan" />
      </div>
      <div className="movie">
        <img src={Oppenheimer} alt="Oppenheimer" />
      </div>
      <div className="movie">
        <img src={BigBang} alt="BigBang" />
      </div>
      <div className="movie">
        <img src={TheNun2} alt="TheNun2" />
      </div>
      <div className="movie">
        <img src={AquaManLK} alt="AquamanLK" />
      </div>
      <div className="movie">
        <img src={Shazam} alt="Shazam" />
      </div>
      <div className="movie">
        <img src={Mario} alt="Mario" />
      </div>
      {/* Add more movie elements */}
    </div>
  </div>
)};


export default Hero;