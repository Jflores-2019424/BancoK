import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { BancoMenu } from '../pages/BancoMenu'
import { NavBar } from '../../ui/pages/NavBar'
import { BancoProfile } from '../pages/BancoProfile'

export const BancosRoutes = () => {
  return (
    <>
      <NavBar/>

      <div>
          <Routes>
              <Route path='banco' element={<BancoMenu/>}/>

              <Route path='bancoProfile' element={<BancoProfile/>}/>

              <Route path='/' element={<Navigate to="banco"/>}/>
          </Routes>
      </div>
    </>
  )
}
