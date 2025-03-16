'use client'
import React, { useState } from 'react'
import FormSection from '../_component/FormSection';
import OutputSection from '../_component/OutputSection';
import { TEMPLATE } from '../../_components/TemplateListSection';
import Templates from '@/app/(data)/Templates';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { chatSession } from '@/utils/AiModel';

interface PROPS{
    params:{
        'template-slug':string;
    }
}

const CreateNewContent=(props:PROPS)=> {

  
  const selectedTemplate:TEMPLATE|undefined=Templates?.find((item)=>
    item.slug==props.params["template-slug"]);
  
  const [loading, setLoading]= useState(false);
  const[aiOutput, setAiOutput]= useState<string>('');

    const GeneratedAIContent= async(FormData:any)=>{
      setLoading(true);
      const SelectedPrompt = selectedTemplate?.aiPrompt;
      const FinalAIPrompt = JSON.stringify(FormData)+","+SelectedPrompt;

      const result = await chatSession.sendMessage(FinalAIPrompt);
      // console.log(result.response.text());
      setAiOutput(result?.response.text());
      setLoading(false);
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