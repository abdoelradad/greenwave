import React, { useState } from "react";
import { BiCoffeeTogo } from "react-icons/bi";
import { FiMenu } from "react-icons/fi";
import { IoBagHandleOutline } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

const linksLeft = [
  {
    name: "home",
  },
  {
    name: "about",
  },
  {
    name: "menu",
  },
  {
    name: "gallary",
  },
];
const linksRight = [
  {
    name: "blog",
  },
  {
    name: "shop",
  },
  {
    name: "contact",
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="sticky w-full top-0 left-0 z-50 bg-[#121212] shadow-sm py-5 px-4">
        <div className="flex items-center justify-between w-full max-w-6xl mx-auto relative">
          {/* links left */}
          <ul className="items-center gap-10 hidden md:flex">
            {linksLeft.map((link) => (
              <li>
                <a
                  href="#"
                  className="uppercase font-normal text-sm hover:text-primary transition-colors duration-200"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          {/* Logo */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-x-1 font-bold">
            DEATH{" "}
            <span>
              <BiCoffeeTogo className=" text-primary" />
            </span>{" "}
            COFFEE
          </div>
          {/* links right */}
          <div className="flex items-center gap-x-10">
            <ul className="items-center gap-10 hidden md:flex">
              {linksRight.map((link) => (
                <li>
                  <a
                    href="#"
                    className="uppercase font-normal text-sm hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="relative">
              <IoBagHandleOutline
                size={25}
                className=" cursor-pointer relative text-primary"
              />
              <span className=" absolute top-4 left-5 font-extrabold text-xs text-gray-300">
                0
              </span>
            </div>
          </div>

          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <FiMenu size={25} />
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-white-400 rounded-md bg-[#121212] z-50 text-center md:hidden">
          {/* close */}
          <button
            onClick={() => setIsOpen(false)}
            className=" absolute right-6 top-9"
          >
            <IoClose size={30} />
          </button>

          {/* Logo */}
          <div className=" absolute left-1/2 -translate-x-1/2 top-10 text-center flex items-center gap-x-2 font-bold italic">
            DEATH{" "}
            <span>
              <BiCoffeeTogo className=" text-primary" />
            </span>{" "}
            COFFEE
          </div>

          {/* links left */}
          <ul className="flex items-center flex-col gap-4 pt-32">
            {linksLeft.map((link) => (
              <li>
                <a
                  href="#"
                  onClick={() => setIsOpen(false)}
                  className=" capitalize font-normal text-lg hover:text-primary transition-colors duration-200"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <ul className="flex items-center flex-col gap-4 pt-4">
            {linksRight.map((link) => (
              <li>
                <a
                  href="#"
                  onClick={() => setIsOpen(false)}
                  className=" capitalize font-normal text-lg hover:text-primary transition-colors duration-200"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};
