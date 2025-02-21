export default function PublicarList() {
  return (
    <section className="flex p-4 gap-3 bg-slate-50 flex-col rounded-xl w-full shadow-md max-h-72 text-zinc-800">
      <div className="flex items-center gap-2">
        <div className="w-5 h-5 bg-black rounded-full" />
        <p className="text-xl ">Savings</p>
      </div>
      <span className="flex justify-between w-full items-center ">
        <p>Total Saved</p>
        <p className="text-2xl">$159.00</p>
      </span>
      <div className="flex flex-col gap-2">
        <p className="bg-black  p-1 text-center rounded-md text-slate-50">
          Progress
        </p>
        <span className="flex items-center justify-between ">
          <p className="text-sm">9.89%</p>
          <span className="text-sm flex">
            target of $<p className="">2.000</p>
          </span>
        </span>
      </div>
      <div className="flex justify-between items-end h-full gap-2 mb-2 mt-5">
        <button className="w-full bg-zinc-800 text-slate-50  p-2 rounded-lg hover:bg-green-700">
          +ADD
        </button>
        <button className="w-full bg-zinc-800 text-slate-50  p-2 rounded-lg hover:bg-green-700">
          Withdraw
        </button>
      </div>
    </section>
  );
}
