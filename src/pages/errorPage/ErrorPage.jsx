import React from 'react';
import './ErrorPage.css';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className='error-page'>
      <h2>Sorry, the page you were looking for was not found</h2>
      <Link to='/'>Return to home</Link>
    </div>
  )
}

export default ErrorPage
