import React from 'react'
import { ProfileCard } from './ProfileCard'

export const ListProfile = () => {
  return (
    <div className='container border border-dark mt-5 divi'>
        <h2 className=''>Lista de perfiles</h2>
        <hr />
        <div>
            <ul>                
                <li><ProfileCard/></li>                
            </ul>
        </div>
    </div>
  )
}
