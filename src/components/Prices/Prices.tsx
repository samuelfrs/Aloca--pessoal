import React from 'react'
import Cards from './Cards'

function Prices() {
  return (
    <div className='pt-14'>
        <div className=''>
            <h1 className='text-center font-medium text-4xl'>
                Preços <span className='relative inline-block'>
                <span className='relative z-10'>acessíveis</span>
                <span className='absolute inset-0 bg-[#7951F91A] z-0 transform w-28 rounded-lg'></span>
                </span>!
            </h1>
            <p className='text-center text-2xl mt-6'>
                Para resolver seus problemas de alocação <br /> de membros e projetos de forma simples:
            </p>
        </div>
        <div className='flex px-20 gap-10'>
            <Cards plan='Plano Mensal' price='R$ 250' t1='Lorem ipsum dolor sit' t2='Lorem ipsum dolor sit't3='Lorem ipsum dolor sit'/>

            <Cards plan='Plano Semestral' price='R$ 1350' t1='Lorem ipsum dolor sit' t2='Lorem ipsum dolor sit't3='Lorem ipsum dolor sit'/>

            <Cards plan='Plano Anual' price='R$ 2400' t1='Lorem ipsum dolor sit' t2='Lorem ipsum dolor sit't3='Lorem ipsum dolor sit'/>
        </div>
    </div>
  )
}

export default Prices