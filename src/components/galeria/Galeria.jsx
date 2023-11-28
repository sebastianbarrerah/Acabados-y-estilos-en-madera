import React from 'react';
import './galeria.scss'
import { useSelector } from 'react-redux';

const Galeria = () => {
    const imagenes = useSelector(state => state.urlImagenes)
    console.log(imagenes, 'esto es en galeria');
    return (
        <>
            <h1 style={{width: "100%", textAlign: "center", fontSize: "40px", color: "red", borderBottom: "2px solid red", padding: "5px 0"}}
            >Galeria de imagenes</h1>
            
            <section className='container__galerias'>
                {
                    imagenes.map((item, index) => (
                        <>
                            <section className='galeria' key={index}>
                                <a className='galeriaA' href={`#imagen${index}`}>
                                    <img src={item} alt="imagen acabados y estilos en madera" className="foto" />
                                </a>
                            </section>
                            {/* ----------------------------------------------------------------------------- */}
                            <article className='container__blog' id={`imagen${index}`}>
                                <a href={`#imagen${index - 1}`} className='next'>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="30" fill='white'><path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z" /></svg></a>

                                <img src={item} alt="imagen acabados y estilos en madera" />

                                <a href={`#imagen${index + 1}`} className='next'><svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="30" fill='white'><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" /></svg></a>

                                <a href="#" className="close"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" color='white' ><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" fill='white'/></svg></a>
                            </article>
                        </>
                    ))
                }
            </section>

        </>
    )
}

export default Galeria;