import React, { useEffect, useState } from 'react'
import { lsitUsers } from '../api/listUsers.api';

export const BancoProfile = () => {

  const [perfil, setPerfil] = useState([])
  useEffect(() => {
    const fetchData = async () => {
        const result = await lsitUsers();
        setPerfil(result);
    };
    fetchData();
    }, []);


  return (
    <>
    <div className='container border border-dark mt-5 divi p-3'>
        
        <h2>Perfil</h2>
        <hr />
        {perfil.map((perfilActual, index) => {
          return (
            <div key={perfilActual._id} className='container bg-dark transalate p-2'>
              <h3>Nombre: {perfilActual.name} </h3>
              <h5>Correo: {perfilActual.email} </h5>
              <h5>No</h5>
            </div>
          );
      })}

    </div>
    </>
  )
}