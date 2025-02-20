import HeroHome from "@/app/pages/home";
import Budgets from "@/app/pages/home/Budgets/Budgets";
import Posts from "@/app/pages/home/Post/Posts";
import RecurringBills from "@/app/pages/home/RecurringBills/RecurringBills";
import Transaction from "@/app/pages/home/TransactionHome/Transaction";

export default function DashboardResumesPage() {
  return (
    <main className="flex flex-col h-full overflow-y-auto containers px-10 pt-5 pb-2 mb-1 md:mb-0 gap-4">
      <HeroHome />
      <div className="flex w-full h-full flex-col lg:flex-row gap-6">
        <div className="flex flex-col w-full h-full gap-6">
          <Posts />
          <Transaction />
        </div>
        <div className="flex flex-col w-full h-full gap-6 pt-6 sm:pt-0">
          <Budgets />
          <RecurringBills />
        </div>
      </div>
    </main>
  );
}
