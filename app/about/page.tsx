import Image from "next/image";

const About = () => {
  return (
    <section className='lg:container lg:mx-auto py-2 md:px-14 sm:px-10 xsm:px-4 flex items-center justify-between lg:flex-row flex-col-reverse'>
      <div className=''>
        <h1 className='font-PD text-5xl font-bold'>About me</h1>
        <p className='my-8 text-2xl font-nunito lg:w-[558px] text-gray-3 '>
          Nisl arcu, scelerisque neque ut. Tincidunt amet, tempor duis tortor
          neque auctor dis ipsum. Pretium cras amet odio amet eleifend id sed
          cras sed. Aliquet risus posuere aliquet imperdiet sit.
        </p>
        <div className='flex'>
          <button className='bg-brand py-2 px-6 font-roboto text-lg rounded-lg'>Resume</button>
        </div>
      </div>
      <div className='bg-brand rounded-full'>
        <Image
          src='/assets/resume.png'
          alt='About Madelyn Torff'
          width={524}
          height={524}
        />
      </div>
    </section>
  );
};

export default About;
