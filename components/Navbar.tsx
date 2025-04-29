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
          <Image src="/logo-white.png" alt="logo" width={200} height={150} />
        </div>

        <div>
          <Button
            onClick={() => router.push('/dashboard')}
            className="items-center orange-button border-0 py-[20px] px-6 focus:outline-none
             rounded-full font-semibold text-base"
          >
            Join us
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
