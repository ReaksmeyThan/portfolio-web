import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { Link } from "react-scroll";
import img from "../assets/img/react.svg";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <div className="fixed w-full z-10">
      <div>
        <div className="flex flex-row justify-between p-5 md:px-32 px-5 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          <div className="flex flex-row items-center cursor-pointer">
            <img width={30} src={img} alt="img" className=" mr-1" />
            <h1 className="text-3xl font-semibold text-brightColor">
              DevHorizon
            </h1>
          </div>
          <nav className="hidden lg:flex flex-row items-center text-lg font-medium gap-8">
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightColor cursor-pointer transition-all"
            >
              Home
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightColor cursor-pointer transition-all"
            >
              About Me
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightColor cursor-pointer transition-all"
            >
              Services
            </Link>
            <Link
              to="education"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightColor cursor-pointer transition-all"
            >
              Education
            </Link>
            <Link
              to="experience"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightColor cursor-pointer transition-all"
            >
              Experieence
            </Link>
            <Link
              to="porfolio"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightColor cursor-pointer transition-all"
            >
              Porfolio
            </Link>
          </nav>

          <div className=" lg:hidden">
            {menu ? (
              <AiOutlineClose size={28} onClick={handleChange} />
            ) : (
              <HiOutlineMenuAlt1 size={28} onClick={handleChange} />
            )}
          </div>

          <div
            className={`${
              menu ? " translate-x-0" : "-translate-x-full"
            } lg:hidden flex flex-col absolute bg-black text-white left-0 top-20 font-semibold text-2xl text-center z-10 pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
          >
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightColor cursor-pointer transition-all"
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightColor cursor-pointer transition-all"
              onClick={closeMenu}
            >
              About Me
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightColor cursor-pointer transition-all"
              onClick={closeMenu}
            >
              Services
            </Link>
            <Link
              to="education"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightColor cursor-pointer transition-all"
              onClick={closeMenu}
            >
              Education
            </Link>
            <Link
              to="experience"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightColor cursor-pointer transition-all"
              onClick={closeMenu}
            >
              Experieence
            </Link>
            <Link
              to="porfolio"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightColor cursor-pointer transition-all"
              onClick={closeMenu}
            >
              Porfolio
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
