import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './index.css';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Vans from './pages/vans/Vans';
import VanDetails from './pages/vanDetails/VanDetails.jsx';
import './server.js';


const App = () => {
  return (
    <BrowserRouter>
      <header>
        <h1>
          <Link to='/'>#vanslife</Link>
        </h1>
        <nav className='nav'>
          <Link className='about' to='/about'>About</Link>
          <Link to='/vans'>vans</Link>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/vans' element={<Vans />} />
        <Route path='/vans/:id' element={<VanDetails />} />
      </Routes>
      <footer>
        <p>Ⓒ 2022 #VANLIFE</p>
      </footer>
    </BrowserRouter>
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(
  <App />
  )
