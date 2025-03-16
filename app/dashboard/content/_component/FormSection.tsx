'use client'
import React, { useState } from 'react'
import { TEMPLATE } from '../../_components/TemplateListSection'
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Loader2Icon } from 'lucide-react';

interface PROPS{
    selectedTemplate?: TEMPLATE; 
    userFormInput:any;
    loading:boolean;
}
function FormSection({selectedTemplate,userFormInput,loading}:PROPS) {

  const [formData, setFormData] = useState<any>('');
  
  const  handleInputChange =(event:any) =>{
    const {name, value} = event.target;
    setFormData({...formData, [name]: value });
  }

  const onSubmit = (e:any) => {
    e.preventDefault();
    userFormInput(formData)
  }

  return (
    <div className='p-5 shadow-md border border-gray-100 rounded-lg'>
        {/* @ts-ignore */}
        <Image src={selectedTemplate?.icon} alt='icon' height={70} width={70} className='mb-4'/>
        <h2 className='font-bold text-2xl mb-2 '>{selectedTemplate?.name}</h2>
        <p className='font-semibold text-gray-600'> {selectedTemplate?.desc} </p>
        
        <form className='mt-6' onSubmit={onSubmit}>
         {selectedTemplate?.form?.map((item,index) =>(
          <div className='my-2 flex flex-col gap-2 mb-7'>
            <label className='text-xl font-semibold'> {item.label} </label>
            {item.field=='input'?
            <Input name={item.name} required={item?.required} 
            onChange={handleInputChange} className='border border-gray-400 py-6'/>
            :item.field=='textarea'?
            <Textarea name={item.name} required={item?.required} 
            onChange={handleInputChange} className='border border-gray-400 py-8'/>:null
            }
          </div>
         ))}
         <Button type='submit'
         disabled={loading}
          className='w-full bg-green-400 cursor-pointer hover:bg-emerald-500
          py-6'>{loading&&<Loader2Icon className='animate-spin'/>} Get Generate</Button>
        </form>
    </div>
  )
}

export default FormSection