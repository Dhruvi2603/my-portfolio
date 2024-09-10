import React from 'react';
import project_img from '../../assets/project.jpg'

const ProjectCard = ({ project }) => {
  return (
    <div className="flex flex-col  rounded-lg bg-gradient-to-b from-[#576cbc] to-[#132a53] shadow-[0_16px_14px_0_#04152d] p-4 w-[370px] h-[550px]">
      <img className="mb-6 max-h-[300px]" src={project_img} alt="" />
      <h3 className="text-[25px] font-bold ml-2">{project.title}</h3>
      <p className="mt-1 text-xl font-normal ml-2">{project.description}</p>
      <ul className="w-full mt-3 flex flex-wrap gap-4 list-none">
        {project.skills.map((skill, skillId) => (
          <li className="text-[20px] font-normal rounded-md bg-[#09347e] py-1 px-3" key={skillId}>{skill}</li>
        ))}
      </ul>
      <div className="w-full mt-4 flex justify-center gap-4">
        <a className="text-white text-[20px] font-normal mt-3 rounded-md bg-[#0596ba] py-1 px-8" href={project.demo}>Demo</a>
        <a className="text-white text-[20px] font-normal mt-3 rounded-md bg-[#0596ba] py-1 px-8" href={project.source}>Source Code</a>
      </div>
    </div>
  );
};

export default ProjectCard;
