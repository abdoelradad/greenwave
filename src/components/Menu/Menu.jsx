import React, { useState } from "react";
import menuItem from "../../assets/menuitem.jpg";
import { IoClose } from "react-icons/io5";

const MenuItems = [
  {
    name: "black coffee",
    price: "4",
    details: [
      {
        detail: "Good Coffee",
      },
      {
        detail: "Good Coffee",
      },
      {
        detail: "Good Coffee",
      },
      {
        detail: "Good Coffee",
      },
    ],
  },
  {
    name: "Caramel Latte",
    price: "7",
    details: [
      {
        detail: "Good Coffee",
      },
      {
        detail: "Good Coffee",
      },
      {
        detail: "Good Coffee",
      },
      {
        detail: "Good Coffee",
      },
    ],
  },
  {
    name: "Americano",
    price: "6",
    details: [
      {
        detail: "Good Coffee",
      },
      {
        detail: "Good Coffee",
      },
      {
        detail: "Good Coffee",
      },
      {
        detail: "Good Coffee",
      },
    ],
  },
  {
    name: "Espresso",
    price: "10",
    details: [
      {
        detail: "Good Coffee",
      },
      {
        detail: "Good Coffee",
      },
      {
        detail: "Good Coffee",
      },
      {
        detail: "Good Coffee",
      },
    ],
  },
  {
    name: "Macchiato",
    price: "5",
    details: [
      {
        detail: "Good Coffee",
      },
      {
        detail: "Good Coffee",
      },
      {
        detail: "Good Coffee",
      },
      {
        detail: "Good Coffee",
      },
    ],
  },
  {
    name: "Mocha",
    price: "5",
    details: [
      {
        detail: "Good Coffee",
      },
      {
        detail: "Good Coffee",
      },
      {
        detail: "Good Coffee",
      },
    ],
  },
];

const Menu = () => {
  const [isModal, setIsModal] = useState(false);
  return (
    <section
      className="relative py-24 max-w-6xl mx-auto overflow-hidden px-5"
      id="menu"
    >
      <h1 className="title text-4xl md:text-5xl cursor-default tracking-tight font-bold capitalize text-center">
        <span className=" text-primary">our</span> menu
      </h1>

      <div className="grid grid-cols-2 gap-10 md:grid-cols-3 md:gap-10 place-items-center py-16">
        {MenuItems.map((item, index) => (
          <div
            className=" w-[200px] md:w-[320px] p-5 cursor-pointer group"
            key={index}
          >
            <img src={menuItem} alt="" />
            <div className="flex flex-col items-center gap-2">
              <h2 className="capitalize text-lg">{item.name}</h2>
              <p className="text-primary text-xl font-semibold">
                {item.price}$
              </p>
              <button
                className="btn-primary text-xs"
                onClick={() => setIsModal(true)}
              >
                see details
              </button>
            </div>
            {isModal && (
              <div className=" z-50  fixed top-0 left-0 w-full h-full bg-black opacity-80"></div>
            )}
            {isModal && (
              <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#121212] shadow-md rounded-xl w-[80%] md:w-[400px] h-[60%] z-50">
                <h1 className="text-center py-8 text-xl text-primary">
                  Product details
                </h1>
                <ul className="flex items-center flex-col gap-5">
                  {item.details.map((feat, index) => {
                    return (
                      <li key={index} className="text-sm text-gray-300">
                        {feat.detail}
                      </li>
                    );
                  })}
                </ul>
                <button
                  onClick={() => setIsModal(false)}
                  className=" absolute right-6 top-5"
                >
                  <IoClose size={30} />
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
