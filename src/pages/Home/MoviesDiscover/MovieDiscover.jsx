import React from 'react';
import { Link } from 'react-router-dom';
import './moviediscover.css';

const MovieDiscover = () => {
  return (
    <div className='Movie__Discover'>
        <div className='Movie__Discover-title'>
            <h1>Discover more now</h1>
        </div>

        <div className='Movie__Discover-movies'>
          <div className='Movie__Discover-movies-title'>
            <h3>Discover Movies Now</h3>
            <Link to='/Movies'>Movies</Link>
          </div>
        </div>

        <div className='Movie__Discover-tvshows'>
          <div className='Movie__Discover-tvshows-title'>
            <h3>Discover Tv-Shows Now</h3>
            <Link to='/Tvshows'>TV Shows</Link>
          </div>
        </div>
    </div>
  )
}

export default MovieDiscover