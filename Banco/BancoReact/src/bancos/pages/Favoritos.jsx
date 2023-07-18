import React from 'react'
import { ProfileCard } from './ProfileCard'

export const Favoritos = () => {
  return (
    <div className='container border border-dark mt-5 divi p-2'>
        <h2 className=''>Favoritos</h2>
        <hr />
        <div className=''>
            <ProfileCard/>
        </div>
    </div>
  )
}
