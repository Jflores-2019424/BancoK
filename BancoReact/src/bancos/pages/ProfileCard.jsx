import React, { useEffect, useState } from 'react'
import { lsitUsers } from '../api/listUsers.api';
import { deleteUser } from '../api/deleteUser';
import Swal from 'sweetalert2';

export const ProfileCard = () => {

  const [perfil, setPerfil] = useState([])
  useEffect(() => {
    const fetchData = async () => {
        const result = await lsitUsers();
        setPerfil(result);
    };
    fetchData();
    }, []);

    const imprimir = async (id) => {
      const result = await deleteUser(id);
      if (result) {
        setPerfil((prevPerfil) => prevPerfil.filter((perfil) => perfil._id !== id));
    
        Swal.fire({
          icon: 'success',
          title: 'Genial',
          text: 'Se ha eliminado el usuario correctamente',
          confirmButtonText: 'Ok',
        });
      }
    };
  return (
    <>
    <div>
        
    {perfil.map((perfilActual, index) => {
  const id = perfilActual._id || ''; // Asigna un valor predeterminado si _id no está presente en perfilActual
  return (
        <div key={id} className='container bg-dark transalate m-2 p-2 border border-dark card'>
              <h5>Nombre: {perfilActual.name} </h5>
              <h5>Correo: {perfilActual.email} </h5>
              <h5>Cuenta: {perfilActual.numCuenta}</h5>

              <button className='btn btn-danger button' onClick={() => imprimir(id)}>
        Delete
      </button>

            </div>
          );
      })}

    </div>
    </>
  )
}