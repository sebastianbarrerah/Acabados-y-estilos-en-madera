import React from 'react';
import './galeria.scss'
import { useSelector } from 'react-redux';

const Galeria = () => {
    const imagenes = useSelector(state => state.urlImagenes)
    console.log(imagenes, 'esto es en galeria');
  return (
        <>
        {
            imagenes.map((item, index) => (
                <a  className='galeria__imagenes' href={`imagen${index}`}>
                    <img src={item} alt="imagen acabados y estilos en madera" className={`imagen__galeria${index}`}/>
                </a>
            ))
        }
        
        </>
  )
}

export default Galeria;