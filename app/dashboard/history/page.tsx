import { db } from '@/utils/db';
import { AIOutput } from '@/utils/schema';
import { currentUser } from '@clerk/nextjs/server';
import { desc, eq } from 'drizzle-orm';
import React from 'react'
import { TEMPLATE } from '../_components/TemplateListSection';
import Templates from '@/app/(data)/Templates';



export interface HISTORY{
  id:Number,
  formData:string,
  aiResponse:string,
  templateSlug:string 
  createdAt:string,
  createdBy:string,
}

async function History() {
  const user = await currentUser();
    {/*@ts-ignore*/}
  const HistoryList: HISTORY[] = await db
  .select()
  .from(AIOutput)
  .where(eq(AIOutput?.createdBy, user?.primaryEmailAddress?.emailAddress))
  .orderBy(desc(AIOutput.id));

  const GetTemplateName = (slug:string) =>{
    const template:TEMPLATE|any = Templates?.find((item)=>item)
    return template;
  }
  return (
    <div className='m-5 p-5 border rounded-lg bg-white'>
      <h2 className='font-bold text-3xl'>History</h2>
      <p className='text-gray-400'>Search your resolve</p>
    </div>
  )
}

export default History