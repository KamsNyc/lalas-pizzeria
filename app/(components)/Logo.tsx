'use client'
import Image from '@/node_modules/next/image'
import React from 'react'

const Logo = () => {

  return (
    <section
      className='flex items-center justify-center'
    >
      <Image
        src="/Logo.png"
        width={300}
        height={300}
        priority
        alt="Lalas pizzeria Logo located in Queens Village"
      />
    </section>
  )
}

export default Logo
