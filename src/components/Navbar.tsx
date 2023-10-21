import React from 'react';

function Navbar() {
  return (
    <main className='flex justify-between items-center'>

      <div className='pl-20 pt-6'>
        <img src="logo.svg" alt="Logo Alocaí" />
      </div>

      <div className='flex gap-16 pr-20'>
        <button>
          <a href="#home">Home</a>
        </button>
        <button>
          <a href="#sobre">Sobre</a>
        </button>
        <button>
          <a href="#contato">Contato</a>
        </button>
        <button className='bg-[#7951F9] rounded-xl px-4 py-1 text-white'>
          <a href="#planos">Planos</a>
        </button>
      </div>
    </main>
  );
}

export default Navbar;
