import React from 'react';

function About() {
  return (
    <main className='bg-[#7951F91A] flex flex-col md:flex-row px-5 md:px-20 py-10 md:py-20 gap-10 justify-center'>

      <div className='bg-white rounded-xl py-4 px-4 md:py-6 md:px-6 text-center'>
        <img src="taskmanagement.svg" alt="task management image" className="mx-auto w-24 md:w-32" />

        <h1 className='font-medium text-lg md:text-2xl pt-2 md:pt-4'>Lorem ipsum dolor amet, consetetur sadipscing</h1>
        <p className='font-normal text-sm md:text-lg pt-2 md:pt-4'>
          Lorem ipsum dolor amet, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
        </p>
      </div>

      <div className='bg-white rounded-xl py-4 px-4 md:py-6 md:px-6 text-center'>
        <img src="piechart.svg" alt="task management image" className="mx-auto w-24 md:w-32" />

        <h1 className='font-medium text-lg md:text-2xl pt-2 md:pt-4'>Lorem ipsum dolor amet, consetetur sadipscing</h1>
        <p className='font-normal text-sm md:text-lg pt-2 md:pt-4'>
          Lorem ipsum dolor amet, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
        </p>
      </div>

      <div className='bg-white rounded-xl py-4 px-4 md:py-6 md:px-6 text-center'>
        <img src="timemanagement.svg" alt="task management image" className="mx-auto w-24 md:w-32" />

        <h1 className='font-medium text-lg md:text-2xl pt-2 md:pt-4'>Lorem ipsum dolor amet, consetetur sadipscing</h1>
        <p className='font-normal text-sm md:text-lg pt-2 md:pt-4'>
          Lorem ipsum dolor amet, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
        </p>
      </div>
    </main>
  );
}

export default About;
