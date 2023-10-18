import React from 'react'
import './category.scss'
import carpinteria from '../../assets/images/carpinteria.png';
import casco from '../../assets/images/casco.png';
import reparar from '../../assets/images/reparar.png';
import pintura from '../../assets/images/pintura.png';
import { useState } from 'react'
import WeDo from '../weDo/WeDo';
const Category = () => {
    const [elementSelect, setElementSelect] = useState("Carpinteria")
    const handleSelect = (e) => {
        let key1 = e.target.alt
        let key2 = e.target.outerText
        setElementSelect(key1?key1:key2)
    }

    return (
        <section className="container__category">
            <div className="category__icons">
                <div className={`card__icons ${elementSelect === "Carpinteria"? "active": null}`} onClick={ (e) => {handleSelect(e)}}>
                    <img src={carpinteria} alt="Carpinteria" className='icon__category' />
                    <span className="description__category" >Carpinteria</span>
                </div>

                <div className={`card__icons ${elementSelect === "Ebanisteria"? "active": null}`} onClick={ (e) => {handleSelect(e)}}>
                    <img src={casco} alt="Ebanisteria" className='icon__category' />
                    <span className='description__category'>Ebanisteria</span>

                </div>

                <div className={`card__icons ${elementSelect === "Diseño de interiores"? "active": null}`} onClick={ (e) => {handleSelect(e)}}>
                    <img src={reparar} alt="Diseño de interiores" className='icon__category' />
                    <span className='description__category'>Diseño de interiores</span>

                </div>

                <div className={`card__icons ${elementSelect === "Construccion"? "active": null}`} onClick={ (e) => {handleSelect(e)}}>
                    <img src={pintura} alt="Construccion" className='icon__category' />
                    <span className='description__category'>Construcción</span>
                </div>
            </div>
            <WeDo elementSelect={elementSelect}/>
        </section>
    )
}

export default Category