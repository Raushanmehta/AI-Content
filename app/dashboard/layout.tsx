"use client"
import React, { useState } from 'react'
import SideNavbar from './_components/SideNavbar';
import Header from './_components/Header';
import { TotalUsageContext } from '../(context)/TotalUsageContext';

function layout({children,
     }: Readonly<{
     children: React.ReactNode;
     }>) {   

      const [totalUsage, setTotalUsage] = useState<Number>(0);

  return (
      <TotalUsageContext.Provider value={{totalUsage, setTotalUsage}}>
    <div>
        <div className='w-64 hidden md:block fixed'>
            <SideNavbar/>
        </div>
        <div className='md:ml-64'>
            <Header/>
            {children}
        </div>
    </div>
      </TotalUsageContext.Provider>
  )
}

export default layout