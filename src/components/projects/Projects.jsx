import React from 'react';
import projectsData from '../../data/Projects.json'; // Renamed import
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <section id="projects" className="mt-[76px] text-white mx-[10%]">
      <h2 className="text-[35px] font-bold tracking-wider uppercase">Projects</h2>
      <div className="mt-[37px] flex flex-wrap items-center justify-center gap-2  w-full">
        {projectsData.map((project, id) => (
          <ProjectCard key={id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
