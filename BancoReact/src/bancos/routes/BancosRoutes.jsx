import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { BancoMenu } from '../pages/BancoMenu'
import { NavBar } from '../../ui/pages/NavBar'
import { BancoProfile } from '../pages/BancoProfile'
import { Favoritos } from '../pages/Favoritos'
import { Transacciones } from '../pages/Transacciones'
import { ListProfile } from '../pages/ListProfile'

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
              
              <Route path='listProfile' element={<ListProfile/>}/>

              <Route path='/' element={<Navigate to="banco"/>}/>
          </Routes>
      </div>
    </>
  )
}
