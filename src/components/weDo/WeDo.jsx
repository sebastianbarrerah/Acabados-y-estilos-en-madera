import React from 'react'
import './wedo.scss'
import { useState, useEffect } from 'react'
import { dataCategory } from './dataCategoryHook'
import {useNavigate} from 'react-router-dom'

const WeDo = ({elementSelect}) => {
    const navigate = useNavigate()
    const [seleccionado, setSeleccionado] = useState()
    const [hola, setHola] = useState()
    let key = elementSelect;
    useEffect( () => {
        for (let i = 0; i < dataCategory.length; i++) {
            const element = dataCategory[i];
            if ( element.type === key){
                setSeleccionado(element)
            }
        }
    },[elementSelect])

    const irCotizacion = () => {
        navigate("/Cotizacion")
    }
    const irVermas = () => {
        navigate("/Blog")
    }

    return (
        <div className='container__create'>
        <span className="create__title">Que hacemos</span>
            {/* derecho */}
            <div className="card__create">
                <figure className="container__create--img">
                    <img src={seleccionado?seleccionado.rightOne.image:null} alt={seleccionado?seleccionado.rightOne.alt:null} className="create__img" />
                </figure>
                <div className="info__create">
                    <h3 className='title__create--div'>{seleccionado?seleccionado.rightOne.title:null}</h3>
                    <p className="description__create">{seleccionado?seleccionado.rightOne.description:null}</p>
                </div>
            </div>

            {/* reves */}
            <div className="card__create--reves">
                <figure className="container__create--img">
                    <img src={seleccionado?seleccionado.left.image:null} alt={seleccionado?seleccionado.left.alt:null} className="create__img" />
                </figure>
                <div className="info__create">
                    <h3 className='title__create--div'>{seleccionado?seleccionado.left.title:null}</h3>
                    <p className="description__create">{seleccionado?seleccionado.left.description:null}</p>
                </div>
            </div>

            {/* derecho */}
            <div className="card__create">
                <figure className="container__create--img">
                    <img src={seleccionado?seleccionado.rightTwo.image:null} alt={seleccionado?seleccionado.rightTwo.alt:null} className="create__img" />
                </figure>
                <div className="info__create">
                    <h3 className='title__create--div'>{seleccionado?seleccionado.rightTwo.title:null}</h3>
                    <p className="description__create">{seleccionado?seleccionado.rightTwo.description:null}</p>
                </div>
            </div>

            <div className="btns__create">
                <button className="btn__cotizacion" onClick={navigate(irCotizacion)}>Cotización</button>
                <button className="btn__create--mas" onClick={navigate(irVermas)}>Ver más</button>
            </div>
            
        </div>
    )
}

export default WeDo;