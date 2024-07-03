import React from 'react'
import NavBar from '../components/NavBar'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div>
        <NavBar />
        <div className='mt-20'>
        <Outlet />
        </div>
    </div>
  )
}

export default RootLayout