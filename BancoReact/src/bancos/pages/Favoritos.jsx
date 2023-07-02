import React from 'react'
import {BancoProfile} from "./BancoProfile"

export const Favoritos = () => {
  return (
    <div className='container border border-dark mt-5 divi p-2'>
        <h2 className=''>Favoritos</h2>
        <hr />
        <div className=''>
            <ul>
                <li><BancoProfile/></li>
            </ul>
        </div>
    </div>
  )
}
