import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './HostVans.css';

const HostVans = () => {
    const [listedVans, setListedVans] = useState(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch('/api/host/vans');
                if(!response.ok) {
                    throw new Error('could not fetch resource');
                }
                const data = await response.json();
                setListedVans(data.vans);
            }
            catch(error) {
                console.log(error);
            }
        }
        getData()
    },[]);

  return (
    <section className="listed-page">
        <h2>Your listed vans</h2>
        <div className="listed-vans-container">
            {listedVans ? listedVans.map(van => {
                return (
                    <Link to={`/host/vans/${van.id}`} key={van.id} className="listed-van">
                        <img src={van.imageUrl} alt={van.name} />
                        <div className="listed-van-text">
                            <p className="name">{van.name}</p>
                            <p className="price">${van.price}/day</p>
                        </div>
                    </Link>
                )
            }) : 'Loading...!'}
        </div>
    </section>
  )
}

export default HostVans
