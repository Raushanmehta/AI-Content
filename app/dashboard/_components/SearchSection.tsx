import { Search } from 'lucide-react'
import React from 'react'

const SearchSection = ({onSearchInput}:any) => {
  return (
    <div className='p-10 bg-emerald-300 flex  flex-col items-center justify-center font- 
        semibold'>
        <h2 className='text-5xl font-bold'>Browser All Template</h2>
        <p className='mt-2 text-xl'>What do you like to create todat?</p>
    <div className='w-full flex items-center justify-center'>
        <div className='flex items-center gap-2 p-2  rounded-md w-[50%] mt-6 bg-white'>
            <Search className='text-gray-700'/>
            <input type='text' placeholder='Search...' onChange={(event)=> 
                onSearchInput(event.target.value)} className='outline-none bg-transparent
                 text-gray-700 p-1'/>
        </div>
    </div>
 </div>
  )
}

export default SearchSection