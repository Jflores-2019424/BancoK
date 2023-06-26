import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Login } from '../ui/pages/Login'
import { BancosRoutes } from '../bancos/routes/BancosRoutes'
import { Register } from '../ui/pages/Register'

export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path="login" element={<Login/>}/>
            
            <Route path='register' element={<Register/>}/>

            <Route path="/*" element={<BancosRoutes/>}/>
         </Routes>
    </>
  )
}
