import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
        <h1>
          <Link to='/'>#vanslife</Link>
        </h1>
        <nav className='nav'>
            <NavLink className={({isActive}) => isActive ? 'selected-link' : null} to='/host'>Host</NavLink>
            <NavLink className={({isActive}) => isActive ? 'selected-link' : null} to='/about'>About</NavLink>
            <NavLink className={({isActive}) => isActive ? 'selected-link' : null} to='/vans'>vans</NavLink>
        </nav>
      </header>
  )
}

export default Header
