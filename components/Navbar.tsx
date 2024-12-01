import { navLinks } from "@/constants/nav";
import { navLinksType } from "@/types/links";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className='h-[10vh] flex items-center justify-center'>
      <div className='lg:container lg:mx-auto py-2 md:px-14 sm:px-10 xsm:px-4 '>
        <div className='flex items-center justify-between '>
          <div className=''>
            <Link
              href='/'
              className='text-lg text-bg/line font-bold font-comfortaa '>
              Madelyn Torff
            </Link>
          </div>
          <nav className='flex gap-12'>
            {navLinks.map((link: navLinksType) => (
              <Link
                key={link.id}
                href={link.path}
                className='font-raleway font-medium text-bg/line'>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
