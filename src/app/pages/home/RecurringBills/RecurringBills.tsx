import Link from "next/link";

const RecurringBills = () => {
  return (
    <div className="flex flex-col gap-y-5 bg-slate-50 p-2 rounded-xl">
      <div className="flex items-center justify-between ">
        <h2 className="text-xl md:text-2xl ">Recurring Bills</h2>
        <Link href="/dashboard/recurring-bills">See Datails - </Link>
      </div>

      <div className="flex flex-col gap-y-3  text-slate-50">
        <div className="flex items-center w-full h-16 px-4 border-l-4 border-red-600 bg-zinc-800 rounded-xl">
          <span className="flex items-center justify-between w-full py-2">
            <p>Savings</p>
            <strong className="text-slate-50 font-custom font-jetBrains">
              $159
            </strong>
          </span>
        </div>
        <div className="flex items-center w-full h-16 px-4 border-l-4 border-red-600 bg-zinc-800 rounded-xl">
          <span className="flex items-center justify-between w-full py-2">
            <p>Savings</p>
            <strong className="text-slate-50 font-custom font-jetBrains">
              $159
            </strong>
          </span>
        </div>
        <div className="flex items-center w-full h-16 px-4 border-l-4 border-red-600 bg-zinc-800 rounded-xl">
          <span className="flex items-center justify-between w-full py-2">
            <p>Savings</p>
            <strong className="text-slate-50 font-custom font-jetBrains">
              $159
            </strong>
          </span>
        </div>
      </div>
    </div>
  );
};

export default RecurringBills;
