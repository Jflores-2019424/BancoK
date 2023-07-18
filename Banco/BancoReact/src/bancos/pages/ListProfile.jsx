import React from 'react'
import { ProfileCard } from './ProfileCard'

export const ListProfile = () => {
  return (
    <div className='container border border-dark mt-5 divi'>
        <h2 className='m-2 bg-dark p-3'>Lista de perfiles</h2>
        <hr />
        <div className='p-2'>
            <ul>                
                <li><ProfileCard/></li>                
            </ul>
        </div>
    </div>
  )
}
