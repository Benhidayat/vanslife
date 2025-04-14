import React from 'react';
import { Link, useLocation, useLoaderData } from 'react-router-dom';
import { getVan } from '../../api';
import './VanDetails.css';

export const loader = async ({ params }) => {
  return getVan(params.id);
}

const VanDetails = () => {
  const van = useLoaderData()
  
  const location = useLocation();
  const filter = location.state?.search || '';
  const type = location.state?.type || 'all';

  return (
    <div className='van-details-container'>
      <Link to={`..${filter}`} relative='path' className='back-button'>
            &larr; <span>Back to {type} vans</span>
      </Link>
      <div className="van-details">
        <img src={van.imageUrl} alt={van.name} />
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
        <h2>{van.name}</h2>
        <p className='van-price'>${van.price}<span>/day</span></p>
        <p>{van.description}</p>
        <button className='link-button'>Rent this van</button>
      </div>
    </div>
  )
}

export default VanDetails
