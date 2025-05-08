
import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import App from './App'
import List from './List'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>

        <Route element={<Layout />} >

          <Route path='/' element={<App />} />
          <Route path='/list' element={<List />} />

        </Route>


      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
