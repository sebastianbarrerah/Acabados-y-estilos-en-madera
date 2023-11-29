import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from '../../pages/Home';
import Carpenter from '../../pages/Carpenter';
import Header from '../header/Header';
import Media from '../../pages/Media';
import Multimedia from '../../pages/Multimedia';
import Quote from '../../pages/Quote';
import Contact from '../contact/Contact';
const Router = () => {
  return (
    <BrowserRouter basename="https://acabados-y-estilos-en-madera.vercel.app/">
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Servicios' element={<Carpenter/>} />
        <Route path='/Blog' element={<Media/>} />
        <Route path='/Galeria' element={<Multimedia/>} />
        <Route path='/Cotizacion' element={<Quote/>} />
        <Route path='/contacto' element={<Contact/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router;