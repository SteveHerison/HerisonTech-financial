import { data } from "@/data/data";

export default function Transactions() {
  return (
    <section className="flex flex-col h-full px-10 pt-8 pb-2  containers">
      <h2 className="mb-4 text-2xl font-semibold text-slate-50">
        Transactions
      </h2>

      <div className="flex flex-col h-full max-h-[80vh] md:max-h-[90vh]  p-4 text-zinc-800 bg-slate-50 gap-y-6 rounded-xl">
        {/* Search and Filter Section */}
        <div className="flex items-center justify-between w-full">
          <input
            type="text"
            placeholder="Search..."
            className="w-1/2 p-2 text-black rounded-md"
          />
          <div className="flex gap-x-4 text-slate-50">
            <button className="px-4 py-2 bg-zinc-800 rounded-lg hover:bg-green-700 hover:text-zinc-800">
              <p className="hidden sm:flex"> Sort</p>
            </button>
            <button className="px-4 py-2 bg-zinc-800 rounded-lg hover:bg-green-700 hover:text-zinc-800">
              <p className="hidden sm:flex"> Filter by Category</p>
            </button>
          </div>
        </div>

        {/* Transactions Table */}
        <div className=" overflow-x-auto rounded-xl h-full font-jetBrains">
          <table className="w-full text-sm text-left table-auto">
            <thead>
              <tr className="text-white bg-zinc-800">
                <th className="px-4 py-2">Person</th>
                <th className="px-4 py-2 hidden sm:table-cell">Type</th>

                <th className="px-4 py-2">Data</th>
                <th className="px-4 py-2">Value</th>
              </tr>
            </thead>
            {data.transactions.map((item, index) => (
              <tbody
                key={index}
                className="border-b border-white/15 text-slate-50"
              >
                <tr className="odd:bg-zinc-800 even:bg-zinc-800 hover:bg-green-700">
                  <td className="px-4 py-2">{item.name}</td>
                  <td className="px-4 py-2 hidden sm:table-cell">
                    {item.category}
                  </td>
                  <td className="px-4 py-2 ">{item.date}</td>

                  <td
                    className={`pl-4 py-2  ${
                      item.amount < 0 ? "text-red-400 pl-2" : "text-green-400"
                    }`}
                  >
                    {item.amount.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-between w-full text-sm">
          <button className=" w-10 h-10 flex items-center justify-center bg-zinc-800 rounded-lg hover:bg-green-700"></button>
          <button className=" w-10 h-10 flex items-center justify-center bg-zinc-800 rounded-lg hover:bg-green-700"></button>
        </div>
      </div>
    </section>
  );
}
