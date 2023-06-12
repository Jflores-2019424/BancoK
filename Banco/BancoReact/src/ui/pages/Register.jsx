import React from 'react'
import { useNavigate } from 'react-router-dom';

export const Register = () => {

  const navigate = useNavigate();

  const onLogin = () => {
    navigate('/',{
      replace: true
    });
  }

  return (
    <div className='container p-5 bg-dark bg-gradient position-absolute top-50 start-50 translate-middle'>
      <h1 className='bg-dark mb-3 px-5 py-3'>Registrarse</h1>
      <hr /> 
      <label>Nombres</label>
      <input type="text"  className='form-control mb-4 '/>
      <label>Apellidos</label>
      <input type="text"  className='form-control mb-4'/>
      <label>Email</label>
      <input type="text"  className='form-control mb-4'/>
      <label>Contraseña</label>
      <input type="text"  className='form-control mb-4'/>

      <button
          onClick={onLogin}
          className='btn btn-primary mb-2 button'
          >
            Login
      </button>
    </div>
  )
}
