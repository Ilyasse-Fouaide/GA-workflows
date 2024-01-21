import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function Header() {
  return (
    <div>
      <div className='w-full bg-slate-700 text-white p-5 space-x-5'>
        <NavLink to={'sign-in'}>Sign-in</NavLink>
        <NavLink to={'sign-up'}>Sign-up</NavLink>
      </div>
      <Outlet />
    </div>
  )
}

export default Header