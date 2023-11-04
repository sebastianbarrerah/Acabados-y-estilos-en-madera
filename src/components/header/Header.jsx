import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './header.scss';
import logo from '../../assets/images/logo.png'
import expand from '../../assets/images/expand.png'

const Header = () => {
    const [openMenu, setOpenMenu] = useState(false)
    const navigate = useNavigate()
    const toggleMenu = () => {
        setOpenMenu(true)
        console.log("funciona");
    }
    return (
        <header className='header'>
            <figure className='header__figure'>
                <img src={logo} alt="" className='header__figure--img' onClick={() => navigate("/")} />
            </figure>
            <nav className="header__nav">
                <ul className='header__ul'>
                    <li className='header__ul--li'><a href="" className='nav__ancora active__header'>Inicio</a></li>
                    <li className='header__ul--li'>
                        <a href="" className='nav__ancora lista__servicios'>Servicios <img src={expand} alt="" className='icon__expand' /></a>
                        <div className='header__servicios'>
                            <ul className="servicios__ul">
                                <li className='header__li--servicios'><a href="" className='ancora--servicios'>Cocinas</a></li>
                                <li className='header__li--servicios'><a href="" className='ancora--servicios'>Muebles</a></li>
                                <li className='header__li--servicios'><a href="" className='ancora--servicios'>driwall</a></li>
                                <li className='header__li--servicios'><a href="" className='ancora--servicios'>vitrinas</a></li>
                                <li className='header__li--servicios'><a href="" className='ancora--servicios'>Marmol</a></li>
                                <li className='header__li--servicios'><a href="" className='ancora--servicios'>Electricidad</a></li>
                                <li className='header__li--servicios'><a href="" className='ancora--servicios'>Obras</a></li>
                                <li className='header__li--servicios'><a href="" className='ancora--servicios'>Acabados</a></li>
                                <li className='header__li--servicios'><a href="" className='ancora--servicios '>Remodelación</a></li>
                            </ul>
                        </div>
                    </li>
                    <li className='header__ul--li'><a href="" className='nav__ancora'>Carpinteria</a></li>
                    <li className='header__ul--li'><a href="" className='nav__ancora'>Blog</a></li>
                    <li className='header__ul--li'><a href="" className='nav__ancora'>Cotiza aquí</a></li>
                    <li className='header__ul--li'><a href="" className='nav__ancora'>Contacto</a></li>
                </ul>
            </nav>
            <svg xmlns="http://www.w3.org/2000/svg" height="44" viewBox="0 -960 960 960" width="44" fill='#BB1F25' onClick={toggleMenu}><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" className='burger__icon' /></svg>

            <section className={` menu ${openMenu? "active" : ""}`}>
                <svg xmlns="http://www.w3.org/2000/svg" height="44" viewBox="0 -960 960 960" width="44" fill='#BB1F25' className='close' onClick={() => setOpenMenu(false)} ><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg>
                <h2 className='title__burger'>Menú</h2>
                <ul className='ul__burger'>
                    <li><a href="" className='li__burger'>Carpinteria</a></li>
                    <li><a href="" className='li__burger'>Electrico</a></li>
                    <li><a href="" className='li__burger'>Construcción</a></li>
                    <li><a href="" className='li__burger'>Cotización</a></li>
                    <li><a href="" className='li__burger'>Trabaja con nosotros</a></li>
                    <li><a href="" className='li__burger'>Quienes somos</a></li>
                    <li><a href="" className='li__burger'>Donde estamos ubicados</a></li>
                    <li><a href="" className='li__burger'>Contacto</a></li>
                </ul>
                <figure className="redes">
                    <a href="">
                        <img src="https://cdn-icons-png.flaticon.com/512/1384/1384095.png" className='wpp__redes' alt="Whatsaap icono" />
                    </a>
                    <a href="">
                        <img src="https://cdn-icons-png.flaticon.com/512/81/81341.png" className='face__redes' alt="facebook" />
                    </a>
                    <a href="">
                        <img src="https://cdn-icons-png.flaticon.com/512/1384/1384015.png" className='ig__redes' alt="instagram" />
                    </a>
                </figure>
                <span className='span__burger'>Acabados y estilos en madera</span>
            </section>
        </header>

    )
}

export default Header;