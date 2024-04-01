import React from 'react';
import './movieservices.css';

const MovieServices = () => {
  return (
    <div className='movieservices'>
      <div className='whatmovies__services-line'></div>
        <div className='whatmovies__services-title'>
          <h1>WhatMovies Services</h1>
        </div>

        <div className='whatmovies__services-cards'>
          <div className='whatmovies__services-card1'>
            <h3>Explore Over 1 Million Movies</h3>
            <p>Discover endless cinematic treasures, from blockbusters to indie hits, through our exclusive partnership with TMDB. Your next favorite movie awaits!</p>
          </div>

          <div className='whatmovies__services-card2'>
            <h3>Tailored Just for You</h3>
            <p>Our smart recommendations learn from your tastes to suggest movies you'll love. Personalized viewing, refined with every film you watch.</p>
          </div>

          <div className='whatmovies__services-card3'>
            <h3>Your Gateway to New Cinematic Adventures</h3>
            <p>Step into a realm of discovery with direct access to TMDB's vast database. Find hidden gems and new favorites with ease—your cinematic adventure starts here.</p>
          </div>
        </div>
    </div>
  )
}

export default MovieServices