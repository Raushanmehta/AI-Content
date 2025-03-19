
import Link from 'next/link';

const Hero = () => {
 

  return (
    <div>
      <div className='h-auto md:h-[40rem] flex flex-col items-center justify-center overflow-hidden mx-auto md:py-0'>
        <h1 className='text-black justify-center text-6xl font-bold  items-center text-center'>
          Ai Content Generator
        </h1>
        <div className='p-4 w-full text-center'>
          <p className='text-black justify-center items-center  text-center text-3xl font-bold'>
            Generate Your favourite Content
          </p>
          <p className='mt-4 text-balance md:text-bg-neutral-300 max-w-fit mx-auto text-xl
           text-gray-500 font-medium'>
            Learning the syntax, concepts, and principles of a programming language.
          </p>
          <div className="mt-8 flex justify-center items-centern gap-7">
            <div className='rounded-full border-2 py-4 px-6 text-xl cursor-pointer hover:border-purple-800'>
              <Link
                className='justify-center items-center px-8 py-4 text-black font-medium hover:text-purple-500'
                href="/dashboard"
              >
                Join Us
              </Link>
            </div>
            <div className='rounded-full border-2 py-4 px-6 text-xl cursor-pointer hover:border-purple-800'>
              <Link
                className='justify-center items-center px-8 py-4 text-black font-medium hover:text-purple-500'
                href="/dashboard"
              >
                GitHub
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
