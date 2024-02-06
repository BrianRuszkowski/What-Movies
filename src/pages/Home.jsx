// Home.jsx renders all the elements 

import React from 'react';
import { MovieHero, MovieSlider, MovieServices, MovieLinks, MovieFooter } from './Home/index';
import './home.css';
import './Home/moviehero.css';
import './Home/movieslider.css';
import './Home/movieservices.css';

const Home = ({ images }) => {
  return (
    <div className='Whatmovies__home'>
      <MovieHero />
      <MovieSlider />
      <MovieServices />
      {/* The commented code below is left commented until coded placed as placeholder */}

      {/*

      <MovieLinks />
      <MovieFooter />

      */}
      
    </div>
)};

 
export default Home;