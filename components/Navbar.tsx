"use client";
import { navLinks } from "@/constants/nav";
import { navLinksType } from "@/types/links";
import Link from "next/link";
import { useState } from "react";
import { CgMenuLeft } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [menuToggle, setMenuToggle] = useState(true);
  const menuHandler = () => {
    console.log(menuToggle);
    setMenuToggle(!menuToggle);
    console.log(menuToggle);
  };
  return (
    <header className='h-[15vh] flex items-center justify-center'>
      <div className='container mx-auto p-3'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center justify-center'>
            <Link
              href='/'
              className='text-lg text-bg/line font-extrabold font-comfortaa '>
              Madelyn Torff
            </Link>
          </div>
          <nav
            className={`flex gap-12  lg:static md:static absolute top-[10vh] right-0 lg:flex-row md:flex-row flex-col items-center justify-center lg:w-fit md:w-fit w-full lg:bg-transparent md:bg-transparent bg-gray-1 h-[40vh] ease-in duration-150 lg:translate-x-0 md:translate-x-0 ${
              menuToggle ? "-translate-x-[200%]" : "translate-x-0"
            } `}>
            {navLinks.map((link: navLinksType) => (
              <Link
                key={link.id}
                href={link.path}
                className='font-raleway font-medium lg:text-bg/line md:text-bg/line text-brand lg:text-base md:text-base text-4xl text-left w-full ml-auto container'>
                {link.label}
              </Link>
            ))}
          </nav>
          <div className='lg:hidden md:hidden flex items-center justify-center absolute right-0 z-50'>
            {menuToggle ? (
              <CgMenuLeft
                className='w-8 h-8 mx-6 text-gray-1'
                onClick={menuHandler}
              />
            ) : (
              <IoMdClose
                className='w-8 h-8 mx-6 text-gray-1'
                onClick={menuHandler}
              />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
