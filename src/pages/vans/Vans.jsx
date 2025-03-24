import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Vans.css';


const Vans = () => {
    const [vans, setVans] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/api/vans');
                if (!res.ok) {
                    throw new Error('could not fetch resource');
                }
                const data = await res.json();
                setVans(data.vans)
                
            }
            catch(error) {
                console.log(error);
            }
        }
        fetchData();
    },[]);

    const vansElement = vans.map(van => {
        return (
            <div key={van.id} className="van-container">
                <Link to={`/vans/${van.id}`}>
                    <img src={van.imageUrl} alt={van.name} />
                    <div className="details">
                        <h3 className="name">{van.name}</h3>
                        <p className='price'>${van.price}<span>/day</span></p>
                    </div>
                    <i className={`van-type ${van.type} selected`}>
                        {van.type}
                    </i>
                </Link>
            </div>
        )
    })
    
  return (
    <main className='vans-page'>    
        <div className="van-list">
            {vansElement}
        </div>
    </main>
  )
}

export default Vans
