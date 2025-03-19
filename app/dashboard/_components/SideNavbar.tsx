"use client"
import { FileClock,  Home, Settings, WalletCards } from 'lucide-react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'
import UsageTrack from './UsageTrack'

function SideNavbar () {

    const MenuList = [
            { name: 'Home', icon: Home, path:'/dashboard' },
            { name: 'History', icon: FileClock, path:'/dashboard/history' },
            { name: 'Billing', icon: WalletCards, path:'/dashboard/billing' },
            { name: 'Setting', icon: Settings, path:'/dashboard/setting' },               
        ]

        const path=usePathname();
        useEffect(()=>{
            
        },[])
  return (
    <div className='h-screen relative p-5 shadow-sm boarder'>
        <div className='flex justify-center'>
        <Image src={"/logo.svg"} alt='logo' width={150} height={100}/>
        </div>
        <hr className='my-4 text-gray-100 border-b-1' />
        <div className='mt-10'>
            {MenuList.map((menu, index)=>(
                
                <div key={index}  className={`flex gap-2 mb-2 p-3 hover:bg-emerald-300 hover:text-white rounded-lg cursor-pointer
                 items-center ${path==menu.path&&'bg-emerald-300 text-white'}`} >
                    <menu.icon/>
                    <h2>{menu.name}</h2>
                </div>
            ))}
        </div>
        <div className='absolute bottom-10 left-0 w-full'>
            <UsageTrack />
        </div>
    </div>
  )
}

export default SideNavbar