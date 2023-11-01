import React from 'react'
import Topbar from '../topbar/Topbar'
import Sidebar from '../sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

const RootLayout = ({children}) => {
  return (
    <>
      <Topbar/>
      <div className='container'>
        <Sidebar/>
        <Outlet/>
      </div>
    </>
  )
}

export default RootLayout