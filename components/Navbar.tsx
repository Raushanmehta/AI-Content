import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const Navbar = () => {
  
  const navLinks = [
    { label: 'First Link', href: '/' },
    { label: 'Second Link', href: '/second' },
    { label: 'Third Link', href: '/third' },
    { label: 'Fourth Link', href: '/fourth' },
  ]
  return (
    <div>
      <header className="text-gray-600 body-font sticky top-0">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Image src={"/logo.svg"} alt='logo' width={150} height={100} />
          <nav className="hidden md:ml-auto md:mr-auto md:flex flex-wrap items-center 
          font-semibold text-balance justify-center">
            <ul className="list-none md:ml-6 md:flex flex-wrap">
              {navLinks.map((link, index) => (
                <li key={index} className="mr-5">
                  <Link href={link.href} className="text-black hover:text-gray-900">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <Link href={'/dashboard'} 
            className="hidden md:inline-flex items-center bg-gray-100 border-0 py-2 px-6 focus:outline-none
             hover:bg-gray-200 rounded-full font-semibold text-base mt-4 md:mt-0"
          >
            Join us
          </Link>
        </div>
      </header>
    </div>
  )
}

export default Navbar
