import React from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import './budget.scss'

const Budget = () => {
  return (
    <section className="container__budget">
        <aricle className="info__budge">
            <h1 className="title__budge">Cotización</h1>
            <p className="parrafo__budge">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos error, quisquam praesentium nisi eligendi debitis. Aliquid ullam possimus ducimus optio!</p>
        </aricle>

        <article className="container__form">
            <form className="form__budget">
                <label className="label__text">
                    Producto
                    <select name="" className='select__input'>
                        <option value="Cocinas">Cocinas</option>
                        <option value="algo">Muebles</option>
                        <option value="todo">Escaparates</option>
                    </select>
                </label>
            
                <label className="label__text">
                    Cantidad
                    <select name="" className='select__input'>
                        <option value="Nada" >1</option>
                        <option value="algo">2</option>
                        <option value="todo">3</option>
                    </select>
                </label>
            
                <label className="label__text">
                    Material
                    <select name="" className='select__input'>
                        <option value="Nada">1</option>
                        <option value="algo">2</option>
                        <option value="todo">3</option>
                    </select>
                </label>
            </form>
    
            <Swiper navigation={true} modules={[Navigation]}                 className="mySwiper__budge">
                <SwiperSlide className='swiperSlider__budget'>
                    <img src="https://socoda.vteximg.com.br/arquivos/ids/175053-1000-1000/girona-cenizo-derecho-24-05-2022.jpg?v=637890045613730000" alt="" className='img__slider'/>
                </SwiperSlide>
                <SwiperSlide className='swiperSlider__budget'>
                    <img src="https://socoda.vteximg.com.br/arquivos/ids/175053-1000-1000/girona-cenizo-derecho-24-05-2022.jpg?v=637890045613730000" alt="" className='img__slider'/>
                </SwiperSlide>
                <SwiperSlide className='swiperSlider__budget'>
                    <img src="https://socoda.vteximg.com.br/arquivos/ids/175053-1000-1000/girona-cenizo-derecho-24-05-2022.jpg?v=637890045613730000" alt="" className='img__slider'/>
                </SwiperSlide>

            </Swiper>

        </article>
        <div className="budget__btn">
            <button className='btn__budget'>Cotizar</button>
            <button className='btn__budget'>Programar cita</button>
        </div>
    </section>
  )
}

export default Budget;