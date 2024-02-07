// Home.jsx renders all the elements 

import React from 'react';
import { MovieHero, MovieSlider, MovieServices, MovieLinks, MovieFooter } from './Home/index';

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