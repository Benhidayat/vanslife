import React from 'react';
import ReactDOM from 'react-dom/client';
import { 
  Route, 
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider, } from 'react-router-dom';
import './index.css';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Vans, {loader as vansLoader } from './pages/vans/Vans';
import VanDetails, {loader as vanDetailsLoader} from './pages/vanDetails/VanDetails.jsx';
import Layout from './components/Layout.jsx';
import Host from './pages/host/Host.jsx';
import Dashboard from './pages/host/dashboard/Dashboard.jsx';
import Income from './pages/host/income/Income.jsx';
import Reviews from './pages/host/reviews/Reviews.jsx';
import HostVans, {loader as hostVansLoader} from './pages/host/vans/HostVans.jsx';
import HostVanDetail, {loader as hostVanDetailLoader} from './pages/host/vans/hostVanDetail/HostVanDetail.jsx';
import HostVanInfo from './pages/host/vanInfo/HostVanInfo.jsx';
import HostVanPricing from './pages/host/vanPricing/HostVanPricing.jsx';
import HostVanPhotos from './pages/host/vanPhotos/HostVanPhotos.jsx';
import ErrorPage from './pages/errorPage/ErrorPage.jsx';
import Error from './components/Error.jsx';
import Login, { loader as loginLoader, action as loginAction  } from './pages/login/Login.jsx';
import { requireAuth } from './utils.js';
import './server.js';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route index element={<Home />} />
    <Route path='about' element={<About />} />
    <Route path='login' element={<Login />} loader={loginLoader}  action={loginAction} />
    <Route 
      path='vans' 
      element={<Vans />}
      errorElement={<Error />} 
      loader={vansLoader} />
    <Route path='vans/:id' element={<VanDetails />} loader={vanDetailsLoader} />

    <Route 
     path='host' 
     element={<Host />}
     loader={async ({ request }) => {
      await requireAuth(request)
     }}>
      <Route 
       index 
       element={<Dashboard />}
       loader={async ({ request }) => {
        await requireAuth(request)
       }} />
      <Route 
       path='income' 
       element={<Income />}
       loader={async ({ request }) => {
        await requireAuth(request)
       }} />
      <Route 
       path='vans' 
       element={<HostVans />}
       errorElement={<Error />}
       loader={hostVansLoader} />
      <Route 
       path='vans/:id' 
       element={<HostVanDetail />}
       errorElement={<Error />}
       loader={hostVanDetailLoader} >
        <Route 
         index 
         element={<HostVanInfo />}
         loader={async ({ request }) => {
          await requireAuth(request)
         }} />
        <Route 
         path='pricing' 
         element={<HostVanPricing/>}
         loader={async ({ request }) => {
          await requireAuth(request);
         }} />
        <Route 
         path='photos' 
         element={<HostVanPhotos/>}
         loader={async ({ request }) => {
          await requireAuth(request);
         }} />
      </Route>
      <Route 
       path='reviews' 
       element={<Reviews />}
       loader={async ({ request }) => {
        await requireAuth(request);
       }}/>
    </Route>
    <Route path='*' element={<ErrorPage />} />
  </Route>
))

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(
  <App />
  )
