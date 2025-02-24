import Link from "next/link";
import BudgetsCard from "./BudgetsCard";

export default function Budgets() {
  return (
    <div className="flex  flex-col gap-y-5 bg-primário rounded-xl p-2 flex-1">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl">Post</h2>

        <Link href="/dashboard/budgets">See Datails - </Link>
      </div>

      <BudgetsCard />
    </div>
  );
}
