import React from 'react';
import Image from 'next/image';

interface FeatureItemProps {
  title: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ title }) => (
  <section className='flex items-center bg-[#7951F924] h-14 w-96 px-5 rounded-xl mb-4'>
    <svg width="10" height="9" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="5" cy="4.5" rx="5" ry="4.5" fill="#7951F9" fillOpacity={0.5} />
    </svg>
    <h3 className='ml-2'>{title}</h3>
  </section>
);

const Quality: React.FC = () => {
  const features: string[] = [
    'Dashboards',
    'Estatísticas',
    'Gerenciamento de projetos',
    'Distribuição de atividades',
  ];

  return (
    <section className='grid grid-cols-1 md:grid-cols-2 mt-10 md:mt-32 px-4 md:px-20 gap-10 md:gap-14 items-start'>
      <div>
        <Image src="/bgq.svg" alt="Descrição Decorativa" width={641} height={634} />
      </div>
      <div className='pt-5 md:pt-10 pb-7 md:pb-14'>
        <h1 className='font-medium text-2xl md:text-4xl pr-4 md:pr-28 mb-4 md:mb-7'>Tudo que você precisa em um só lugar</h1>

        {features.map((feature, index) => (
          <FeatureItem key={index} title={feature} />
        ))}
        <button className='bg-[#7951F9] rounded-xl w-32 md:w-44 h-10 md:h-12 text-white text-sm md:text-base'>
          <a href="#">Comece já</a>
        </button>
      </div>
    </section>
  );
}

export default Quality;
