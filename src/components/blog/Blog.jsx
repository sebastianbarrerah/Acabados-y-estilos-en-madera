import React, { useState } from 'react'
import './blog.scss'
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { saveUrl } from '../../features/slices/urls/Urlslice';

const Blog = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const irBlog = (e, imagen) => {
  e.preventDefault()
  console.log("esto es imagen tiene que ser el array", imagen);
  
    dispatch(saveUrl(imagen))
    navigate('/galeria');
  }
  
  const url1 = "https://hips.hearstapps.com/hmg-prod/images/cocina-de-madera-maisons-du-monde-1620300784.jpg?crop=1xw:0.639763779527559xh;center,top&resize=1200:*"
  const url2 = "https://serveiestacio.com/blog/wp-content/uploads/2021/04/herramientas-de-carpinteria_seveiestaci.jpg"

  const url3 = "https://www.reformasenmurcia.net/wp-content/uploads/2022/04/Carpinteri%CC%81a-en-Madera.jpg"

  const url4 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTIFgJXtPMztuBkSSNlPH2NGf-abnwCPCiKA&usqp=CAU"
  return (
    <section className='container__blog'>
      <div className="burbuja1" onClick={(e) => {irBlog(e, [url1, url2, url3, url4])}}>
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

