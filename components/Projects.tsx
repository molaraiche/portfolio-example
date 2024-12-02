import React from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "@/constants/projects";
import { projectType } from "@/types/project";

const Projects = () => {
  return (
    <section className='h-screen lg:container lg:mx-auto py-2 md:px-14 sm:px-10 xsm:px-4 my-20'>
      <div className='flex items-center justify-center flex-col'>
        <h1 className='text-5xl leading-[72px] font-PD font-bold text-bg/line'>
          Projects
        </h1>
        <span className='w-[100px] h-1 bg-brand'></span>
      </div>
      <div className='flex items-center justify-center flex-col'>
        {projects.map((project: projectType) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            img={project.img}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
