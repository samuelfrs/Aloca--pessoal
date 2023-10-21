import React from 'react'


function About() {
  return (
    <main className='bg-[#7951F91A] flex px-20 py-20 gap-10 justi'>

        <div className='bg-white rounded-xl py-6 px-6'>
            <img src="taskmanagement.svg" alt="task management image"/>

            <h1 className='font-medium text-2xl pt-4'>Lorem ipsum dolor amet, consetetur sadipscing</h1>
            <p className='font-normal text-lg pb-8 pt-2'>Lorem ipsum dolor amet, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam </p>
        </div>

        <div className='bg-white rounded-xl py-6 px-6'>
            <img src="piechart.svg" alt="task management image"/>

            <h1 className='font-medium text-2xl pt-4'>Lorem ipsum dolor amet, consetetur sadipscing</h1>
            <p className='font-normal text-lg pb-8 pt-2'>Lorem ipsum dolor amet, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam </p>
        </div>

        <div className='bg-white rounded-xl py-6 px-6'>
            <img src="timemanagement.svg" alt="task management image"/>

            <h1 className='font-medium text-2xl pt-4'>Lorem ipsum dolor amet, consetetur sadipscing</h1>
            <p className='font-normal text-lg pb-8 pt-2'>Lorem ipsum dolor amet, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam </p>
        </div>

    </main>
  )
}

export default About