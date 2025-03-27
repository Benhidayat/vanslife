import React from 'react';
import { useOutletContext } from 'react-router-dom';
import './HostVanPricing.css';

const HostVanPricing = () => {
  const { currentVan }= useOutletContext();

  return (
    <section className='van-pricing-page'>
      <h4>${currentVan.price}<span>/day</span></h4>
    </section>
  )
}

export default HostVanPricing
