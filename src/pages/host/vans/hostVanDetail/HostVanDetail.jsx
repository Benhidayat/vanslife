import React from 'react';
import { useLoaderData} from 'react-router-dom';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { getHostVans } from '../../../../api';
import { requireAuth } from '../../../../utils';
import './HostVanDetail.css';

export const loader = async ({params, request}) => {
    await requireAuth(request);
    return getHostVans(params.id);
}

const HostVanDetail = () => {
    const currentVan = useLoaderData()[0];

    const activeStyles = {
        fontWeight: '700',
        textDecoration: 'underline',
    }

  return (
    <section className='van-detail-page'>
        <Link to='..' relative='path' className='back-button'>
            &larr; <span>Back to all vans</span>
        </Link>
        <div className='current-page-container'>
            <div className="current-van-container">
                <img src={currentVan.imageUrl} alt={currentVan.name} />
                <div className='current-page-text'>
                    <i className={`van-type ${currentVan.type} selected`}>{currentVan.type}</i>
                    <h2>{currentVan.name}</h2>
                    <p>${currentVan.price}<span>/day</span></p>
                </div>
            </div>
            <div className="current-nav">
                <NavLink style={({isActive}) => isActive ? activeStyles : null} end to='.'>Details</NavLink>
                <NavLink style={({isActive}) => isActive ? activeStyles : null} to='pricing'>Pricing</NavLink>
                <NavLink style={({isActive}) => isActive ? activeStyles : null} to='photos'>Photos</NavLink>
            </div>
            <Outlet context={{currentVan}}/>
        </div>
    </section>
  )
}

export default HostVanDetail
