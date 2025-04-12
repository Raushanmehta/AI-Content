
import Link from 'next/link';
import { Button } from './ui/button';
import { ChevronsRight } from 'lucide-react';
import SocialButton from './subComponents/SocialButton';

const Hero = () => {
 
  return (
    <div>  
      <div className='h-auto md:h-[40rem] flex flex-col items-center justify-center 
      overflow-hidden mx-auto md:py-0 mt-16'>   
        <Button className='gemni-button px-8 mt-16 mb-12 md:mb-20 md:-mt-24 inline-flex 
        items-center gap-x-2'>Gemini Ai<ChevronsRight/></Button>
        <h1 className='text-black justify-center text-7xl font-bold  items-center text-center'>
          Ai Content <span className='text-teal-500'> Generator</span>
        </h1>
        <div className='p-4 w-full text-center'>
          <p className='text-black justify-center items-center  text-center text-4xl font-bold'>
            Generate Your favourite Content
          </p>
          <p className='mt-4 text-balance md:text-bg-neutral-300 max-w-fit mx-auto text-md
           text-gray-500 font-medium'>
            Learning the syntax, concepts, and principles of a programming language.
          </p>
          <div className="mt-8 flex justify-center items-centern gap-7">
            <div className='rounded-full border-2 py-2 px-4 text-xl cursor-pointer hover:bg-black '>
              <Link
                className='justify-center items-center px-4 py-2 text-black font-medium hover:text-white inline-flex gap-x-2  '
                href="/dashboard">
                Get Start<ChevronsRight className='animation-arrow'/>
              </Link>
            </div>
            <div className='rounded-full border-2 py-2 px-4 text-xl cursor-pointer hover:bg-black'>
              <Link
                className='justify-center items-center px-4 py-2 text-black font-medium hover:text-white inline-flex gap-x-2'
                href="/dashboard">
                GitHub<ChevronsRight className='animation-arrow'/>
              </Link>
            </div>
          </div>
          
        </div>
          <SocialButton/>
      </div>
    </div>
  );
};

export default Hero;
