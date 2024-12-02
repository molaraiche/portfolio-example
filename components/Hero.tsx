import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section
      id='home'
      className='lg:container lg:mx-auto py-2 md:px-14 sm:px-10 xsm:px-4 flex items-center justify-between h-[65vh] flex-wrap lg:mb-7 md:mb-20 sm:mb-56 xsm:mb-[500px]'>
      <div className='2xl:w-[786px] xl:w-[486px] h-[369px] px-4'>
        <p className='lg:text-brand text-gray-1 text-xl font-bold uppercase font-nunito leading-normal '>
          UI/UX Designer
        </p>
        <h1 className='font-PD text-[74px] w-full font-bold text-bg/line'>
          Hello, my name is Madelyn Torff
        </h1>
        <p className='text-gray-3 text-2xl font-nunito my-8'>
          Short text with details about you, what you do or your professional
          career. You can add more information on the about page.
        </p>
        <div className='flex gap-3'>
          <button className='font-medium py-2 px-6 font-roboto text-lg bg-brand rounded-lg border-2 border-brand'>
            Projects
          </button>
          <button className='font-medium py-2 px-6 font-roboto text-lg border-2 border-bg/line rounded-lg'>
            LinkedIn
          </button>
        </div>
      </div>
      <div className='2xl:flex xl:flex hidden items-center justify-center absolute right-10'>
        <Image
          src='/assets/person-1.png'
          alt='this is sarah jhon a ui ux designer'
          width={720}
          height={629}
          className='object-cover w-auto h-auto'
        />
      </div>
    </section>
  );
};

export default Hero;
