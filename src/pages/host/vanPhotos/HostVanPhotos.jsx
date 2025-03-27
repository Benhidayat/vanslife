import React from 'react';
import { useOutletContext } from 'react-router-dom';
import './HostVanPhotos.css';

const HostVanPhotos = () => {
    const { currentVan }= useOutletContext()
  return (
    <section className='van-photos'>
      <img src={currentVan.imageUrl} alt={currentVan.name} />
    </section>
  )
}

export default HostVanPhotos
