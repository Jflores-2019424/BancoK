import React, { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { Login } from '../ui/pages/Login'
import { BancosRoutes } from '../bancos/routes/BancosRoutes'
import { Register } from '../ui/pages/Register'
import { isUserAuthenticated } from '../ui/helpers/LoginHelper'

export const AppRouter = () => {
   const navigate = useNavigate()
        useEffect(()=>{
        if(!isUserAuthenticated()){ navigate("/login")}
        }, [navigate]) 
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