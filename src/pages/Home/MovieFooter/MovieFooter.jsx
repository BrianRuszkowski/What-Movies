import React from 'react';
import './moviefooter.css';
import { Facebook, Instagram, Linkedin, Github, TMDB } from '../../../assests';

export const MovieFooter = () => {
  return (
    <div className='MovieFooter'>
      <div className='Whatmovies__footer'>
        <div className='Whatmovies__footer-images'>
          <a href='https://www.facebook.com/brian.ruszkowski'><img src={Facebook} alt='Facebook'/></a>
          <a href='https://www.instagram.com/xbrianx7/'><img src={Instagram} alt='Instagram'/></a>
          <a href='https://www.linkedin.com/in/brian-libertowski-476484280/'><img src={Linkedin} alt='Linkedin'/></a>
          <a href='https://github.com/BrianRuszkowski'><img src={Github} alt='Github'/></a>
        </div>

        <div className='Whatmovies__footer-desc'>
          <p>WhatMovies is your personal concierge for cinematic exploration, offering tailor-made film recommendations with unmatched precision. 
            Delve into a universe of movies and uncover your next favorite with ease.</p>
        </div>

        <div className='Whatmovies__footer-copyright'>
          <p>© Whatmovies.net 2024</p>
        </div>

        <div className='Whatmoives__footer-api'>
          <a href='https://www.themoviedb.org/?language=en-GB'><img src={TMDB} alt='TMDB'/></a>
          <p>Powered By IMDB API</p>
        </div>
      </div>
    </div>
  )
}

export default MovieFooter;