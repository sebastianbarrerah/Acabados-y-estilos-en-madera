import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from '../../pages/Home';
import Carpenter from '../../pages/Carpenter';
import Header from '../header/Header';
import Galeria from '../galeria/Galeria';
const Router = () => {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Carpinteria' element={<Carpenter/>} />
        <Route path='/galeria' element={<Galeria/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router;