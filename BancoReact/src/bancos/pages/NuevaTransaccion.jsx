import React from 'react'
import { useNavigate } from 'react-router-dom'

export const NuevaTransaccion = () => {
    const navigate = useNavigate();

    const onNavigateBack = () =>{
        navigate(-1)
    }

  return (
    <div className='container bg-dark mt-5 p-2'>
        <h1>Transaccion</h1>
        <hr />
        <div className='p-3'>
            <input type="text" className='form-control mb-4' placeholder='Numero de Cuenta'/>
            <input type="text" className='form-control mb-4' placeholder='Monto' />
            <input type="text" className='form-control mb-4' placeholder='Codigo de confirmacion'/>

            <div className='text-end'>
                <button className='btn button2'>
                    Confirmar
                </button>

                <button onClick={onNavigateBack} className='btn button2'>
                    Cancelar
                </button>
            </div>
        </div>
    </div>
  )
}
