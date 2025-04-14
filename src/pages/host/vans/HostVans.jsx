import React, { Suspense } from 'react';
import { Link, useLoaderData, Await } from 'react-router-dom';
import { getHostVans } from '../../../api';
import { requireAuth } from '../../../utils';
import './HostVans.css';

export const loader = async ({ request }) => {
    await requireAuth(request);
    // deferring data to make loading state
    return {
        vans: getHostVans()
    };
}

const HostVans = () => {
    // data from loader
    const listedVans = useLoaderData();

    const renderHostVans = (loadedVans) => {
        const hostVanElms = loadedVans.map(van => {
            return (
                <Link to={van.id} className='listed-van'>
                    <img src={van.imageUrl} alt={van.name} />
                    <div className='listed-van-text'>
                        <p className="name">{van.name}</p>
                        <p className="price">{van.price}</p>
                    </div>
                </Link>
            )
        })

        return (
            <div className="listed-van-container">
                {hostVanElms}
            </div>
        )
    }

  return (
    <section className="listed-page">
        <h2>Your listed vans</h2>
        <Suspense fallback={<h2>Loading vans...</h2>}>
            <Await resolve={listedVans.vans}>
                {renderHostVans}
            </Await>
        </Suspense>
    </section>
  )
}

export default HostVans
