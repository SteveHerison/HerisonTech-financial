import { cn } from "@/lib/utils";
import { NavItem } from "@/types/navType";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export const Nav = ({ label, href, icon, iconActive }: NavItem) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        "flex flex-col h-14 items-center justify-center text-white hover:bg-blue-700 hover:text-yellow-200 font-semibold hover:border-b-2 hover:border-yellow-300 md:rounded-r-xl",
        isActive && "border-b-2 border-blue-600 bg-amber-300 text-blue-950"
      )}
    >
      <Image
        src={isActive ? iconActive : icon}
        alt={label}
        width={20}
        height={20}
      />
      <span className="text-xs">{label}</span>
    </Link>
  );
};
