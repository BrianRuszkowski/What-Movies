// Hero.jsx

import React, { useState } from 'react';
import { Background, IT, Interstellar, Joker, M3gan, Oppenheimer, BigBang, TheNun2, AquaManLK, Shazam, Mario } from '../../../assests/index';
import './moviehero.css';

const Hero = () => {
  const [showOverlay, setShowOverlay] = useState(false);

  /* This section is for opening the overlay */
  const handleOverlayOpen = () => {
    setShowOverlay(true);
    document.body.classList.add('no-scroll');
  };

  /* This section is for closing the overlay */
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
          <p>Ready to break free from the movie monotony? Discover fantastic films you've yet to experience, handpicked just for you</p>
          <button onClick={handleOverlayOpen}>Find Now</button>
        </div>

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
)};

export default Hero;