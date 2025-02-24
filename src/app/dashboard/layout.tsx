import Logo from "@/../public/logo.svg";
import { NavItem } from "@/components/pages/dashboard/nav-items";
import { UserDropdwn } from "@/components/pages/dashboard/user-dropdown";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  return (
    <div className="w-full h-screen overflow-hidden grid grid-cols-[180px,1fr] md:grid-cols-[300px,1fr]">
      <aside className="w-full h-full flex flex-col items-center bg-slate-50 rounded-r-xl">
        <div className="border-b w-full p-1  border-muted relative items-center justify-center flex border-b-zinc-800/10">
          <Logo alt="Logo" className="w-full h-full  mx-auto text-zinc-800" />
        </div>
        <NavItem />

        <div className="w-full mt-auto border-t border-zinc/10 px-3 py-4 flex items-center justify-between gap-2">
          <UserDropdwn />
        </div>
      </aside>
      <main className="flex flex-col w-full h-full overflow-auto">
        {children}
      </main>
    </div>
  );
}
