import React, { useEffect } from 'react'
import "../../index.css"
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';

export const Transacciones = () => {
  const navigate = useNavigate();
  
  const onNavigate = () =>{
    navigate('/nuevaTransaccion')
  }

  const [transactionHistory, setTransactionHistory] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      fetchTransactionHistory(token);
    }
  }, []);

  const fetchTransactionHistory = async (token) => {
    try {
      const response = await fetch('http://localhost:2005/api/transaction-historial', {
        headers: {
          'token': `${token}`
        }
      });

      if (response.ok) {
        const data = await response.json();
        setTransactionHistory(data);
      } else if (response.status === 401) {
        console.log('Acceso no autorizado');
      } else if (response.status === 404) {
        console.log('Usuario no encontrado');
      } else {
        console.log('Error en la solicitud');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='container border border-dark mt-5 divi'>
        <h2 className=''>Transacciones</h2>
          <hr />
          <button 
          onClick={onNavigate}
          className='button2 container-right btn'>
            Hacer Transferencia
          </button>
          <br />
          <br />
        <div className='container border border-dark bg-dark p-2 mb-3'>
        <ul className="transaction-list">
          {transactionHistory.map((transaction, index) => (
            <li className='card' key={index}>
              <p><strong className="font-weight-bold">Cuenta Origen: </strong>{transaction.cuentaOrigen}</p>
              <p><strong className="font-weight-bold">Cuenta Destino: </strong>{transaction.cuentaDestino}</p>
              <p><strong className="font-weight-bold">Monto: </strong>{transaction.monto}</p>
              <p><strong className="font-weight-bold">Descripción: </strong>{transaction.descripcion}</p>
              <p><strong className="font-weight-bold">Fecha: </strong>{transaction.date}</p>
            </li>
          ))}
        </ul>
        </div>
    </div>
  )
}
