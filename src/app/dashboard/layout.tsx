import Logo from "@/../public/logo.svg";
import { NavItem } from "@/components/pages/dashboard/nav-items";
import { UserDropdwn } from "@/components/pages/dashboard/user-dropdown";
import { auth } from "@/lib/auth";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  const session = await auth();

  return (
    <div className="w-full h-screen overflow-hidden grid grid-cols-[300px,1fr]">
      <aside className="w-full h-full flex flex-col items-center bg-white/45 rounded-r-xl">
        <div className="border-b w-full p-1  border-muted relative items-center justify-center flex border-b-white/10">
          <Logo alt="Logo" className="w-full h-full  mx-auto " />
        </div>
        <NavItem />

        <div className="w-full mt-auto border-t border-white/15 px-3 py-4 flex items-center justify-between gap-2">
          <UserDropdwn user={session?.user} />
        </div>
      </aside>
      <main className="flex flex-col w-full h-full overflow-auto">
        {children}
      </main>
    </div>
  );
}
