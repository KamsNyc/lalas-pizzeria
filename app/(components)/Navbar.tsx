import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav className="fixed w-full flex items-center justify-between border-y border-[#FE0000]/5 text-[14px] h-14 font-bold gap-2 px-4 lg:px-96 bg-gray-50/20 backdrop-blur-sm">
      <section className="flex items-center gap-4 uppercase justify-center">
        <Link
          className="hidden md:block hover:scale-105 duration-300 ease-in"
          href={"/"}
        >
          Home
        </Link>
        <Link className="hover:scale-105 duration-300 ease-in" href={"#menu"}>
          Menu
        </Link>
        <Link
          className="hover:scale-105 duration-300 ease-in"
          href={"#promotions"}
        >
          Promotions
        </Link>
        <Link
          className="hover:scale-105 duration-300 ease-in"
          href={"#reviews"}
        >
          Reviews
        </Link>
      </section>

      <section>
        <Link href="tel:3474265287">
          <button className="text-[12px] md:text-[14px] px-2 py-2 bg-[#FE0000] text-white hover:scale-105 duration-300 ease-in rounded-xl">
            Call Now
          </button>
        </Link>
      </section>
    </nav>
  );
}

export default Navbar;
