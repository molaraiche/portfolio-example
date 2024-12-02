import { projectType } from "@/types/project";
import Image from "next/image";

const ProjectCard = ({ title, description, img }: projectType) => {
  return (
    <div className='w-[992px] h-[524px] rounded-3xl flex items-center justify-between border-2 my-20 '>
      <div className=' w-[407px] hover-[232px] flex justify-center flex-col ml-10'>
        <h4 className='font-PD text-[40px] text-bg/line font-bold'>{title}</h4>
        <p className='text-gray-3 text-lg font-nunito my-6'>{description}</p>
        <div className=''>
          <button className='rounded-3xl border border-bg/line py-2 px-6 font-medium text-lg font-roboto'>
            View Project
          </button>
        </div>
      </div>
      <div className='flex items-center justify-center'>
        <Image
          src={img}
          alt=''
          width={496}
          height={526}
          className='object-cover rounded-r-3xl'
        />
      </div>
    </div>
  );
};

export default ProjectCard;
