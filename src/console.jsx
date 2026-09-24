import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Console from './components/Console/Console.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Console />
  </StrictMode>,
)
