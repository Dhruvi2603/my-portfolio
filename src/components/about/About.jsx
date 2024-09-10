import React from 'react';
import hero2_img from '../../assets/hero2.png';
import { education, goals, interest } from '../../icons/Icon';

const About = () => {
  return (
   <section className="relative bg-gray-950 bg-opacity-90 rounded-2xl lg:p-[73px] md:p-8 p-4 mt-[129px] lg:mx-[10%] mx-[5%] z-10" id="about">
    <h2 className="text-white text-4xl font-bold tracking-wider uppercase">About</h2>
    <div className="flex md:flex-row flex-col items-center">
        <img className="md:w-1/3 w-2/3" src={hero2_img} alt="About" />
        <ul className="text-white flex flex-col xl:gap-12 gap-3">
            <li className="flex flex-row items-center rounded-lg p-5 ml-5 bg-gradient-to-r from-blue-200 to-transparent bg-no-repeat bg-[length:0%_100%] group transition-all duration-400 hover:bg-[length:100%_100%]">
              <i className="text-blue-600 text-2xl mr-4 mb-[65px]">{education}</i>
              <div className="flex flex-col">
                <h3 className="text-blue-600 text-2xl font-semibold">Education</h3>
                <p className="xl:text-2xl lg:text-lg text-sm">I am a 7th-semester IT student with a strong foundation in software development and data structures.</p>
              </div>
            </li>
            <li className="flex flex-row items-center rounded-lg p-5 ml-5 bg-gradient-to-r from-blue-200 to-transparent bg-no-repeat bg-[length:0%_100%] group transition-all duration-400 hover:bg-[length:100%_100%]">
              <i className="text-blue-600 text-2xl mr-4 lg:mb-[90px] mb-20">{interest}</i>
              <div className="flex flex-col">
                <h3 className="text-blue-600 text-2xl font-semibold">Interests</h3>
                <p className="xl:text-2xl lg:text-lg text-sm">Passionate about front-end development, I enjoy creating responsive and visually appealing web applications. I am always exploring new technologies.</p>
              </div>
            </li>
            <li className="flex flex-row items-center rounded-lg p-5 ml-5 bg-gradient-to-r from-blue-200 to-transparent bg-no-repeat bg-[length:0%_100%] group transition-all duration-400 hover:bg-[length:100%_100%]">
              <i className="text-blue-600 text-2xl mr-4 lg:mb-[120px] mb-20">{goals}</i>
              <div className="flex flex-col">
                <h3 className="text-blue-600 text-2xl font-semibold">Goals</h3>
                <p className="xl:text-2xl lg:text-lg text-sm">My goal is to become proficient in full-stack development and make significant contributions to the tech industry by building user-friendly and innovative web applications.</p>
              </div>
            </li>
        </ul>
    </div>
   </section>
  )
}

export default About;
