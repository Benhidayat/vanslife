import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './index.css';
import Home from './pages/home/Home';
import About from './pages/about/About';

const App = () => {
  return (
    <BrowserRouter>
      <header>
        <h1>
          <Link to='/'>#vanslife</Link>
        </h1>
        <nav className='nav'>
          <Link className='about' to='/about'>About</Link>
          <Link>vans</Link>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
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
