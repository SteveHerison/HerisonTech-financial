import Transaction from "@/app/pages/home/transaction/Transaction";
import HeroHome from "./pages/home";
import RecurringBills from "./pages/home/RecurringBills/RecurringBills";
import Posts from "./pages/home/Post/Posts";
import Budgets from "./pages/home/Budgets/Budgets";

export default function Home() {
  return (
    <main className="flex flex-col h-full overflow-y-auto containers py-5 mb-1 md:mb-0">
      <HeroHome />
      <div className="flex w-full h-full flex-col lg:flex-row gap-4">
        <div className="flex flex-col w-full h-full gap-2">
          <Posts />
          <Transaction />
        </div>
        <div className="flex flex-col w-full h-full gap-2 ">
          <Budgets />
          <RecurringBills />
        </div>
      </div>
    </main>
  );
}
