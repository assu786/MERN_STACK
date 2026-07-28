import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Count from './Count.jsx'
import Forms from './Forms.jsx'
import Events from './Events.jsx'
import App from './java.jsx'
import API from './API.jsx'
import Dbase from './DB_connect.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Dbase/>
  </StrictMode>,
)