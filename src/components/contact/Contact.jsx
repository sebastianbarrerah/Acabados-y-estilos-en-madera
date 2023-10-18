import React from 'react';
import {useForm} from 'react-hook-form'
import './contact.scss';

const Contact = () => {
  const {register, handleSubmit, reset, formState: {errors} } = useForm()
  const dataForm = (data) => {
    reset()
  }
  
  return (
    <section className="container__form">
        <h2 className="title__contact">Contacto</h2>
        <form className="form__contact" onSubmit={handleSubmit(dataForm)}>
            <input type="text" className="input__contact" placeholder='Ingresa tu nombre' {...register("Nombre", {required: true})}/>
            {errors.Nombre && <span className='required'>Este campo es requerido</span>}
            <input type="number" className="input__contact" placeholder='Ingresa tu celular' {...register("Celular", {minLength:10, maxLength:14})}/>
            <input type="email" className="input__contact" placeholder='Correo electronico' {...register("Correo", {required: true})}/>
            {errors.Correo && <span className='required'>Este campo es requerido</span>}
            <textarea className='input__contact2' cols="10" rows="7" placeholder='Aqui puedes dejar tu mensaje' {...register("Mensaje")}></textarea>
            <button className='btn__contacto'>Enviar</button>
        </form>
    </section>
  )
}

export default Contact;