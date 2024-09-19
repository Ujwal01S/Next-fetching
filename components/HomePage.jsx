import Image from 'next/image'
import React from 'react'

const HomePage = () => {
  return (
    <div className='flex w-[95rem] mt-4 '>
      <div className='left w-1/2 border-r border-black h-[100vh]'>
        <div className='flex space-y-44 space-x-5'>
          <p></p>
          <div>
            <p className='font-semibold text-2xl mb-6'>Next js Demo</p>
            <p>The React Framework for the Web. Used by some of the world's largest companies, Next.js enables you to create high-quality web applications with the power of React components.</p>

          </div>
          <Image
          src={'https://cdn.worldvectorlogo.com/logos/next-js.svg'}
          width={126}
          height={126}
          />
        </div>
      </div>

      <div className='right ml-10 w-full border-l'>
          right Part
      </div>
      
    </div>
  )
}

export default HomePage