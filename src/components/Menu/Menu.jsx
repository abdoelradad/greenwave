import React from "react";
import menuItem from "../../assets/menuitem.jpg";

const Menu = () => {
  return (
    <section className="py-24" id="menu">
      <h1 className="title text-4xl md:text-5xl cursor-default tracking-tight font-bold capitalize text-center">
        <span className=" text-primary">our</span> menu
      </h1>

      <div className="grid grid-cols-2 gap-10 md:grid-cols-3 md:gap-10 place-items-center py-16">
        <div className="w-[200px] md:w-[320px] p-5 rounded-3xl">
          <div className=" rounded-3xl bg-black">
            <img src={menuItem} alt="" className=" rounded-2xl shadow-sm " />
          </div>
          <div className="flex items-center justify-between mt-3">
            <h2 className="text-xl">Standard Coffee</h2>
            <p className="text-xl text-primary">10$</p>
          </div>
          <button className="mt-3 text-primary border-[1px] px-4 py-1 rounded-2xl border-primary tracking-widest text-sm">
            Add to cart
          </button>
        </div>
        <div className="w-[200px] md:w-[320px] p-5 rounded-3xl">
          <div className=" rounded-3xl bg-black">
            <img src={menuItem} alt="" className=" rounded-2xl shadow-sm " />
          </div>
          <div className="flex items-center justify-between mt-3">
            <h2 className="text-xl">Standard Coffee</h2>
            <p className="text-xl text-primary">10$</p>
          </div>
          <button className="mt-3 text-primary border-[1px] px-4 py-1 rounded-2xl border-primary tracking-widest text-sm">
            Add to cart
          </button>
        </div>
        <div className="w-[200px] md:w-[320px] p-5 rounded-3xl">
          <div className=" rounded-3xl bg-black">
            <img src={menuItem} alt="" className=" rounded-2xl shadow-sm " />
          </div>
          <div className="flex items-center justify-between mt-3">
            <h2 className="text-xl">Standard Coffee</h2>
            <p className="text-xl text-primary">10$</p>
          </div>
          <button className="mt-3 text-primary border-[1px] px-4 py-1 rounded-2xl border-primary tracking-widest text-sm">
            Add to cart
          </button>
        </div>
        <div className="w-[200px] md:w-[320px] p-5 rounded-3xl">
          <div className=" rounded-3xl bg-black">
            <img src={menuItem} alt="" className=" rounded-2xl shadow-sm " />
          </div>
          <div className="flex items-center justify-between mt-3">
            <h2 className="text-xl">Standard Coffee</h2>
            <p className="text-xl text-primary">10$</p>
          </div>
          <button className="mt-3 text-primary border-[1px] px-4 py-1 rounded-2xl border-primary tracking-widest text-sm">
            Add to cart
          </button>
        </div>
        <div className="w-[200px] md:w-[320px] p-5 rounded-3xl">
          <div className=" rounded-3xl bg-black">
            <img src={menuItem} alt="" className=" rounded-2xl shadow-sm " />
          </div>
          <div className="flex items-center justify-between mt-3">
            <h2 className="text-xl">Standard Coffee</h2>
            <p className="text-xl text-primary">10$</p>
          </div>
          <button className="mt-3 text-primary border-[1px] px-4 py-1 rounded-2xl border-primary tracking-widest text-sm">
            Add to cart
          </button>
        </div>
        <div className="w-[200px] md:w-[320px] p-5 rounded-3xl">
          <div className=" rounded-3xl bg-black group">
            <img src={menuItem} alt="" className=" rounded-2xl shadow-sm" />
          </div>
          <div className="flex items-center justify-between mt-3">
            <h2 className="text-xl">Standard Coffee</h2>
            <p className="text-xl text-primary">10$</p>
          </div>
          <button className="mt-3 text-primary border-[1px] px-4 py-1 rounded-2xl border-primary tracking-widest text-sm">
            Add to cart
          </button>
        </div>
      </div>
    </section>
  );
};

export default Menu;
