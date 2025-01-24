export default function PublicarList() {
  return (
    <section className="flex p-4 gap-3 bg-blue-900 flex-col rounded-xl w-full shadow-md max-h-72">
      <div className="flex items-center gap-2">
        <div className="w-5 h-5 bg-black rounded-full" />
        <p className="text-xl text-white">Savings</p>
      </div>
      <span className="flex justify-between w-full items-center text-white">
        <p>Total Saved</p>
        <p className="text-2xl">$159.00</p>
      </span>
      <div className="flex flex-col gap-2">
        <p className="bg-black text-white p-1 text-center rounded-md">
          Progress
        </p>
        <span className="flex items-center justify-between text-white">
          <p className="text-sm">9.89%</p>
          <span className="text-sm flex">
            target of $<p className="font-jetBrains">2.000</p>
          </span>
        </span>
      </div>
      <div className="flex justify-between items-end h-full gap-2 mb-2 mt-5">
        <button className="w-full bg-blue-950 text-white p-2 rounded-lg hover:bg-blue-800">
          +ADD
        </button>
        <button className="w-full bg-blue-950 text-white p-2 rounded-lg hover:bg-blue-800">
          Withdraw
        </button>
      </div>
    </section>
  );
}
