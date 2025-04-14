import React, { Suspense } from 'react';
import { 
    Link, 
    useSearchParams, 
    useLoaderData, 
    Await,
 } from 'react-router-dom';
import { getData } from '../../api';
import './Vans.css';

export const loader = async () => {
    // deferring data
    return {
        vans: getData()
    };

}

const Vans = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const typeFilters = searchParams.get('type');

    const dataLoader = useLoaderData();

    const renderVansElms = (loadedVans) => {
        const displayedVans = typeFilters
            ? loadedVans.filter(van => van.type === typeFilters)
            : loadedVans

        const vansElement = displayedVans.map(van => {
            return (
                <div key={van.id} className="van-container">
                    <Link to={van.id} state={{search: `?${searchParams.toString()}`, type: typeFilters}} >
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
            <>
                <div className="van-list-filter">
                    <button onClick={() => setSearchParams({type: 'simple'})} className={`van-type simple ${typeFilters === 'simple' ? 'selected' : null}`}>Simple</button>
                    <button onClick={() => setSearchParams({type: 'luxury'})} className={`van-type luxury ${typeFilters === 'luxury' ? 'selected' : null}`}>Luxury</button>
                    <button onClick={() => setSearchParams({type: 'rugged'})} className={`van-type rugged ${typeFilters === 'rugged' ? 'selected' : null}`}>Rugged</button>
                    {typeFilters 
                        ? <button onClick={() =>  setSearchParams({})} className='filter'>Clear filters</button>
                        : null
                    }
                </div>
                <div className="van-list">
                    {vansElement}
                </div>
            </>
        )
    }
    
  return (
    <main className='vans-page'>    
        <h2>Explore our van options</h2>
        <Suspense fallback={<h2>Loading vans...</h2>}>
            <Await resolve={dataLoader.vans}>
                {renderVansElms}
            </Await>
        </Suspense>

    </main>
  )
}

export default Vans
