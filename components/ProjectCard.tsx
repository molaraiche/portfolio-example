import { projectType } from "@/types/project";
import Image from "next/image";

const ProjectCard = ({ title, description, img }: projectType) => {
  return (
    <div className='w-full max-w-[992px] h-auto md:h-[524px] rounded-3xl flex flex-col justify-between md:flex-row items-stretch border-2 my-20 mx-auto overflow-hidden'>
      <div className='w-full md:w-[407px] flex justify-center flex-col p-6 md:pl-10'>
        <h4 className='font-PD text-[30px] md:text-[40px] text-bg/line font-bold'>
          {title}
        </h4>
        <p className='text-gray-3 text-base md:text-lg font-nunito my-4 md:my-6'>
          {description}
        </p>
        <div>
          <button className='rounded-3xl border border-bg/line py-2 px-6 font-medium text-base md:text-lg font-roboto'>
            View Project
          </button>
        </div>
      </div>

      <div className='w-full md:w-[496px] h-[300px] md:h-full lg:rounded-r-3xl overflow-hidden flex-shrink-0'>
        <Image
          src={img}
          alt={title}
          layout='responsive'
          width={496}
          height={524}
          className='object-cover'
        />
      </div>
    </div>
  );
};

export default ProjectCard;
