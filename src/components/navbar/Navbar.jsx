import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import { Link } from 'react-router-dom';
import './navbar.css';
import logo from '../../assests/whatmovieslogo.png';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

return (
    <div className='whatmovies__navbar'>

        {/* Website Logo image */}
        <div className='whatmovies__logo'>
            <Link to='/'>
                <img src={logo} alt='whatmovieslogo.png' />
            </Link>
        </div>
        
        {/* Navbar links */}
        <div className='whatmovies__navbar-links'>  
            <div className='whatmovies__navbar-links_container'>
                {/* Use Link component to navigate to Home */}
                <Link to='/'>Home</Link>
                <Link to='/Movies'>Movies</Link>
                <Link to='/Tvshows'>TV Shows</Link>
                <a href='#topimbd'>Top IMBD</a>
                {/* can add login and register to the right of the navbar along side a search bar */}
            </div>
        </div>

        {/* Buttons for User sign in and Register, needs to be functional 

        <div className='whatmovies__navbar-sign'>
            <button type='button'>Sign In</button>
            <button type='button'>Register</button>
        </div>

        */}

        {/* Close and Open menu along with navbar links for smaller device resolutions */}
        <div className='whatmovies__navbar-menu'>
            {toggleMenu
                ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
                : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />}
            {toggleMenu && (

                <div className='whatmovies__navbar-menu_container scale-up-center'>
                    <div className='whatmovies__navbar-menu_container-links'>
                        <p><a href='#home'>Home</a></p>
                        <p><a href='#movies'>Movies</a></p>
                        <p><a href='#tvshows'>TV Shows</a></p>
                        <p><a href='#topimbd'>Top IMBD</a></p>
                    </div>

                {/* Buttons for the open and close navbar menu, Optional remove comment for the class

                <div className='whatmovies__navbar-menu_container-links-sign'>
                    <button type='button'>Sign In</button>
                    <button type='button'>Register</button>
                </div>
                
                */}
            </div>
            )}
        </div>
    </div>
    );
};

export default Navbar;