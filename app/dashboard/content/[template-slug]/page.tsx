'use client'
import React, { useContext, useState } from 'react'
import FormSection from '../_component/FormSection';
import OutputSection from '../_component/OutputSection';
import { TEMPLATE } from '../../_components/TemplateListSection';
import Templates from '@/app/(data)/Templates';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { chatSession } from '@/utils/AiModel';
import { db } from '@/utils/db';
import { AIOutput } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext';
import { useRouter } from 'next/navigation';



interface PROPS{
    params:{
        'template-slug':string;
    }
}

const CreateNewContent=(props:PROPS)=> {

  
  const selectedTemplate:TEMPLATE|undefined=Templates?.find((item)=>item.slug==props.params["template-slug"]);
  const [loading, setLoading]= useState(false);
  const[aiOutput, setAiOutput]= useState<string>('');
  const {user}=useUser();
  const {totalUsage, setTotalUsage} = useContext(TotalUsageContext);
  const router = useRouter();

  const GeneratedAIContent= async(formData:any)=>{
    if(totalUsage>=10000){
      console.log("Please Upgrade")
      router.push('/dashboard/billing')
      return ;
    }
    setLoading(true);
      const SelectedPrompt = selectedTemplate?.aiPrompt;
      const FinalAIPrompt = JSON.stringify(formData)+","+SelectedPrompt;
      const result = await chatSession.sendMessage(FinalAIPrompt);

      
      setAiOutput(result?.response.text());
      await SaveInDb(JSON.stringify(formData),selectedTemplate?.slug,result?.response.text());
      setLoading(false);
    }

    const moment = require('moment');
    
    const SaveInDb=async(formData:any,slug:any,aiResp:string)=>{
      const result = await db.insert(AIOutput).values({
        formData:formData,
        templateSlug:slug,
        aiResponse:aiResp,
        createdBy:user?.primaryEmailAddress?.emailAddress,
        createdAt:moment().format('DD/MM/YYYY'),
      
      
      }); 
    }

  return (
    <div className='p-5'>
      <Link href={"/dashboard"}><Button className='bg-gray-300 cursor-pointer'> <ArrowLeft/>Back </Button></Link>
    <div className='grid grid-cols-1 md:grid-cols-3 gap-10 mt-5'>
        {/* From section  */}
        <FormSection selectedTemplate={selectedTemplate} 
        userFormInput={(v:any)=>GeneratedAIContent(v)} 
        loading={loading}
        />

        {/* Output section  */}
        <div className='col-span-2'>
        <OutputSection
        aiOutput={aiOutput}
        />
        </div>
    </div>
    </div>
  )
}

export default CreateNewContent 