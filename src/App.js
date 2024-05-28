import React from 'react';
import { Navbar } from './components/index.js';
import { MovieFooter } from './pages/Home/MovieFooter/MovieFooter';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home, Movies, Tvshows } from './pages/index';

const App = () => (
  <Router>
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Movies' element={<Movies />} />
        <Route path='/Tvshows' element={<Tvshows />} />
      </Routes>
      <MovieFooter />
    </div>
  </Router>
);

export default App;