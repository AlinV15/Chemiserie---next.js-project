// src/components/Header.js
"use client";

import { useState } from 'react';
import Link from 'next/link';

function productOpen(fct){
  if(fct){
    return "rotate-180"

  }
  else{
    return 'rotate-0'
  }
}

const Header: React.FC = () => {
  const [isProductsOpen, setIsProductsOpen] = useState<boolean>(false);

  return (
    <header className="bg-gray-700 shadow-md p-4 ">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold bg-pink-800 rounded-[20px] p-[20px]">
          <Link href="/">Chemiserie</Link>
        </div>

        {/* Navigație */}
        <nav className="space-x-4">
          <ul className="flex items-center space-x-4">
            {/* Produse (Dropdown) */}
            <li className="relative">
              <button
                className="hover:text-pink-300 uppercase"
                onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
              >
                
                Produse
                <span
                  className={`ml-2 transition-transform duration-300 ${
                    isProductsOpen ? 'rotate-180' : 'rotate-0'
                  }`}
                  style={{
                    display: 'inline-block',
                    transformOrigin: 'center', // Asigură-te că rotirea se face în jurul centrului
                  }}
                >
                  ▼
                </span>
              </button>
              {isProductsOpen && (
                < >
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-gray-500" onMouseEnter={() => setIsProductsOpen(true)}
                onMouseLeave={() => setIsProductsOpen(false)}></div>

                <ul className="absolute bg-gray-500 shadow-md mt-2 space-y-2 p-2 rounded w-[200px] " >
                  <li className='text-center w-[175px] pb-1 hover:border-b hover:border-pink-300 hover:text-pink-300 border-b border-transparent' >
                    <Link href="/produse/barbati" >
                      Cămăși pentru bărbați
                    </Link>
                  </li>
                  <li className='text-center w-[175px] pb-1 hover:border-b hover:border-pink-300 hover:text-pink-300 border-b border-transparent' >
                    <Link href="/produse/femei" >
                      Cămăși pentru femei
                    </Link>
                  </li>
                  <li className='text-center w-[175px] pb-1 hover:border-b hover:border-pink-300 hover:text-pink-300 border-b border-transparent'>
                    <Link href="/produse/baieti" >
                      Cămăși pentru băieți
                    </Link>
                  </li>
                  <li className='text-center w-[175px] pb-1 mb-1 hover:border-b hover:border-pink-300 hover:text-pink-300 border-b border-transparent'>
                    <Link href="/produse/fete" >
                      Cămăși pentru fete
                    </Link>
                  </li>
                </ul>
                </>
              )}
            </li>

            {/* Blog */}
            <li>
              <Link href="/blog" className='hover:text-pink-300'>
              
                Blog
              </Link>
            </li>

            {/* Despre noi */}
            <li>
              <Link href="/despre-noi" className='hover:text-pink-300'>
              
                Despre noi
              </Link>
            </li>

            {/* Contact */}
            <li>
              <Link href="/contact" className='hover:text-pink-300'>
              
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
export default Header;
