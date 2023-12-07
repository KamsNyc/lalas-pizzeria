import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div className='w-full h-screen'>
        <div className="w-full h-screen flex items-center justify-center">
            <div className="">
            {/* SOCIAL ICONS */}
                   {/* SOCIAL LINKS */}
      <section id="wrapper" className="flex items-center justify-center py-1 border-b gap-4 mb-2 mt-1">
          
          <Link target="_blank" href='https://www.instagram.com/lalaspizzeria/' rel="noopener noreferrer" ><Image className=" hover:scale-105 duration-300 ease-in"
          src="/instagram2.svg"
          width={32}
          height={32}
          alt="lalas pizzeria instagram link"
        /></Link>
  
        <Link target="_blank"  href='https://www.facebook.com/profile.php?id=61551944973297' rel="noopener noreferrer" ><Image className=" hover:scale-105 duration-300 ease-in"
          src="/facebook2.svg"
          width={32}
          height={32}
          alt="lalas pizzeria facebook link"
        /></Link>
          </section>
            {/* HEADING */}
            <h1 className='text-center text-[#FE0000]  text-[64px] font-bold leading-[60px]'>CATERING MENU COMING SOON</h1>
            <p className='text-[24px] font-medium text-center'>Thank you</p>
            </div>
            
        </div>
      
    </div>
  )
}

export default page
