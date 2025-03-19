import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './index.css'

const App = () => {
  return (
    <BrowserRouter>
      <header>
        <h1>
          <Link>#vanslife</Link>
        </h1>
        <nav className='nav'>
          <Link className='about'>About</Link>
          <Link>vans</Link>
        </nav>
      </header>
      <Routes>

      </Routes>
    </BrowserRouter>
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(
  <App />
  )
