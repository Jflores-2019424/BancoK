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
    <div>
        
        {perfil.map((perfilActual, index) => {
          return (
            <div key={perfilActual._id} className='container bg-dark transalate m-2 p-2 border border-dark card'>
              <h5>Nombre: {perfilActual.name} </h5>
              <h5>Correo: {perfilActual.email} </h5>
              <h5>NO: {perfilActual.cellphone}</h5>

              <button className='btn btn-danger button'>
                Delete
              </button>
            </div>
          );
      })}

    </div>
    </>
  )
}