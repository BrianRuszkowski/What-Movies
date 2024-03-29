import React from 'react';
import './movieservices.css';

const MovieServices = () => {
  return (
    <div classname='movieservices'>
      <div className='whatmovies__services-line'></div>
        <div className='whatmovies__services-title'>
          <h1>WhatMovies Services</h1>
        </div>

        <div classname='whatmovies__services-cards'>
          <div className='whatmovies__services-card1'>
            <h3>We Pick movies for you</h3>
          </div>

          <div className='whatmovies__services-card2'>
            <h3>Access to 5million+ movies</h3>
          </div>

          <div className='whatmovies__services-card3'>
            <h3>See what everyone is watching</h3>
          </div>
        </div>
    </div>
  )
}

export default MovieServices