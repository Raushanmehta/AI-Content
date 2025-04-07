import { Button } from '@/components/ui/button'
import { db } from '@/utils/db';
import { AIOutput } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';
import { eq } from 'drizzle-orm';
import React, { useEffect, useState } from 'react'
import { HISTORY } from '../history/page';

function  UsageTrack() {

  const { user } = useUser();
  const [totalUsage, setTotalUsage] = useState<number>(0);

  useEffect(() => {
    if (user) {
      GetData();
    }
  }, [user]);

  const GetData = async () => {
    if (!user?.primaryEmailAddress?.emailAddress) return;
    // @ts-ignore
    const result: HISTORY[] = await db
      .select()
      .from(AIOutput)
      .where(eq(AIOutput.createdBy, user.primaryEmailAddress.emailAddress));
    GetTotalUsage(result);
  };

  
  const GetTotalUsage = (result: HISTORY[]) => {
    let total: number = 0;
    result.forEach((element) => {
      total =total+Number(element.aiResponse?.length || 0);
    });
    setTotalUsage(total);
  };


  return (
    <div className='m-5'>   
        <div className='bg-emerald-400 text-whit p-2 rounded-md'>
            <h2 className=' font-semibold'>Credits</h2>
            <div className='h-2 bg-white  rounded-full w-full'>
              <div className='h-2 bg-gray-300 rounded-full' style={{width:'35%'}}>

              </div>
            </div>
            <h2 className='text-sm my-1 '>{totalUsage}/10,000 credit used</h2>
        </div>
        <Button variant={'secondary'} className='gemni-button w-full my-3
         text-black cursor-pointer'>Upgrade</Button>
    </div>
  )
}

export default UsageTrack