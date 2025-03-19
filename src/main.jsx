import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'

const App = () => {
  return (
    <h1>hello react!</h1>
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(
  <App />
  )
