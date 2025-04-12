import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'
import { Button } from './ui/button'

const Navbar = () => {
  const router = useRouter();

  return (
    <header className="text-gray-600 body-font sticky top-0 ">
      <div className="container mx-auto flex justify-between items-center p-5 md:px-16">
        
        <div className="flex items-center">
          <Image src="/logo.svg" alt="logo" width={150} height={100} />
        </div>

        <div>
          <Button
            onClick={() => router.push('/dashboard')}
            className="items-center bg-gray-100 border-0 py-2 px-6 focus:outline-none
              hover:bg-gray-200 rounded-full font-semibold text-base"
          >
            Join us
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
