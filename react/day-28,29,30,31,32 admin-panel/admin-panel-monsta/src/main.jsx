import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout.jsx'
import AddColor from './color/AddColor.jsx'
import ViewColor from './color/ViewColor.jsx'
import UpdateColor from './color/UpdateColor.jsx'
import Context from './Context.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Context>
    <BrowserRouter>
   
      <Routes>

        <Route path="/" element={<App />} />

        <Route element={<Layout />}>
        
          <Route path='/dashboard' />

          <Route path='color'>
            <Route path='add' element={<AddColor />} />
            <Route path='view' element={<ViewColor />} />
            <Route path='update/:id?' element={<UpdateColor />} />
          </Route>

        
        </Route>

      </Routes>
      
    </BrowserRouter>
    </Context>
  </StrictMode>,
)
