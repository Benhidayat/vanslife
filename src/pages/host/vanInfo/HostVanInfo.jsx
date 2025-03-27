import React from 'react';
import { useOutletContext } from 'react-router-dom';
import './HostVanInfo.css';

const HostVanInfo = () => {
  const { currentVan } = useOutletContext()
  return (
    <section className='van-info-page'>
      <h4 className="name">Name: <span>{currentVan.name}</span></h4>
      <h4 className="category">Category: <span>{currentVan.type}</span></h4>
      <h4 className="desc">Description: <span>{currentVan.description}</span></h4>
      <h4 className="visibility">Visibility: <span>Public</span></h4>
    </section>
  )
}

export default HostVanInfo
