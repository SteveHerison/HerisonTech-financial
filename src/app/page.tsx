import Transaction from "@/app/pages/home/TransactionHome/Transaction";
import HeroHome from "./pages/home";
import RecurringBills from "./pages/home/RecurringBills/RecurringBills";
import Posts from "./pages/home/Post/Posts";
import Budgets from "./pages/home/Budgets/Budgets";

export default function Home() {
  return (
    <main className="flex flex-col h-full overflow-y-auto containers px-10 pt-8 pb-2 mb-1 md:mb-0 gap-8">
      <HeroHome />
      <div className="flex w-full h-full flex-col lg:flex-row gap-6">
        <div className="flex flex-col w-full h-full gap-6">
          <Posts />
          <Transaction />
        </div>
        <div className="flex flex-col w-full h-full gap-6 ">
          <Budgets />
          <RecurringBills />
        </div>
      </div>
    </main>
  );
}
