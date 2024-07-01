"use client"
import React, { useState } from 'react'
import SideNav from '../_components/SideNav'
import TopHeader from '../_components/TopHeader'

function layout({children}) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const sideBarHandler = () =>{
        setIsSidebarOpen(!isSidebarOpen)
    }
  return (
    <div>
        
        <div className={`h-full w-96 bg-white md:flex md:w-64 flex-col fixed inset-y-0 z-50 ${isSidebarOpen ? 'flex':'hidden'}`}>
        <SideNav  sideBarHandler={sideBarHandler}/>
       
        </div>
        <div className="md:ml-64">
        <TopHeader sideBarHandler={sideBarHandler}/>
        {children}
        </div>
        
    </div>
    
  )
}

export default layout