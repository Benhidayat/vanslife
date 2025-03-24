import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './VanDetails.css';

const VanDetails = () => {
    const params = useParams();

    const [van, setVan] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await fetch(`/api/vans/${params.id}`)
          if (!res.ok) {
            throw new Error('could not fetch the resource');
          }
          const data = await res.json()
          setVan(data.vans);
        }
        catch(error) {
          console.log(error);
        }
      }
      fetchData()
    },[params.id]);

  return (
    <div className='van-details-container'>
      {van ? (
        <div className="van-details">
          <img src={van.imageUrl} alt={van.name} />
          <i className={`van-type ${van.type} selected`}>{van.type}</i>
          <h2>{van.name}</h2>
          <p className='van-price'>${van.price}<span>/day</span></p>
          <p>{van.description}</p>
          <button className='link-button'>Rent this van</button>
        </div>
      ) : ( <div>Loading...</div> )}
    </div>
  )
}

export default VanDetails
