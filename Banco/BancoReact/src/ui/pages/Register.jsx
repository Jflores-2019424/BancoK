import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { createUser } from '../API/register.api';
import Swal from 'sweetalert2';


export const Register = () => {

  const onNavigateBack = () =>{
    navigate('/banco',{
      replace: true
    })
  } 

  const [name, setName] = useState('')
  const [lastname, setLastname] = useState('')
  const [dpi, setDpi] = useState('')
  const [direction, setDirection] = useState('')
  const [cellphone, setCellphone] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('') 
  
  const imprimir = async (e) => {
    e.preventDefault();

    const result = await createUser(name, lastname, dpi,direction, cellphone, email, password)
    if (result) {   {/* alerta por si la creacion se dio correctamente */}
    Swal.fire({
      icon: 'success',
      title: "Genial",
      text: "Se ha creado el usuario correctamente",
      confirmButtonText: "Ok"
    }).then((r) => {
      if (r.isConfirmed) {
        navigate('/banco');
      } else {
        navigate('/banco');
      }
    });
  } else {
    Swal.fire({
      icon: 'error',
      title: "Error",
      text: "No se pudo crear el usuario",
      confirmButtonText: "Ok"
    });
  }
  }


  const navigate = useNavigate();


  return (
    <div className='container p-5 bg-dark bg-gradient position-absolute top-50 start-50 translate-middle'>
      <h1 className='bg-dark mb-3 px-5 py-3'>Registrarse</h1>
      <hr /> 
      <label>Nombres</label>
      <input type="text"  className='form-control mb-4 '
      onChange={(e) => setName(e.target.value)} />
      <label>Apellidos</label>
      <input type="text"  className='form-control mb-4'
      onChange={(e) => setLastname(e.target.value)}/>
      <label>DPI</label>
      <input type="number"  className='form-control mb-4'
      onChange={(e) => setDpi(e.target.value)}/>
      <label>Direccion</label>
      <input type="text"  className='form-control mb-4'
      onChange={(e) => setDirection(e.target.value)}/>
      <label>Numero de Telefono</label>
      <input type="number"  className='form-control mb-4'
      onChange={(e) => setCellphone(e.target.value)}/>
      <label>Email</label>
      <input type="email"  className='form-control mb-4'
      onChange={(e) => setEmail(e.target.value)}/>
      <label>Contraseña</label>
      <input type="password"  className='form-control mb-4'
      onChange={(e) => setPassword(e.target.value)}/>

      <button
          onClick={imprimir}
          className='btn btn-primary mb-2 button'
          >
            Crear
      </button>

      <button
      onClick={onNavigateBack}
      className='btn btn-primary mb-2 button mx-2'
      >
        Cancelar
    </button>
    </div>
  )
}