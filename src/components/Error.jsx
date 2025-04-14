import React from 'react';
import { useRouteError } from 'react-router-dom';

const Error = () => {
  const err = useRouteError();
  return (
    <div>
      <h1>{err.message}</h1>
      <pre>{err.status} - {err.statusText}</pre>
    </div>
  )
}

export default Error
