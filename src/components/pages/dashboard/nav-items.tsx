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
            className="w-full h-full md:h-10"
          >
            <Button
              variant="ghost"
              className={cn(
                "w-full bg-black rounded-r-xl hover:bg-zinc-400 transition-all text-start px-2 gap-2 justify-start",
                isActive ? "bg-zinc-400" : ""
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
