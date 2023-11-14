import React from 'react'
import './slide.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';


const SlideProducts = () => {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper__products">
        <SwiperSlide className='slider__products'>
            <h1 className='products__title'>Muebles de cocina</h1>
            <img className="img__slider" src="https://images.hola.com/imagenes/decoracion/20190711144547/decoracion-cocinas-muebles-madera/0-694-629/cocinas-madera-3t-t.jpg" alt="" />
            <p className='products__parrafo'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde optio, perferendis inventore maiores quidem minima repellendus ullam dolor fuga aliquam facilis odit velit vero nulla dolore aperiam necessitatibus cupiditate nam, temporibus deserunt facere explicabo. Laboriosam praesentium totam eos fugit provident?</p>
            <button className='products__btn'>Cotizar</button>
        </SwiperSlide> 
        
        <SwiperSlide className='slider__products'>
            <h1 className='products__title'>Muebles de cocina</h1>
            <img className="img__slider" src="https://images.hola.com/imagenes/decoracion/20190711144547/decoracion-cocinas-muebles-madera/0-694-629/cocinas-madera-3t-t.jpg" alt="" />
            <p className='products__parrafo'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde optio, perferendis inventore maiores quidem minima repellendus ullam dolor fuga aliquam facilis odit velit vero nulla dolore aperiam necessitatibus cupiditate nam, temporibus deserunt facere explicabo. Laboriosam praesentium totam eos fugit provident?</p>
            <button className='products__btn'>Cotizar</button>
        </SwiperSlide> 
        
        <SwiperSlide className='slider__products'>
            <h1 className='products__title'>Muebles de cocina</h1>
            <img className="img__slider" src="https://images.hola.com/imagenes/decoracion/20190711144547/decoracion-cocinas-muebles-madera/0-694-629/cocinas-madera-3t-t.jpg" alt="" />
            <p className='products__parrafo'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde optio, perferendis inventore maiores quidem minima repellendus ullam dolor fuga aliquam facilis odit velit vero nulla dolore aperiam necessitatibus cupiditate nam, temporibus deserunt facere explicabo. Laboriosam praesentium totam eos fugit provident?</p>
            <button className='products__btn'>Cotizar</button>
        </SwiperSlide> 

      </Swiper>
    </>
    
  )
}

export default SlideProducts;