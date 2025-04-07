import { BriefcaseBusiness, Code, Globe, Instagram, Smile, Youtube } from 'lucide-react';
import Link from 'next/link'
import React from 'react'

const SocialButton = () => {
  return (
    <div className="flex mt-6 flex-wrap gap-2">
      <Link className="social-button" href="/"> <BriefcaseBusiness className='h-5'/>Business</Link>
      <Link className="social-button" href="/"><Globe className='h-5'/>SEO</Link>
      <Link className="social-button" href="/"><Youtube className='h-5'/>YouTube</Link>
      <Link className="social-button" href="/"><Code className='h-5'/> Code</Link>
      <Link className="social-button" href="/"><Instagram className='h-5'/>Instagram</Link>
    </div>
  );
};


export default SocialButton