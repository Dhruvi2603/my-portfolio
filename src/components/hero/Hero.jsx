import React from 'react';
import hero_img from '../../assets/hero.png';

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      <section className="relative flex flex-col-reverse md:flex-row items-center justify-between mt-12 xl:mx-[10%] mx-[5%] z-10">
        <style>{`
          @keyframes floating {
            0% {
              transform: translate(0, 0px);
            }
            50% {
              transform: translate(0, 10px);
            }
            100% {
              transform: translate(0, -0px);
            }
          }

          .animate-floating {
            animation: floating 3s ease-in-out infinite;
          }

          .font-roboto {
            font-family: 'Roboto', sans-serif;
          }
        `}</style>
        <div className="flex flex-col items-center text-white z-50 relative">
          <h1 className='xl:text-7xl lg:text-4xl text-xl font-roboto text-white font-black mb-8 xl:mr-[35%] lg:mr-[62%] md:mr-[59%] md:mt-0 mt-3'>
            Hi, I am Dhruvi
          </h1>
          <p className="xl:text-3xl lg:text-2xl text-lg font-roboto mb-8 xl:ml-5">
            I am a student with a passion for full stack development. Skilled in creating responsive and visually appealing web applications.
          </p>
          <a
            className="no-underline bg-blue-600 rounded-full text-white lg:text-3xl text-xl font-semibold px-6 py-4 xl:mr-[70%] lg:mr-[66%]  shadow-lg"
            href="mailto:pateldhruvi26611@gmail.com"
          >
            Contact Me
          </a>
        </div>
        <img
          className="xl:w-[400px] w-[300px] animate-floating bg-blue-700 rounded-full"
          src={hero_img}
          alt="Hero Image"
        />
      </section>
      <div className="absolute w-[50%] h-[50%] min-w-[250px] min-h-[250px] -top-1/4 -left-1/4 rounded-full bg-opacity-70 bg-blue-900 filter blur-3xl z-0" />
      <div className="absolute w-[50%] h-[50%] min-w-[250px] min-h-[250px] -bottom-1/4 -right-1/4 rounded-full bg-opacity-70 bg-blue-900 filter blur-3xl z-0" />
    </div>
  );
};

export default Hero;
