import React from 'react'
import "../../index.css"
import { Link, useNavigate } from 'react-router-dom'

export const Transacciones = () => {
  const navigate = useNavigate();
  
  const onNavigate = () =>{
    navigate('/nuevaTransaccion')
  }

  return (
    <div className='container border border-dark mt-5 divi'>
        <h2 className=''>Transacciones</h2>
          <hr />
          <button 
          onClick={onNavigate}
          className='button2 container-right btn'>
            Hacer Transferencia
          </button>
          <br />
          <br />
        <div className='container border border-dark bg-dark p-2 mb-3'>
            <p></p>
        </div>
    </div>
  )
}
