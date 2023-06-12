import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Login = () => {

  const navigate = useNavigate();

  const onLogin = () => {
    navigate('/',{
      replace: true
    });
  }

  const onRegister = () =>{
    navigate('/register',{
      replace: true
    })
  }

  return (
    //<div className="container">
        <div className='container-sm p-5 bg-dark bg-gradient position-absolute top-50 start-50 translate-middle'>
          <div className="row">
            <div className="bg-dark mb-3 row">

              <div className="col-2 mb-2 me-4">
                  <img src='src\assets\image\LogoBanco.png' 
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
          <input type="text" className='form-control mb-3' />
          <label>Password</label>
          <input type="password" className='form-control mb-3' />
        </div>

        <div className='text-center'>
          <button
          onClick={onLogin}
          className='btn btn-primary mb-2 button'
          >
            Login
          </button>

          <button
          onClick={onRegister}
          className='btn btn-primary mb-2 mx-3 button'
          >
            Registrarse
          </button>
        </div>
      </div>
    //</div>
  )
}
