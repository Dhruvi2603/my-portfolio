import React from "react";
import tailwind_img from '../../assets/tailwind.png';
import mongodb_img from '../../assets/mongodb.png';
import mysql_img from '../../assets/mysql.png';
import {
    api,
    bootsrap,
    css,
    git,
    html,
    javascript,
    node,
    php,
    react,
} from "../../icons/Icon";

const Skills = () => {
  return (
    <section id="skills" className="text-white mt-[79px] lg:mx-[10%] mx-[5%] z-10">
      <h2 className="text-white text-4xl font-bold mb-12 tracking-wider uppercase">Skills</h2>
      
      <div className="grid grid-cols-2 gap-5">
        <div className="relative mb-5 bg-gray-950 bg-opacity-90 p-4 rounded-lg overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-transparent opacity-0 transition-opacity duration-500 ease-in-out hover:opacity-100"></div>
          <div className="relative z-50">
            <h3 className="md:text-2xl text-base font-semibold mb-2">Programming Languages</h3>
            <div className="flex flex-wrap items-center xl:gap-[80px] lg:gap-10 gap-7">
              <i className="xl:text-[80px] text-5xl text-[#CE5E36]">{html}</i>
              <i className="xl:text-[80px] text-5xl text-[#1BA1D4]">{css}</i>
              <i className="xl:text-[80px] text-5xl text-[#F7DF1E]">{javascript}</i>
              <i className="xl:text-[80px] text-5xl text-[#7A6C9E]">{php}</i>
            </div>
          </div>
        </div>
        
        <div className="relative mb-5 bg-gray-950 bg-opacity-90 p-4 rounded-lg overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-transparent opacity-0 transition-opacity duration-500 ease-in-out hover:opacity-100"></div>
          <div className="relative z-50">
            <h3 className="md:text-2xl text-base font-semibold mb-2">Frameworks/Libraries</h3>
            <div className="flex flex-wrap items-center xl:gap-14 lg:gap-10 gap-7">
              <i className="xl:text-[80px] text-5xl text-[#61DAFB]">{react}</i>
              <i className="xl:text-[80px] text-5xl text-[#68A063]">{node}</i>
              <i className="xl:text-[80px] text-5xl text-[#563D7C]">{bootsrap}</i>
              <img className="xl:w-[80px] w-12 h-12 xl:h-[80px]" src={tailwind_img} alt="Tailwind" />
            </div>
          </div>
        </div>
        
        <div className="relative mb-5 bg-gray-950 bg-opacity-90 p-4 rounded-lg overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-transparent opacity-0 transition-opacity duration-500 ease-in-out hover:opacity-100"></div>
          <div className="relative z-50">
            <h3 className="md:text-2xl text-base font-semibold mb-2">Database Management</h3>
            <div className="flex flex-wrap items-center gap-10 mt-8">
              <img className="xl:w-[80px] xl:h-[80px] w-12 h-12" src={mysql_img} alt="MySQL" />
              <img className="xl:w-[80px] xl:h-[80px] w-12 h-12" src={mongodb_img} alt="MongoDB" />
            </div>
          </div>
        </div>
        
        <div className="relative mb-5 bg-gray-950 bg-opacity-90 p-4 rounded-lg overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-transparent opacity-0 transition-opacity duration-500 ease-in-out hover:opacity-100"></div>
          <div className="relative z-50">
            <h3 className="md:text-2xl text-base font-semibold mb-2">Tools & Technologies</h3>
            <div className="flex flex-wrap items-center gap-10">
              <i className="xl:text-[80px] text-5xl text-[#F1502F]">{git}</i>
              <i className="xl:text-[80px] text-5xl text-[#000000]">{api}</i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
