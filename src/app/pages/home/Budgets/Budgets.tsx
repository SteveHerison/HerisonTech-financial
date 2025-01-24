import BudgetsCard from "./BudgetsCard";

export default function Budgets() {
  return (
    <div className="flex  flex-col gap-y-5 bg-blue-900 rounded-xl p-2">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl">Post</h2>
        <p>See Datails - </p>
      </div>
      <BudgetsCard />
    </div>
  );
}
