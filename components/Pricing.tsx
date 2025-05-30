import React from 'react'
import FreeCard from './subComponents/FreeCard'
import MonthlyCard from './subComponents/MonthlyCard'

const Pricing = () => {

  return (
<div className="overflow-hidden">
  <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-24 mx-auto">
  <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-5xl text-4xl font-bold  mb-4 text-white">
           Free & Pricing 
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-md
           text-gray-500 font-medium">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke
            farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies
            heirloom prism food truck ugh squid celiac humblebrag.
          </p>
        </div> 
    <div className="relative xl:w-10/12 xl:mx-auto">    
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">     
        <div>
            
           <FreeCard/>
        </div> 

        <div>        
         <MonthlyCard/>
         
        </div>
      </div>
      
      <div className="hidden md:block absolute top-0 end-0 translate-y-16 translate-x-16">
        <svg className="w-16 h-auto text-orange-500" width="121" height="135" viewBox="0 0 121 135" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164" stroke="currentColor" strokeWidth="10" strokeLinecap="round"/>
          <path d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5" stroke="currentColor" strokeWidth="10" strokeLinecap="round"/>
          <path d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874" stroke="currentColor" strokeWidth="10" strokeLinecap="round"/>
        </svg>
      </div>
      
      <div className="hidden md:block absolute bottom-0 start-0 translate-y-16 -translate-x-16">
        <svg className="w-56 h-auto text-cyan-500" width="347" height="188" viewBox="0 0 347 188" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 82.4591C54.7956 92.8751 30.9771 162.782 68.2065 181.385C112.642 203.59 127.943 78.57 122.161 25.5053C120.504 2.2376 93.4028 -8.11128 89.7468 25.5053C85.8633 61.2125 130.186 199.678 180.982 146.248L214.898 107.02C224.322 95.4118 242.9 79.2851 258.6 107.02C274.299 134.754 299.315 125.589 309.861 117.539L343 93.4426" stroke="currentColor" strokeWidth="7" strokeLinecap="round"/>
        </svg>
      </div>     
    </div>
    
    <div className="mt-7 text-center">
      <p className="text-xs text-gray-400">
        Prices in Rupees. Taxes may apply.
      </p>
    </div>
  </div>
</div>
  )
}

export default Pricing