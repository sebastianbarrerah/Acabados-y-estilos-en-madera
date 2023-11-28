import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './slider.scss'
const Slider = () => {

  return (
    <Swiper
    cssMode={true}
    navigation={true}
    pagination={true}
    mousewheel={true}
    keyboard={true}
    modules={[Navigation, Pagination, Mousewheel, Keyboard]}
    className="mySwiper__acabados"
    >
    <SwiperSlide className='slider__card'><img className='imagen__slider' src="https://www.mndelgolfo.com/blog/wp-content/uploads/2017/03/cuidado-de-herramientas-carpinteria.jpg" alt="" /></SwiperSlide>
    <SwiperSlide className='slider__card'><img className='imagen__slider' src="https://www.mndelgolfo.com/blog/wp-content/uploads/2018/03/Todo-lo-que-necesitas-saber-para-armar-tu-taller-de-carpinteri%CC%81a.jpg" alt="" /></SwiperSlide>
    <SwiperSlide className='slider__card'><img className='imagen__slider' src="https://dereformaenalicante.com/wp-content/uploads/2023/04/precauciones-seguridad-carpinteria-madera.jpg" alt="" /></SwiperSlide>
    <SwiperSlide className='slider__card'><img className='imagen__slider' src="https://www.barral.com/blog/wp-content/uploads/2020/05/herramientas-carpintero.jpg" alt="" /></SwiperSlide>
    <SwiperSlide className='slider__card'><img className='imagen__slider' src="https://www.barral.com/blog/wp-content/uploads/2020/05/herramientas-carpintero.jpg" alt="" /></SwiperSlide>
    <SwiperSlide className='slider__card'><img className='imagen__slider' src="https://www.barral.com/blog/wp-content/uploads/2020/05/herramientas-carpintero.jpg" alt="" /></SwiperSlide>
    <SwiperSlide className='slider__card'><img className='imagen__slider' src="https://www.barral.com/blog/wp-content/uploads/2020/05/herramientas-carpintero.jpg" alt="" /></SwiperSlide>
   
  </Swiper>
  )
}

export default Slider;