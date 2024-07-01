"use client"
import React, { useState } from 'react'
import { Upload, File, Shield, CircleX } from 'lucide-react'
import Image from 'next/image'

function SideNav({sideBarHandler}) {
    const [activeIndex, setActiveIndex] = useState()
    const menuList=[
        {
            id:1,
            name:'Upload',
            icon: Upload,
            path:'/upload'
        },
        {
            id:2,
            name:'Files',
            icon: File,
            path:'/files'
        },
        {
            id:3,
            name:'Upgrade',
            icon: Shield,
            path:'/upgrade'
        }
    ]
  return (
    <div className='shadow border-r h-full'>
        <div className='p-5 border-b flex flex-row justify-between items-center '>
            <Image src="/logo.svg" width={150} height={100} alt="file share app logo"/>
            <CircleX onClick={sideBarHandler} className='md:hidden'/>
        </div>
        <div className='flex flex-col float-left text-left w-full'>
            {menuList.map((item, index)=>{
                return(
                    <button key={item.id} className={`flex gap-2 p-4 px-6 hover:bg-gray-100 w-full
                    text-gray-500 ${activeIndex === index ? 'text-primary bg-blue-50':''}`} onClick={()=>setActiveIndex(index)}>
                        <item.icon/>
                        <h2>{item.name}</h2>
                    </button>
                )
            })}
        </div>
        
    </div>
  )
}

export default SideNav