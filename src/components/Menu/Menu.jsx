import React from "react";
import menuItem from "../../assets/menuitem.jpg";

const MenuItems = [
  {
    name: "black coffee",
    price: "4",
  },
  {
    name: "Caramel Latte",
    price: "7",
  },
  {
    name: "Americano",
    price: "6",
  },
  {
    name: "Espresso",
    price: "10",
  },
  {
    name: "Macchiato",
    price: "5",
  },
  {
    name: "Mocha",
    price: "5",
  },
];

const Menu = () => {
  return (
    <section className="py-24" id="menu">
      <h1 className="title text-4xl md:text-5xl cursor-default tracking-tight font-bold capitalize text-center">
        <span className=" text-primary">our</span> menu
      </h1>

      <div className="grid grid-cols-2 gap-10 md:grid-cols-3 md:gap-10 place-items-center py-16">
        {MenuItems.map((item, index) => (
          <div
            className=" w-[200px] md:w-[320px] p-5 cursor-pointer group"
            key={index}
          >
            <img
              src={menuItem}
              alt=""
              className="group-hover:scale-105 transition-all duration-200"
            />
            <div className="flex flex-col items-center gap-2">
              <h2 className="capitalize text-lg">{item.name}</h2>
              <p className="text-primary text-xl font-semibold">
                {item.price}$
              </p>
              <button className="btn-primary text-xs">see details</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
