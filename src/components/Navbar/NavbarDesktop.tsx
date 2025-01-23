"use client";

import { listNav } from "../../data/navbar";
import { Nav } from "@/components/Navbar/Nav";

export const NavbarDesktop = () => {
  return (
    <nav className="pr-3 w-40 py-3 bg-gray-950 md:rounded-r-3xl h-full flex flex-col justify-between">
      <h2 className="text-2xl text-center ">Finance</h2>

      <ul className="text-xs flex flex-col space-y-7">
        {listNav.map((item) => (
          <li key={item.label} className="">
            <Nav {...item} />
          </li>
        ))}
      </ul>
      <button className=" mx-2 p-2 rounded-xl bg-blue-800 text-yellow-300 font-semibold">
        oi
      </button>
    </nav>
  );
};
