import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import Home from './reactDay_1/home/Home.jsx'
import Counter from './reactDay_1/dash/count.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
    <Counter />
  </StrictMode>,
)
