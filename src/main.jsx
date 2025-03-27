import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './index.css';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Vans from './pages/vans/Vans';
import VanDetails from './pages/vanDetails/VanDetails.jsx';
import Layout from './components/Layout.jsx';
import Host from './pages/host/Host.jsx';
import Dashboard from './pages/host/dashboard/Dashboard.jsx';
import Income from './pages/host/income/Income.jsx';
import Reviews from './pages/host/reviews/Reviews.jsx';
import HostVans from './pages/host/vans/HostVans.jsx';
import HostVanDetail from './pages/host/vans/hostVanDetail/HostVanDetail.jsx';
import HostVanInfo from './pages/host/vanInfo/HostVanInfo.jsx';
import HostVanPricing from './pages/host/vanPricing/HostVanPricing.jsx';
import HostVanPhotos from './pages/host/vanPhotos/HostVanPhotos.jsx';
import './server.js';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='vans' element={<Vans />} />
          <Route path='vans/:id' element={<VanDetails />} />

          <Route path='host' element={<Host />}>
            <Route index element={<Dashboard />} />
            <Route path='income' element={<Income />} />
            <Route path='vans' element={<HostVans />} />

            <Route path='vans/:id' element={<HostVanDetail />} >
              <Route index element={<HostVanInfo />} />
              <Route path='pricing' element={<HostVanPricing/>} />
              <Route path='photos' element={<HostVanPhotos/>} />
            </Route>
            <Route path='reviews' element={<Reviews />}/>
          </Route>

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(
  <App />
  )
