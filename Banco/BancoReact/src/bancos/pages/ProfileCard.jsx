import React, { useEffect, useState } from 'react'
import { lsitUsers } from '../api/listUsers.api';

export const ProfileCard = () => {

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
        
        {perfil.map((perfilActual, index) => {
          return (
            <div key={perfilActual._id} className='container bg-dark transalate p-2 m-2'>
              <h5>Nombre: {perfilActual.name} </h5>
              <h5>Correo: {perfilActual.email} </h5>
              <h5>NO: {perfilActual.cellphone}</h5>
            </div>
          );
      })}

    </div>
    </>
  )
}