"use client"
import React, { useState } from 'react'
import SideNavbar from './_components/SideNavbar';
import Header from './_components/Header';
import { TotalUsageContext } from '../(context)/TotalUsageContext';
import { UserSubscriptionContext } from '../(context)/UserSubscriptionContext';
import { UpdateCreditUsageContext } from '../(context)/UpdateCraditUsageContext';

function layout({children,
     }: Readonly<{
     children: React.ReactNode;
     }>) {   

      const [totalUsage, setTotalUsage] = useState<Number>(0);
      const [userSubscription, setUserSubscription] = useState<boolean>(false);
      const [updateCreditUsage,setUpdateCreditUsage] = useState<any>();
 
  return (
      <TotalUsageContext.Provider value={{totalUsage, setTotalUsage}}>
        <UserSubscriptionContext.Provider value={{userSubscription, setUserSubscription}}>
            <UpdateCreditUsageContext.Provider value={{updateCreditUsage,setUpdateCreditUsage}}>

    <div>
        <div className='w-64 hidden md:block fixed'>
            <SideNavbar/>
        </div>
        <div className='md:ml-64'>
            <Header/>
            {children}
        </div>
    </div>
            </UpdateCreditUsageContext.Provider>
    </UserSubscriptionContext.Provider>
      </TotalUsageContext.Provider>
  )
}

export default layout