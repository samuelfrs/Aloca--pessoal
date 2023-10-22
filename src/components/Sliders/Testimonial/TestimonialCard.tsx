import Image from 'next/image'
import React, { ReactNode } from 'react'

interface TestimonialCardProps {
  title: string;
  desc: string;
  img: string;
  alt: string;
  name: string;
  company: string;
}

function TestimonialCard({ title, desc, img, alt, name, company }: TestimonialCardProps) {
  return (
    <div className='bg-white mx-8 py-10 px-10  rounded-lg shadow-xl'>
      <div>
        <h1 className='text-2xl'>
          {title}
        </h1>
        <p className='text-xl pt-5'>
          {desc}
        </p>
      </div>
      <div className='flex pt-5'>
        <Image src={img} width={40} height={40} alt={alt} className='rounded-full' />
        <div className='pl-4'>
          <p>
            {name}
          </p>
          <p>
            {company}
          </p>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard
