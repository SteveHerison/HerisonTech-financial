"use client";

import { listNav } from "../../data/navbar";
import { Nav } from "@/components/Navbar/Nav";

export const NavbarMobile = () => {
  return (
    <nav className="px-4 bg-gray-950 rounded-t-3xl h-14 grid grid-cols-1">
      <ul className="text-xs grid grid-cols-5 gap-1">
        {listNav.map((item) => (
          <li key={item.label}>
            <Nav {...item} />
          </li>
        ))}
      </ul>
    </nav>
  );
};
