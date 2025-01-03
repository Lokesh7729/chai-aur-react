import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CounteProvider } from '../context/Counter.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CounteProvider>
    <App />
    </CounteProvider>
  </StrictMode>,
)
