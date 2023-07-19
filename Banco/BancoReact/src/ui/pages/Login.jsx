import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from '../API/login-api';
import Swal from 'sweetalert2';
import  logo  from '../../assets/image/LogoBanco.png'

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onLogin = async (e) =>{
    e.preventDefault();
    const result = await login(email, password);
    if(result){
        Swal.fire({
            icon: "success",
            title: "Genial!",
            text: "Ha iniciado sesión correctamente!",
            confirmButtonText: "Ok",
        }).then(r =>{
            if(r.isConfirmed){
                window.location.href = "/banco";
            } else {
                window.location.href = "/";
            }
        });
    }
};
  const onRegister = () =>{
    navigate('/register',{
      replace: true
    })
  }

  return (
    <>
    <div className="container">
        <div className='container-sm p-5 bg-dark bg-gradient position-absolute top-50 start-50 translate-middle'>
          <div className="row">
            <div className="bg-dark mb-3 row">

              <div className="col-2 mb-2 me-4">
                  <img src={ logo } 
                    width="100" 
                    height="100"
                    className="border border-1 border-dark rounded-circle bg-dark rotate"
                  />
              </div>

              <div className='col-8 pt-4'>
                <h1 className='text-center '>Login</h1>      
              </div>

          </div>
        </div>

        <div className='container '>
          <label>Email</label>
          <input value={email} onChange={({target: {value}}) => setEmail(value)} type="email" className='form-control mb-3' />
          <label>Password</label>
          <input value={password} onChange={({target: {value}}) => setPassword(value)} type="password" className='form-control mb-3' />
        </div>

        <div className='text-center'>
          <button
          onClick={(e) => onLogin(e)}
          className='btn btn-primary mb-2 button'
          >
            Login
          </button>
        </div>
      </div>
    </div>
    </>
  )
}