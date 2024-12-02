import { FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='flex items-center flex-col justify-center h-[30vh]'>
      <div className='flex gap-5 my-10'>
        <a href='https://www.instagram.com/molaraiche/' target='_blank'>
          <FaInstagram className='w-8 h-8 hover:text-brand ease-in duration-200' />
        </a>
        <a href='https://www.linkedin.com/in/mohamedlaraiche/' target='_blank'>
          <FaLinkedin className='w-8 h-8 hover:text-brand ease-in duration-200' />
        </a>
      </div>
      <div className=''>
        <p>
          <a
            href='http://molaraiche.com/'
            target='_blank'
            className='font-semibold mx-2 hover:text-brand ease-in duration-150'
            title='freelancer web developer'>
            molaraiche
          </a>
          2024
        </p>
      </div>
    </footer>
  );
};

export default Footer;
