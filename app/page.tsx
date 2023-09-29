import Image from "@/node_modules/next/image";
import Link from "@/node_modules/next/link";
import Logo from "./(components)/Logo";

export default function Home() {
  return (
    <main className="flex min-h-screen justify-center my-20 w-full">

      <section id="top" className="w-full">
        <Logo />
        <h1 className="pt-4 pb-2 text-7xl sm:text-8xl  font-bold text-[#b10000] text-center">Our Menu</h1>
        <p className=" text-lg text-center">215-32 Hillside Ave Queens Village, NY 11426</p>
        <p className="text-md py-2 text-center">Call us (347) 456 3424</p>

        <div className="text-center pt-4"> <Link className="py-2 px-4 bg-red-500 rounded-xl cursor-pointer hover:scale-105 ease-in duration-300" href={'/'}>Order Online</Link></div>


        <section className="  items-center justify-center py-10  p-2 md:p-10">
          <div className="flex w-full justify-center items-center">
          <Image className="cursor-pointer rounded-xl"
              src="/MenuFront.png"
              width={2550}
              height={3300}
              alt="Front of menu"
            />
          </div>

          <div className="flex w-full justify-center items-center md:p-10 pt-8">
          <Image className=" rotate-180 cursor-pointer rounded-xl"
              src="/MenuBack.png"
              width={2550}
              height={3300}
              alt="Back of menu"
            />
          </div>
        </section>

        <h2 className="text-center cursor-pointer text-bold hover:text-[#b10000]"><Link href={'#top'}>RETURN TO TOP</Link></h2>
      </section>





    </main>
  )
}
