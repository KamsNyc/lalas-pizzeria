import Image from '@/node_modules/next/image'
import React from 'react'

const Logo = () => {
  return (
    <div className='flex items-center justify-center'>
        <Image
      src="/Logo.png"
      width={300}
      height={300}
      alt="Picture of the author"
    />
    </div>
  )
}

export default Logo