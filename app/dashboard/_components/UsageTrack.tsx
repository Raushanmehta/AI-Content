import { Button } from '@/components/ui/button'
import { db } from '@/utils/db';
import { AIOutput, UserSubscription } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';
import { eq } from 'drizzle-orm';
import React, { useContext, useEffect, useState } from 'react'
import { HISTORY } from '../history/page';
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext';
import { UserSubscriptionContext } from '@/app/(context)/UserSubscriptionContext';
import { UpdateCreditUsageContext } from '@/app/(context)/UpdateCraditUsageContext';

function  UsageTrack() {

  const { user } = useUser();
  const {totalUsage, setTotalUsage} = useContext(TotalUsageContext);
  const {userSubscription,setUserSubscription} = useContext(UserSubscriptionContext);
  const [maxWords,setMaxWords]= useState(10000);
  const{updateCreditUsage,setUpdateCreditUsage} = useContext(UpdateCreditUsageContext);

  useEffect(() => {
    if (user) {
      GetData();
      user&&IsUserSubscribe();
    }
  }, [user]);

  useEffect(()=>{
    user&&GetData();
  },[updateCreditUsage&&user])

  const GetData = async () => {
    if (!user?.primaryEmailAddress?.emailAddress) return;
    // @ts-ignore
    const result: HISTORY[] = await db
      .select()
      .from(AIOutput)
      .where(eq(AIOutput.createdBy, user.primaryEmailAddress.emailAddress));
    GetTotalUsage(result);
  };

  const IsUserSubscribe = async ()=>{
    const result = await db.select().from(UserSubscription)
    .where(eq(UserSubscription.email,user?.primaryEmailAddress?.emailAddress));
    if(result){
      setUserSubscription(true);
      setMaxWords(100000);
    }
  }

  
  const GetTotalUsage = (result: HISTORY[]) => {
    let total: number = 0;
    result.forEach((element) => {
      total =total+Number(element.aiResponse?.length || 0);
    });
    setTotalUsage(total);
  };


  return (
    <div className='m-5'>   
        <div className='bg-[#FF9400] text-whit p-2 rounded-md'>
            <h2 className=' font-semibold'>Credits</h2>
            <div className='h-2 bg-white  rounded-full w-full'>
              <div className='h-2 bg-gray-900 rounded-full' 
              style={{width:(totalUsage/maxWords)*100+"%"}}>

              </div>
            </div>
            <h2 className='text-sm my-1 '>{totalUsage}/{maxWords} credit used</h2>
        </div>
        <Button variant={'secondary'} className='gemni-button w-full my-3
         text-black cursor-pointer'>Upgrade</Button>
    </div>
  )
}

export default UsageTrack