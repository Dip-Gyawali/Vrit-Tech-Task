import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
    <div className='flex items-center justify-between p-5 border-b-2 border-black'>
        {/* logo and name */}
        <h1 className='flex gap-1'><span className='text-[2vw] font-bold text-blue-600'>Vrit</span><span className='text-[2vw]'>Tech</span></h1>
        {/* links */}
        <div>
           <ul className='flex items-center justify-evenly gap-10 text-[1.3vw] cursor-pointer'>
              <NavLink to='/' style={({isActive})=>{
                    return {color:isActive?"#2563eb":"black"}
                }}>Task1</NavLink>

              <NavLink to='/task2' style={({isActive})=>{
                return {color:isActive?"#2563eb":"black"}
              }}>Task2</NavLink>

              <NavLink to='task3' style={({isActive})=>{
                return {color:isActive?"#2563eb":"black"}
              }}>Task3</NavLink>

              <NavLink to='task5' style={({isActive})=>{
                return {color:isActive?"#2563eb":"black"}
              }}>Task5</NavLink>
           </ul>
        </div>
    </div>
    <Outlet/>
    </>
  )
}
