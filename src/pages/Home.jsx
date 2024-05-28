// Home.jsx renders all the elements 

import React from 'react';
import { MovieHero, MovieSlider, MovieServices, MovieDiscover, MovieLinks, MovieFooter } from './Home/index';
import './home.css';


const Home = ({ images }) => {
  return (
    <div className='Whatmovies__home'>
      <MovieHero />
      <MovieSlider />
      <MovieServices />
      <MovieDiscover />
      {/* The commented code below is left commented until coded placed as placeholder */}

      {/*

      <MovieLinks />

      */}
      
    </div>
)};

 
export default Home;