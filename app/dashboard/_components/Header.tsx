import { Search } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='p-4 border-b-2 border-gray-100 flex justify-between  '>
      <div className='flex gap-2 items-center p-2 border  border-gray-100 rounded-md max-w-md'>
        <Search/>
        <input type="text" placeholder="Search...." className='outline-none'/>
      </div>
      <div>
        <h2 className=' bg-emerald-300 rounded-full p-2 px-4 font-semibold cursor-pointer'> Join Membership</h2>        
      </div>
    </div>
  )
}

export default Header