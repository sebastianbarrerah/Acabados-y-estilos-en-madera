import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from '../../pages/Home';
import Carpenter from '../../pages/Carpenter';
import Header from '../header/Header';
const Router = () => {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Carpinteria' element={<Carpenter/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router;