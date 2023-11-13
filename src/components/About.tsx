import React from 'react';
import Image from 'next/image';

interface FeatureBlockProps {
  imageSrc: string;
  title: string;
  description: string;
}

function FeatureBlock({ imageSrc, title, description }: FeatureBlockProps) {
  return (
    <section className='bg-white rounded-xl py-4 px-4 md:py-6 md:px-6 text-center'>
      <Image src={imageSrc} alt={title} width={128} height={128} />

      <h2 className='font-medium text-lg md:text-2xl pt-2 md:pt-4'>{title}</h2>
      <p className='font-normal text-sm md:text-lg pt-2 md:pt-4'>{description}</p>
    </section>
  );
}

function About() {
  return (
    <main className='bg-[#7951F91A] flex flex-col md:flex-row px-5 md:px-20 py-10 md:py-20 gap-10 justify-center' id='about'>
      <FeatureBlock
        imageSrc="/taskmanagement.svg"
        title="Lorem ipsum dolor amet, consetetur sadipscing"
        description="Lorem ipsum dolor amet, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam"
      />

      <FeatureBlock
        imageSrc="/piechart.svg"
        title="Lorem ipsum dolor amet, consetetur sadipscing"
        description="Lorem ipsum dolor amet, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam"
      />

      <FeatureBlock
        imageSrc="/timemanagement.svg"
        title="Lorem ipsum dolor amet, consetetur sadipscing"
        description="Lorem ipsum dolor amet, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam"
      />
    </main>
  );
}

export default About;
