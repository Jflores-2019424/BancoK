import React from 'react'
import { ProfileCard } from './ProfileCard'
import { useNavigate } from 'react-router-dom';

export const ListProfile = () => {
  const navigate = useNavigate();

  const onRegister = () =>{
    navigate('/register',{
      replace: true
    })
  }
  return (
    <div className='container border border-dark mt-5 divi'>
        <h2 className='m-2 bg-dark p-3'>Lista de perfiles</h2>
        <hr />
        <button
              onClick={onRegister}
              className='btn button2'
              >
                Registrarse
        </button>
        <div className='p-2'>
            <ul>                
                <li><ProfileCard/></li>                
            </ul>
        </div>
    </div>
  )
}
