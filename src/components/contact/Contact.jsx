import React from 'react';
import { email, github } from '../../icons/Icon';

const Contact = () => {
  return (
    <footer id='contact' className="text-white mt-[105px] bg-[#090945] flex md:flex-row flex-col justify-evenly w-full py-[58px] md:px-[10%] px-[5%] gap-2">
      <div className="text-center">
        <h2 className="lg:text-6xl text-4xl  font-bold tracking-widest">Contact</h2>
        <p className="lg:text-3xl text-xl font-normal tracking-wide">Feel free to reach out.</p>
      </div>
      <ul className="flex flex-col items-start list-none gap-[26px] lg:mt-[28px] mt-3 px-[15%] md:px-0">
        <li className="flex items-center gap-[25px]">
          <i className="lg:text-xl md:text-lg">{email}</i>
          <a className="text-white lg:text-xl md:text-lg font-normal tracking-wide" href="mailto:pateldhruvi2611@gmail.com">pateldhruvi2611@gmail.com</a>
        </li>
        <li className="flex items-center gap-[25px]">
          <i className="lg:text-xl md:text-lg">{github}</i>
          <a className="text-white lg:text-xl md:text-lg font-normal tracking-wide" href="https://github.com/Dhruvi2603">https://github.com/Dhruvi2603</a>
        </li>
      </ul>
    </footer>
  );
};

export default Contact;
