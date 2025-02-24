"use client";

import Link from "next/link";
import { listNav } from "@/data/navbar";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

export const NavItem = () => {
  const pathname = usePathname();

  return (
    <nav className="w-full flex flex-col gap-2 pr-2 py-4">
      {listNav.map((item) => {
        const isActive = pathname.startsWith(item.path);

        return (
          <Link
            key={item.path}
            href={item.path}
            className="w-full h-full md:h-10 pl-1"
          >
            <Button
              variant="ghost"
              className={cn(
                "w-full bg-terciário text-texto rounded-r-xl  hover:border-s-4 hover:border-primário hover:bg-fundo hover:shadow-md hover:text-terciário hover:shadow-zinc-500  transition-all text-start px-2 gap-2 justify-start",
                isActive
                  ? "bg-primário text-texto border-s-4 border-terciário"
                  : ""
              )}
            >
              <item.icon size={16} />
              {item.label}
            </Button>
          </Link>
        );
      })}
    </nav>
  );
};
