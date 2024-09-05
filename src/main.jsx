import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
<<<<<<< HEAD
import './index.css'
import Sphere from './components/Sphere/Sphere.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Sphere/>
=======

import './index.css'
import { RouterProvider } from 'react-router-dom'
import Router from './routers/Router.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {Router}/>
>>>>>>> 1c424525a0589b44509ecd97115e90840febd575
  </StrictMode>,
)
