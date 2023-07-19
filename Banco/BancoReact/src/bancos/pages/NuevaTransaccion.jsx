import React, { useState } from 'react'
import "../../index.css"
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';
import axios from 'axios';

export const NuevaTransaccion = () => {
  const navigate = useNavigate();
  const [cuentaOrigen, setCuentaOrigen] = useState('');
  const [cuentaDestino, setCuentaDestino] = useState('');
  const [monto, setMonto] = useState(0);
  const [descripcion, setDescripcion] = useState('');
  const [mensaje, setMensaje] = useState('');

  const onNavigateBack = () =>{
    navigate('/banco',{
      replace: true
    })
  } 

  const Alerta=()=>{
    Swal.fire({
      title: "Excelente",
      text: "Transferencia creada exitosamente",
      icon: "success",
      button: "Aceptar"
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:2005/api/create-transfencias', {
        cuentaOrigen,
        cuentaDestino,
        monto,
        descripcion,
      });
      
      
    } catch (error) {
      throw new Error(error)
    }
  };

  return (
    <div className='bg-dark container border border-dark mt-5 divi'>
        <h2 className=''>Transacciones</h2>
          <hr />
          <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
            <label  
                htmlFor="cuentaOrigen" 
                className="form-label">
                    Cuenta de Origen:
            </label>

          <input
            type="text"
            className="form-control"
            id="cuentaOrigen"
            value={cuentaOrigen}
            onChange={(e) => setCuentaOrigen(e.target.value)}
          />

        </div>

        <div className="mb-3">
            <label  
                htmlFor="cuentaDestino" 
                className="form-label">
                    Cuenta de Destino:
            </label>

          <input
            type="text"
            className="form-control"
            id="cuentaDestino"
            value={cuentaDestino}
            onChange={(e) => setCuentaDestino(e.target.value)}
          />

        </div>
        <div className="mb-3">
            <label  
                htmlFor="monto" 
                className="form-label">
                Monto:
            </label>

          <input
            type="number"
            className="form-control"
            id="monto"
            value={monto}
            onChange={(e) => setMonto(Number(e.target.value))}
          />

        </div>

        <div className="mb-3">
            <label 
                htmlFor="descripcion" 
                className="form-label">
                    Descripción:
             </label>

          <input
            type="text"
            className="form-control"
            id="descripcion"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />

        </div>

        <button 
            onClick={()=>
                Alerta()
            } 
            type="submit" 
            className="btn btn-primary button m-2 p-2">
                Confirmar
        </button>

        <button 
            onClick={()=>
                onNavigateBack()
            } 
            type="submit" 
            className="btn btn-primary button m-2 p-2">
                Cancelar
        </button>

      </form>
      {mensaje && <p>{mensaje}</p>}
    </div>

    </div>
  )
}
