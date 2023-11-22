import React from 'react'
import './marble.scss'
const Marble = () => {
  return (
    <section className="marble__container">
        <figure className="placas__container">
            <img src="https://www.tinostone.com/wp-content/uploads/2017/03/calacatta-1-500x500.jpg" alt="" className="placas" />

            <img src="https://sp-ao.shortpixel.ai/client/q_glossy,ret_img,w_500,h_500/https://mabello.com/wp-content/uploads/2023/06/mistralbeige.jpg" alt="" className="placas" />
            <img src="https://www.tinostone.com/wp-content/uploads/2017/03/calacatta-1-500x500.jpg" alt="" className="placas" />

            <img src="https://sp-ao.shortpixel.ai/client/q_glossy,ret_img,w_500,h_500/https://mabello.com/wp-content/uploads/2023/06/mistralbeige.jpg" alt="" className="placas" />
        </figure>

        <article className='container__marble--title'>
            <h1 className='marble__title'>Mármol</h1>
        </article>

        <article className="description__marble">
            <p className="marble__description--1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis animi aut, aliquid dignissimos commodi delectus aliquam! Expedita tempora quam perferendis adipisci labore porro neque impedit, recusandae quod soluta, temporibus vel iste rerum assumenda doloremque ipsum laboriosam consectetur quibusdam molestiae quisquam!</p>
            <p className="marble__description--2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure praesentium a earum, dicta natus rerum! Porro incidunt natus iure reiciendis, a, excepturi officia quos eveniet reprehenderit, voluptates quidem dolor ea corporis repudiandae possimus ipsum illo blanditiis minima? Facilis, dolorem commodi.</p>
        </article>

    </section>
  )
}

export default Marble