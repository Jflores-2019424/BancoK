import React from 'react'
import { BancoProfile } from './BancoProfile'

export const ListProfile = () => {
  return (
    <div className='container border border-dark mt-5 divi'>
        <h2 className=''>Lista de perfiles</h2>
        <hr />
        <div>
            <ul>
                <li><BancoProfile/></li>
            </ul>
        </div>
    </div>
  )
}
