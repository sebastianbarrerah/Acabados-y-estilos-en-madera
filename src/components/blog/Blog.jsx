import React, { useState } from 'react'
import './blog.scss'
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { saveUrl } from '../../features/slices/urls/Urlslice';

const Blog = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const irBlog = (e) => {
   const desgloce = e.target.childNodes;
   const array = []
   let numeroHijos = Object.keys(desgloce).length;
   for (let i = 0; i < numeroHijos; i++) {
    const element = desgloce[i].src;
    array.push(element)
  }
  console.log(array, 'esto es array');
   navigate('/galeria');
   dispatch(saveUrl(array))
   console.log('listo, yas se mandaron los datos', array);
  }
  return (
    <section className='container__blog'>
      <div className="burbuja1" onClick={(img) => {irBlog(img)}}>
        <img src="https://hips.hearstapps.com/hmg-prod/images/cocina-de-madera-maisons-du-monde-1620300784.jpg?crop=1xw:0.639763779527559xh;center,top&resize=1200:*" alt="" style={{display: "none"}} />
        <img src="https://hips.hearstapps.com/hmg-prod/images/cocina-de-madera-maisons-du-monde-1620300784.jpg?crop=1xw:0.639763779527559xh;center,top&resize=1200:*" alt="" style={{display: "none"}} />

        <img src="https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2023/04/26/16825229729564.jpg" alt="" style={{display: "none"}} />
        <img src="https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2023/04/26/16825229729564.jpg" alt="" style={{display: "none"}} />
      </div>

      <div className="burbuja2" onClick={(data) => {irBlog(data)}}>
      <img src="https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2023/04/26/16825229729564.jpg" alt="" style={{display: "none"}} />
        <img src="https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2023/04/26/16825229729564.jpg" alt="" style={{display: "none"}} />
      </div>

      <div className="burbuja3" onClick={(data) => {irBlog(data)}}>
      <img src="https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2023/04/26/16825229729564.jpg" alt="" style={{display: "none"}} />
        <img src="https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2023/04/26/16825229729564.jpg" alt="" style={{display: "none"}} />
      </div>

      <h1 className='title__blog'>Blog</h1>

      <div className="burbuja4" onClick={(data) => {irBlog(data)}}>
      <img src="https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2023/04/26/16825229729564.jpg" alt="" style={{display: "none"}} />
        <img src="https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2023/04/26/16825229729564.jpg" alt="" style={{display: "none"}} />
      </div>

      <div className="burbuja5" onClick={(data) => {irBlog(data)}}>
      <img src="https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2023/04/26/16825229729564.jpg" alt="" style={{display: "none"}} />
        <img src="https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2023/04/26/16825229729564.jpg" alt="" style={{display: "none"}} />
      </div>

      <div className="burbuja6" onClick={(data) => {irBlog(data)}}>
      <img src="https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2023/04/26/16825229729564.jpg" alt="" style={{display: "none"}} />
        <img src="https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2023/04/26/16825229729564.jpg" alt="" style={{display: "none"}} />
        
      </div>
    </section>
  )
}

export default Blog

