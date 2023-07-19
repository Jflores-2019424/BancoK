import React, { useEffect, useState } from 'react'
import { lsitUsers } from '../api/listUsers.api';
import { deleteUser } from '../api/deleteUser';

export const ProfileCard = () => {

  const [perfil, setPerfil] = useState([])
  useEffect(() => {
    const fetchData = async () => {
        const result = await lsitUsers();
        setPerfil(result);
    };
    fetchData();
    }, []);

    const imprimir =async (e)=> {
      e.preventDefault()
      const result = await deleteUser(_id)
      if(result) {
        Swal.fire({
          icon: 'success',
          title: "Genial",
          text: "Se ha agendado el evento correctamente",
          confirmButtonText: "Ok"
        }).then((r) => {
          if (r.isConfirmed) {
            navigate('/eventos');
          } else {
            navigate('/eventos');
          }
        });
      } 
    }

  return (
    <>
    <div>
        
        {perfil.map((perfilActual, index) => {
          return (
            <div key={perfilActual._id} className='container bg-dark transalate m-2 p-2 border border-dark card'>
              <h5>Nombre: {perfilActual.name} </h5>
              <h5>Correo: {perfilActual.email} </h5>
              <h5>Cuenta: {perfilActual.numCuenta}</h5>

              <button className='btn btn-danger button' onClick={imprimir}>
                Delete
              </button>
            </div>
          );
      })}

    </div>
    </>
  )
}