import { Button } from '@/components/ui/button'
import { db } from '@/utils/db';
import { AIOutput } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';
import { eq } from 'drizzle-orm';
import React, { useEffect, useState } from 'react'
import { HISTORY } from '../history/page';

function  UsageTrack() {

  const {user} = useUser();
  const [totalUsge, setTotalUsages] = useState<number>();
  

   useEffect(()=>{
    user&&GetData();
   },[ user]);

   const GetData = async() => {
    {/* @ts-ignore*/}
    const result:HISTORY[] = await 
   db.select().from(AIOutput).where
   (eq(AIOutput.createdBy,user?.primaryEmailAddress?.emailAddress));
   }

   const GetTotalUsage = (result:HISTORY[])=>{
    let total:number = 0;
    result.forEach(element =>{
      total =total+Number (element.aiResponse?.length)
    });
    setTotalUsages(total);
    console.log(total);
   }
 
  return (
    <div className='m-5'>
        <div className='bg-emerald-400 text-whit p-2 rounded-md'>
            <h2 className=' font-semibold'>Credits</h2>
            <div className='h-2 bg-white  rounded-full w-full'>
              <div className='h-2 bg-gray-300 rounded-full' style={{width:'35%'}}>

              </div>
            </div>
            <h2 className='text-sm my-1 '>{totalUsge}/10,000 credit used</h2>
        </div>
        <Button variant={'secondary'} className='w-full my-3 text-black cursor-pointer'>Upgrade</Button>
    </div>
  )
}

export default UsageTrack