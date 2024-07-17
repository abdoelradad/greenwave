import React, { useState } from "react";
import { BiCoffeeTogo } from "react-icons/bi";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { TfiMenu } from "react-icons/tfi";
import Logo from "../Logo/Logo";

const linksLeft = [
  {
    name: "home",
    href: "#",
  },
  {
    name: "about",
    href: "#about",
  },
  {
    name: "menu",
    href: "#menu",
  },
];
const linksRight = [
  {
    name: "blog",
    href: "#blog",
  },
  {
    name: "shop",
    href: "#shop",
  },
  {
    name: "contact",
    href: "#contact",
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="sticky w-full top-0 left-0 z-50 bg-[#121212] py-6 px-3">
        <div className="flex items-center justify-between w-full max-w-6xl mx-auto relative px-3">
          <ul className="hidden md:flex md:items-center gap-10">
            {linksLeft.map((link) => (
              <li>
                <a
                  href={link.href}
                  className="uppercase font-normal text-sm hover:text-primary transition-colors duration-200"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Logo />
          </div>
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
          </div>
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <TfiMenu size={20} className=" text-primary" />
          </button>
        </div>
        {/* menu */}
        <div
          className={` ${
            isOpen ? "top-0" : "top-[-100%]"
          } fixed left-0 w-full h-[60%] shadow-md bg-[#121212] z-50 text-center md:hidden transition-all duration-300 overflow-hidden`}
        >
          {isOpen && (
            <div className=" fixed top-0 left-0 w-full h-full -z-10 bg-black opacity-80"></div>
          )}
          {/* close */}
          <button
            onClick={() => setIsOpen(false)}
            className=" absolute right-6 top-5"
          >
            <IoClose size={30} />
          </button>
          {/* logo */}
          <div className="flex justify-center pt-6">
            <Logo className="w-fit bg-red-200" />
          </div>
          {/* links left */}
          <ul className="flex items-center flex-col gap-4 pt-10">
            {linksLeft.map((link) => (
              <li>
                <a
                  href="#"
                  onClick={() => setIsOpen(false)}
                  className="uppercase text-lg"
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
                  className="uppercase text-lg"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};
