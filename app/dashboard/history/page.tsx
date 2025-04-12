import { db } from '@/utils/db';
import { AIOutput } from '@/utils/schema';
import { currentUser } from '@clerk/nextjs/server';
import { desc, eq } from 'drizzle-orm';
import React from 'react'
import { TEMPLATE } from '../_components/TemplateListSection';
import Templates from '@/app/(data)/Templates';
import moment from 'moment';

export interface HISTORY {
  id: Number;
  formData: string;
  aiResponse: string;
  templateSlug: string;
  createdAt: string;
  createdBy: string;
}

async function History() {
  const user = await currentUser();
  if (!user || !user.primaryEmailAddress || !user.primaryEmailAddress.emailAddress) {
    throw new Error('User or user email is missing');
  }
  
  {/* @ts-ignore */}
  const HistoryList: HISTORY[] = await db
    .select()
    .from(AIOutput)
    .where(eq(AIOutput?.createdBy,user?.primaryEmailAddress?.emailAddress))
    .orderBy(desc(AIOutput.id));

  const GetTemplateName = (slug: string) => {
    const template: TEMPLATE | any = Templates?.find((item) => item.slug === slug); 
    return template ? template.name : 'Unknown Template'; 
  }

  const TotalWordCount = (text: string) => {
    return text.trim().split(/\s+/).length;
  };

  return (
    <div className=" border border-gray-100 m-5 p-5 shadow-lg rounded-lg bg-white overflow-x-auto">
  <h2 className="font-bold text-3xl mb-4">History</h2>
  <p className="text-gray-400 mb-4">Search your resolved queries</p>
  <table className="min-w-full table-auto">
    <thead>
      <tr className="bg-gray-100">           
        <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">TEMPLATE</th>
        <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">AI RESPONSE</th>
        <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">WORDS</th>
        <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">DATE</th>
        {/* <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">COPY</th> */}
      </tr>
    </thead>
    <tbody>
      {HistoryList.length === 0 ? (
        <tr>
          <td colSpan={5} className="text-center py-4 text-gray-500">No history found</td>
        </tr>
      ) : (
        HistoryList.map((historyItem, index) => (
          <tr
            key={index}
            className={`hover:bg-gray-50 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>   
            <td className=" px-4 py-3 text-sm text-gray-700">{GetTemplateName(historyItem.templateSlug)}</td>
            <td className=" px-4 py-3 line-clamp-2 w-md text-sm text-gray-700">{historyItem.aiResponse}</td>
            <td className=" px-4 py-3 text-sm text-gray-700">{TotalWordCount(historyItem.aiResponse)}</td>
            <td className=" px-4 py-3 text-sm text-gray-700">{moment(historyItem.createdAt,'DD/MM/YYYY').format('DD/MM/YYYY')}</td>
            {/* <td><Button className='text-black' onClick={()=>navigator.clipboard.writeText(historyItem.aiResponse)}>Copy</Button></td> */}
          </tr>
        ))
      )}
    </tbody>
  </table>
</div>

  )
}

export default History;
