import React, { useState } from "react";
import menuItem from "../../assets/menuitem.jpg";
import Modal from "../Modal/Modal";
import { motion } from "framer-motion";

export const MenuItems = [
  {
    id: "01",
    name: "black coffee",
    price: "4",
    details: [
      "A classic espresso drink, the Macchiato features",
      "a bold shot of espresso with a dollop of steamed milk",
      "creating a perfect balance of rich and smooth flavors.",
    ],
  },
  {
    id: "02",
    name: "Caramel Latte",
    price: "7",
    details: [
      "A delightful blend of rich espresso",
      "creamy steamed milk, and sweet caramel syrup",
      "the Caramel Latte is topped with a light",
      "drizzle of caramel for a touch of indulgence.",
    ],
  },
  {
    id: "03",
    name: "Americano",
    price: "6",
    details: [
      "Smooth and invigorating,",
      " the Americano features a shot of espresso ",
      " diluted with hot water, creating a rich",
      "full-bodied coffee with a deep, aromatic flavor.",
    ],
  },
  {
    id: "04",
    name: "Espresso",
    price: "10",
    details: [
      "Our Espresso is a concentrated coffee shot that packs a punch with its bold",
      "rich flavor and smooth finish",
      "perfect for a quick pick-me-up or as the base for other coffee creations.",
    ],
  },
  {
    id: "05",
    name: "Macchiato",
    price: "5",
    details: [
      "A classic espresso drink",
      "the Macchiato features a bold shot of espresso with a dollop of steamed milk",
      "creating a perfect balance of rich and smooth flavors.",
    ],
  },
  {
    id: "06",
    name: "Mocha",
    price: "5",
    details: [
      "Indulge in the luxurious Mocha, a delightful blend of rich espresso",
      "velvety steamed milk, and decadent chocolate syrup",
      "topped with a swirl of whipped cream for a sweet finish.",
    ],
  },
];

const Menu = () => {
  const [showModal, setShowModal] = useState(false);
  const [activeId, setActiveID] = useState(null);

  const showModalHandler = (id) => {
    setShowModal(true);
    setActiveID(id);
  };

  return (
    <section
      className="relative py-24 max-w-6xl mx-auto overflow-hidden px-5"
      id="menu"
    >
      <motion.h1
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="title text-4xl md:text-5xl cursor-default tracking-tight font-bold capitalize text-center"
      >
        <span className=" text-primary">our</span> menu
      </motion.h1>

      <div className="grid grid-cols-2 gap-10 md:grid-cols-3 md:gap-10 place-items-center py-16">
        {MenuItems.map((item, index) => (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
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
                onClick={() => showModalHandler(item.id)}
              >
                see details
              </button>
            </div>
          </motion.div>
        ))}
      </div>
      {showModal && <Modal setShowModal={setShowModal} activeId={activeId} />}
    </section>
  );
};

export default Menu;
