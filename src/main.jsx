import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Sphere from './components/Sphere/Sphere.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Sphere/>
  </StrictMode>,
)
