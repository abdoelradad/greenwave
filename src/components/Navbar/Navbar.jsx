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
      <nav className="z-50 rounded-full bg-yellow-0 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 w-full fixed top-5 max-w-6xl mx-auto border border-gray-900">
        <div className="flex items-center justify-between relative px-10 py-5">
          {/* links left */}
          <ul className="items-center gap-10 hidden md:flex">
            {linksLeft.map((link) => (
              <li>
                <a
                  href="#"
                  className="capitalize font-normal hover:text-primary transition-colors duration-200"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          {/* Logo */}
          <div className=" cursor-default absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex  items-center  gap-x-2 font-bold">
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
                    className=" capitalize font-normal hover:text-primary transition-colors duration-200"
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
              <span className=" absolute top-3 left-6 font-extrabold text-sm">
                1
              </span>
            </div>
          </div>

          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <FiMenu size={25} />
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black z-50 text-center md:hidden">
          {/* close */}
          <button
            onClick={() => setIsOpen(false)}
            className=" absolute right-6 top-9"
          >
            <IoClose size={30} />
          </button>

          {/* Logo */}
          <div className=" absolute left-1/2 -translate-x-1/2 top-10 text-center flex items-center gap-x-2 font-bold">
            DEATH{" "}
            <span>
              <BiCoffeeTogo className=" text-primary" />
            </span>{" "}
            COFFEE
          </div>

          {/* links left */}
          <ul className="flex items-center flex-col gap-8 pt-32">
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
          <ul className="flex items-center flex-col gap-8 pt-8">
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
