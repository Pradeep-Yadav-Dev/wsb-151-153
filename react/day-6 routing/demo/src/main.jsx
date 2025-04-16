import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './About.jsx';
import Header from './Comman/Header.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Gallery from './Gallery.jsx';
import Contact from './Contact.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<App/>} />
        <Route path='/about' element={<About/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/contact' element={<Contact/>}/>
        


      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
