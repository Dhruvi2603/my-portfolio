import React, { useState } from "react";
import { menu, closeMenu } from "../../icons/Icon";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full relative flex items-center justify-between pt-16 z-50 px-[5%] xl:px-[10%] mb-5">
      <a className="text-[30px] font-semibold text-white no-underline" href="/">
        Portfolio
      </a>
      <div className="relative flex items-center">
        {/* Menu Toggle Button */}
        <i 
          onClick={() => setMenuOpen(!menuOpen)} 
          className="block cursor-pointer text-[30px] font-semibold text-white md:hidden"
        >
          {menuOpen ? closeMenu : menu}
        </i>
        {/* Dropdown Menu Wrapper for Smaller Screens */}
        <div 
          className={`absolute top-[60px] right-[5%] ${menuOpen ? 'flex' : 'hidden'} md:hidden`}
        >
          <ul 
            className="flex-col bg-gradient-to-b from-[rgba(25,55,109,0.2)] to-[rgba(25,55,109,1)] p-[24px_33px] shadow-md rounded-[10px] z-20"
          >
            <li>
              <a className="text-[25px] text-white no-underline" href="#about">About</a>
            </li>
            <li>
              <a className="text-[25px] text-white no-underline" href="#skills">Skills</a>
            </li>
            <li>
              <a className="text-[25px] text-white no-underline" href="#projects">Projects</a>
            </li>
            <li>
              <a className="text-[25px] text-white no-underline" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        {/* Dropdown Menu for Larger Screens */}
        <ul 
          className="hidden md:flex md:static md:flex-row md:gap-[47px] md:bg-transparent md:p-0 md:shadow-none"
        >
          <li>
            <a className="text-[25px] text-white no-underline" href="#about">About</a>
          </li>
          <li>
            <a className="text-[25px] text-white no-underline" href="#skills">Skills</a>
          </li>
          <li>
            <a className="text-[25px] text-white no-underline" href="#projects">Projects</a>
          </li>
          <li>
            <a className="text-[25px] text-white no-underline" href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
