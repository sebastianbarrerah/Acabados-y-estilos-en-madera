import React from 'react'
import './carpentry.scss'
import { colorTones } from './hookTones'

const Carpentry = () => {

  return (
    <section className='container__carpentry'>

      <article className="carpentry__tones">
        <h1 className='title__carpentry'>Carpinteria</h1>
        <section className='container__tones'>
          {
            colorTones.map((element, index) => (
                <div key={index} className='card__tones'>
                  <img src={element.photo} alt={element.alt} className='img__tones' />
                  {/* <span className='title__tones'>{element.title}</span> */}
                </div>
            ))
          }
        </section>
      </article>

      <article className="carpetry__products">
        <h1>chao</h1>
      </article>
    </section>
  )
}

export default Carpentry