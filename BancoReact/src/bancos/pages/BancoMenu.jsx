import React from 'react'
import { BancoProfile } from './BancoProfile'
import { Favoritos } from './Favoritos'
import { Transacciones } from './Transacciones'

export const BancoMenu = () => {
  return (
    <div className='container border border-dark mt-3 mb-5 divi p-3'>
      <h1>Menu</h1>
      <hr />
      <BancoProfile/> 
      <Transacciones/> 
      <Favoritos/> 
    </div>
  )
}