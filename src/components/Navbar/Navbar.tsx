"use client";
import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

function Navbar() {
  const links = [
    { name: "Home", link: "/" },
    { name: "Sobre", link: "/" },
    { name: "Contato", link: "/" },
  ]

  const [open, setOpen] = useState(false)

  const toggleMenu = () => {
    setOpen(!open);
  }

  return (
    <div className='shadow-md w-full fixed bg-white'>
      <div className='md:flex items-center justify-between py-6 px-6 md:px-14'>
        <div>
          <img src="logo.svg" alt="Imagem Logo Alocaí" />
        </div>
        <div onClick={toggleMenu} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
          {open ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>
        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-${open ? "50" : "-1"} left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? "top-20 opacity-100": "top-[-490px]"} md:opacity-100 opacity-0`}>
          {
            links.map((link, index) => (
              <li key={index} className='md:ml-8 font-medium text-2xl md:my-0 my-7'>
                <a href={link.link} className='text-[#291E6D] hover:text-[#7951F9] duration-500'>{link.name}</a>
              </li>
            ))
          }
          <li className='md:ml-8 font-medium text-2xl bg-[#7951F9] rounded-xl py-2 px-3 w-fit'>
            <a href="/" className='text-white hover:text-[#291E6D] duration-500'>
              Planos
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
