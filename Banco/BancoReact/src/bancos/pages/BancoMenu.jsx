import React from 'react'
import { Favoritos } from './Favoritos'
import { Transacciones } from './Transacciones'
import { ProfileCard } from './ProfileCard'

export const BancoMenu = () => {
  return (
    <div className='container border border-dark mt-3 mb-5 divi p-3'>
      <h1>Menu</h1>
      <hr />
      <div className='border border-dark container divi p-2'>
      <h2>Perfiles</h2>
      <hr />
      <ProfileCard/> 
      </div>
      <Transacciones/> 
      <Favoritos/> 
    </div>
  )
}