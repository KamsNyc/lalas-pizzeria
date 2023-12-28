import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from './(components)/Logo'
import Footer from './(components)/Footer'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import LocalOfferIcon from '@mui/icons-material/LocalOffer';


function page() {
  return (

    <section className="flex min-h-screen justify-center w-full px-2 md:px-4">
    
      <main id="top" className="w-full mt-14">

        {/* SOCIAL LINKS */}
      <section id="wrapper" className="flex items-center justify-center py-1 border-b gap-4 mb-4 mt-1">
          
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
        
        {/* HERO */}
        <section>
        <h1 className="md:mt-10 text-5xl sm:text-8xl font-bold text-[#FE0000] text-center">Lalas Pizzeria</h1>
        <h4 className="text-center pb-3 font-medium text-base md:text-xl">HOURS: OPEN 7 DAYS - 11AM - 10PM </h4>
        <Logo />
        
        <h3 className=" text-center text-md md:text-xl text-black font-semibold py-2">Address: 215-32 Hillside Ave Queens Village, NY 11427</h3>
        <h2 className="mb-5 text-center text-md md:text-lg cursor-pointer">Call us (347) 426 5287</h2>

        <div id="wrapper" className='flex items-center justify-center gap-4'>
        <Link className="py-2 px-4 bg-gray-50 text-[#FF8000] rounded-xl cursor-pointer hover:scale-105 ease-in duration-300 font-bold border flex item-center justify-between gap-2" href='http://menus.fyi/6946816' target="_blank" rel="noopener noreferrer"><Image src={'/grubhub.svg'} alt='grubhub menu' width={25} height={25} />Order Online</Link>

        <Link className="py-2 px-4 bg-gray-50 rounded-xl cursor-pointer hover:scale-105 ease-in duration-300 font-bold text-[#fe0000] border" href="https://www.google.com/maps/place/Lala's+Pizzeria/@40.7271297,-73.7513489,17z/data=!3m1!4b1!4m6!3m5!1s0x89c261fe9f6cc74f:0xa6bfb34a206c0c17!8m2!3d40.7271297!4d-73.748774!16s%2Fg%2F11vbwq39_x?entry=ttu" target="_blank" rel="noopener noreferrer">Open in Maps</Link>

        </div>
        </section>

          {/* REVIEW */}
        <section id='menu' className=" items-center justify-center mt-16 mb-4 md:p-10">
            <h1 className='uppercase text-center text-4xl pb-6 text-[#FE0000] tracking-wide font-bold'>Our Menu</h1>
          <div className="flex w-full justify-center items-center">
          <Image className="cursor-pointer rounded-xl"
              src="/lalafrontmenunew.png"
              width={2550}
              height={3300}
              priority
              alt="lala's front menu page"
            />
          </div>

          <div className="flex w-full justify-center items-center mt-4 md:mt-10 rotate-180">
          <Image className="cursor-pointer rounded-xl"
              src="/lalabackmenunew.png"
              width={2550}
              height={3300}
              priority
              alt="lala's back menu page"
            />
          </div>

        </section>

        {/* PROMOTIONS */}
        <section id="promotions" className='mt-16 px-0 md:px-40'>
        <h1 className='uppercase text-center text-3xl md:text-4xl  text-[#FE0000] tracking-wide font-bold pb-6'>Our Promotions</h1>

        {/* PROMO 1 */}
        {/* <Alert className='mb-6 md:mb-12'>
    <LocalOfferIcon/>
  <AlertTitle>AVALIABLE: SUNDAY - TUESDAY | 12PM - 4PM</AlertTitle>
  <AlertDescription className=''>
    <span><strong>BUY ANY 2 SLICES AND GET A SODA FOR FREE</strong></span>
  </AlertDescription >
</Alert> */}
      {/* PROMO 2 */}
{/* <Alert>
    <LocalOfferIcon/>
  <AlertTitle>DEC-25 - CHRISTMAS HOLIDAY DAY SPECIAL </AlertTitle>
  <AlertDescription className='flex-col flex'>
    <span><strong>20% OFF, MINIMUM $15</strong></span>
    <span><strong>FREE LOCAL DELIVERY QUEENS VILLAGE</strong></span>
  </AlertDescription >
</Alert> */}

        </section>

         {/* REVIEWS */}
         {/* <section id="reviews" className='mt-16 '>
        <h1 className='uppercase text-center text-3xl md:text-4xl text-[#FE0000] tracking-wide font-bold pb-6'>Google Reviews</h1>
        <GoogleReview />

        </section> */}

         {/* INSTAGRAM FEED */}
         {/* <section id="instagramfeed" className='mt-16 '>
        <h1 className='uppercase text-center text-3xl md:text-4xl text-[#FE0000] tracking-wide font-bold'>Our Instagram</h1>
        <InstagramFeed />

        </section> */}
        
        <footer>
        <h2 className="text-center text-2xl cursor-pointer text-bold hover:text-[#b10000] pb-2"><Link href={'#top'}>RETURN TO TOP</Link></h2>
        <Footer />
        </footer>
        

        
      </main>





    </section>
   
  )
}

export default page
