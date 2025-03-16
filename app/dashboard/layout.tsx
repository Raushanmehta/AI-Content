import React from 'react'
import SideNavbar from './_components/SideNavbar';
import Header from './_components/Header';

function layout({children,
     }: Readonly<{
     children: React.ReactNode;
     }>) {   
  return (
    <div>
        <div className='w-64 hidden md:block fixed'>
            <SideNavbar/>
        </div>
        <div className='md:ml-64'>
            <Header/>
            {children}
        </div>
    </div>
  )
}

export default layout