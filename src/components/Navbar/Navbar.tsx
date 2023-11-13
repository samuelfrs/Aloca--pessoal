"use client";
import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Image from 'next/image';
import { Link as ScrollLink } from 'react-scroll';

interface Link {
  name: string;
  link: string;
}

function Navbar() {
  const links: Link[] = [
    { name: "Home", link: "hero" },
    { name: "Sobre", link: "about" },
    { name: "Contato", link: "contact" },
  ];

  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <header className='shadow-md w-full bg-white fixed z-50'>
      <nav className='md:flex items-center justify-between py-6 px-6 md:px-14'>
        <div>
          <Image src="/logo.svg" alt="Logo Image" width={120} height={40} />
        </div>
        <button onClick={toggleMenu} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
          {open ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-${open ? "50" : "-1"} left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? "top-20 opacity-100": "top-[-490px]"} md:opacity-100 opacity-0`}>
          {links.map((link, index) => (
            <li key={index} className='md:ml-8 text-2xl md:my-0 my-7 text-[#291E6D] hover:text-[#7951F9] duration-500 cursor-pointer'>
              <ScrollLink onClick={toggleMenu} to={link.link} smooth={true} duration={500} offset={-100}>
                {link.name}
              </ScrollLink>
            </li>
          ))}
          <li className='md:ml-8 text-2xl bg-[#7951F9] rounded-xl py-2 px-3 w-fit text-white hover:text-[#291E6D] duration-500 cursor-pointer'>
            <ScrollLink onClick={toggleMenu} to="prices" smooth={true} duration={500} offset={-100}>
                Planos
            </ScrollLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
