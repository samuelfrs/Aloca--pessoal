import React from 'react'

function Hero() {
  return (
    <main className='flex gap-6'>
        <div className='w-2/3 pl-20 pt-32'>

            <h1 className='font-bold text-5xl'>
            Organize a carga sobre os membros da sua empresa com eficácia!
            </h1>

            <p className='font-normal text-3xl mt-6 mb-6'>AlocAí é um sistema de gerenciamento de projetos e alocação de membros simples e intuítivo.</p>

            <button className='bg-[#7951F9] rounded-xl w-44 h-14 text-white'>
                <a href="">Comece já</a>
            </button>
        </div>

        <div className='pr-20 pt-16'>
            <img src="imagebanner.svg" alt="" />
        </div>
    </main>
  )
}

export default Hero