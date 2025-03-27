import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './Host.css';

const Host = () => {
  const activeStyle = {
    fontWeight: '900',
    textDecoration: 'underline',
    color: '#161616'
  }
  return (
    <section className='host-page'>
        <nav>
            <NavLink style={({isActive}) => isActive ? activeStyle : null} end to='.'>Dashboard</NavLink>
            <NavLink style={({isActive}) => isActive ? activeStyle : null} to='income'>Income</NavLink>
            <NavLink style={({isActive}) => isActive ? activeStyle : null} to='vans'>Vans</NavLink>
            <NavLink style={({isActive}) => isActive ? activeStyle : null} to='reviews'>Reviews</NavLink>
        </nav>
        <Outlet />
    </section>
  )
}

export default Host
