import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { BancoMenu } from '../pages/BancoMenu'
import { NavBar } from '../../ui/pages/NavBar'
import { BancoProfile } from '../pages/BancoProfile'
import { Favoritos } from '../pages/Favoritos'
import { Transacciones } from '../pages/Transacciones'

export const BancosRoutes = () => {
  return (
    <>
      <NavBar/>

      <div>
          <Routes>
              <Route path='banco' element={<BancoMenu/>}/>

              <Route path='bancoProfile' element={<BancoProfile/>}/>

              <Route path='favoritos' element={<Favoritos/>}/>

              <Route path='transacciones' element={<Transacciones/>}/>

              <Route path='/' element={<Navigate to="banco"/>}/>
          </Routes>
      </div>
    </>
  )
}
