"use client";

import { listNav } from "../../data/navbar";
import { Nav } from "@/components/Navbar/Nav";

export const NavbarDesktop = () => {
  return (
    <nav className=" xl:w-52 md:w-40  md:h-full md:py-3 pt-2 md:pt-0 w-full h-16  bg-gray-950 md:rounded-r-xl rounded-t-xl md:rounded-tl-none  px-1 md:px-0  flex md:flex-col justify-between flex-row ">
      <h2 className="text-2xl text-center hidden md:flex p-2">Finance</h2>

      <ul className="text-xs flex md:flex-col flex-row w-full h-full md:justify-center md:items-center md:space-y-10 md:pr-2">
        {listNav.map((item) => (
          <li key={item.label} className="w-full h-full md:h-10 ">
            <Nav {...item} />
          </li>
        ))}
      </ul>
      <button className=" mx-2 p-2 rounded-xl bg-blue-800 text-yellow-300 font-semibold hidden md:flex">
        oi
      </button>
    </nav>
  );
};
