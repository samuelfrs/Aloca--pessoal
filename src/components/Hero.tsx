import React from 'react';
import Image from 'next/image';

function Hero() {
  return (
    <main className='flex flex-col-reverse md:flex-row gap-6 pt-16 pb-16' id='hero'>
      <section className='w-full md:w-2/3 pl-5 md:pl-20 pt-10 md:pt-32'>
        <h1 className='font-bold text-2xl md:text-5xl'>
          Organize a carga sobre os membros da sua empresa com eficácia!
        </h1>

        <p className='font-normal text-lg md:text-3xl mt-4 md:mt-6 mb-4 md:mb-6'>
          AlocAí é um sistema de gerenciamento de projetos e alocação de membros simples e intuitivo.
        </p>

        <a href="" className='bg-[#7951F9] rounded-xl w-32 md:w-44 h-12 md:h-14 text-white flex items-center justify-center'>
          Comece já
        </a>
      </section>

      <section className='w-full md:w-1/3 pr-5 md:pr-20 pt-4 md:pt-16'>
        <Image src="/imagebanner.svg" alt="Banner" width={600} height={400} />
      </section>
    </main>
  );
}

export default Hero;
