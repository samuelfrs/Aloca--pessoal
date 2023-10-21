import React from 'react';

interface FeatureItemProps {
  title: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ title }) => (
  <div className='flex items-center bg-[#7951F924] h-14 w-96 px-5 rounded-xl mb-4'>
    <svg width="10" height="9" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="5" cy="4.5" rx="5" ry="4.5" fill="#7951F9" fillOpacity={0.5} />
    </svg>
    <span className='ml-2'>{title}</span>
  </div>
);

const Quality: React.FC = () => {
  const features: string[] = [
    'Dashboards',
    'Estatísticas',
    'Gerenciamento de projetos',
    'Distribuição de atividades',
  ];

  return (
    <div className='flex mt-32 px-20 gap-14 items-start'>
      <div>
        <img src="bgq.svg" alt="" />
      </div>
      <div className='pt-10'>
        <h1 className='font-medium text-4xl pr-28 mb-7'>Tudo que você precisa em um só lugar</h1>

        {features.map((feature, index) => (
          <FeatureItem key={index} title={feature} />
        ))}
        <button className='bg-[#7951F9] rounded-xl w-32 md:w-44 h-12 md:h-14 text-white'>
          <a href="#">Comece já</a>
        </button>
      </div>
    </div>
  );
}

export default Quality;
