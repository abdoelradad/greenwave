import React from "react";
import { MenuItems } from "../Menu/Menu";

const Modal = ({ activeId, setShowModal }) => {
  const coffee = MenuItems.find((coffee) => coffee.id === activeId);
  return (
    <div onClick={() => setShowModal(false)}>
      <div className="w-full h-full z-40 bg-black opacity-70 fixed top-0 left-0"></div>
      <div className=" fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#121212] w-[80%] md:w-[400px] h-[50%] rounded-3xl z-50">
        <div className="p-6 flex items-center justify-center flex-col gap-3">
          <h1 className="text-lg text-primary font-bold">{coffee.name}</h1>
          <p className=" font-extrabold text-primary">{coffee.price}$</p>
          <ul className="flex flex-col gap-3">
            {coffee.details.map((feat) => (
              <li className="text-sm text-gray-200 text-center">{feat}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Modal;
