import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Count from './Count.jsx'
import Forms from './Forms.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <Forms/>
  </StrictMode>,
)