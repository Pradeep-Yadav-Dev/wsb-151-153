import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Header} from "./Header.jsx"
import Banner from './Banner.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Header/>
    <Banner/>
    
  </StrictMode>,
)
