import React from 'react'
import Slider from '../components/sliderHome/Slider'
import OurCompany from '../components/ourCompany/OurCompany'
import Category from '../components/category/Category'
import Benefits from '../components/benefits/Benefits'
import Location from '../components/location/Location'
import Footer from '../components/footer/Footer'
import Contact from '../components/contact/Contact'

const Home = () => {
  return (
    <>
    <Slider/>
    <OurCompany/>
    <Category/>
    <Benefits/>
    <Location/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default Home;