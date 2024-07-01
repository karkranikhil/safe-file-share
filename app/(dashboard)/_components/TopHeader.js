import { UserButton } from '@clerk/nextjs'
import { AlignJustify } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function TopHeader({sideBarHandler}) {
  return (
    <div className='flex p-5 border-b items-center justify-between md:justify-end'>
        <AlignJustify className='md:hidden' onClick={sideBarHandler}/>
        <Image src="/logo.svg" width={150} height={100} className='md:hidden' alt="file share app logo"/>
        <UserButton/>
    </div>
  )
}

export default TopHeader