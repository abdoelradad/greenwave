import React from "react";
import menuItem from "../../assets/menuitem.jpg";

const Menu = () => {
  return (
    <section className="py-24">
      {" "}
      <h1 className="mb-5 title text-5xl md:text-6xl cursor-default tracking-tight font-bold capitalize text-center pb-5">
        our{" "}
        <span className=" text-primary">Menu</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 p-5  place-items-center">
        <div className="w-[300px]">
          <div className=" rounded-3xl bg-black">
            <img src={menuItem} alt="" className=" rounded-2xl shadow-sm " />
          </div>
          <div className="flex items-center justify-between mt-3">
            <h2 className="text-xl">Standard Coffee</h2>
            <p className="text-xl text-primary">10$</p>
          </div>
          <button className="mt-3 text-primary border-[1px] px-4 py-1 rounded-2xl border-primary tracking-widest text-sm">Add to cart</button>
        </div>
        <div className="w-[300px]">
          <div className=" rounded-3xl bg-black">
            <img src={menuItem} alt="" className=" rounded-2xl shadow-sm " />
          </div>
          <div className="flex items-center justify-between mt-3">
            <h2 className="text-xl">Standard Coffee</h2>
            <p className="text-xl text-primary">10$</p>
          </div>
          <button className="mt-3 text-primary border-[1px] px-4 py-1 rounded-2xl border-primary tracking-widest text-sm">Add to cart</button>
        </div>
        <div className="w-[300px]">
          <div className=" rounded-3xl bg-black group">
            <img src={menuItem} alt="" className=" rounded-2xl shadow-sm" />
          </div>
          <div className="flex items-center justify-between mt-3">
            <h2 className="text-xl">Standard Coffee</h2>
            <p className="text-xl text-primary">10$</p>
          </div>
          <button className="mt-3 text-primary border-[1px] px-4 py-1 rounded-2xl border-primary tracking-widest text-sm">Add to cart</button>
        </div>
      </div>
    </section>
  );
};

export default Menu;
