"use client";
import Filter from "@/../public/images/icon-filter-mobile.svg";
import Sort from "@/../public/images/icon-sort-mobile.svg";
import Right from "@/../public/images/icon-caret-right.svg";
import Left from "@/../public/images/icon-caret-left.svg";
import Image from "next/image";
import { data } from "@/data/data";

export default function Transactions() {
  return (
    <section className="flex flex-col h-full px-10 pt-8 pb-2  containers">
      <h2 className="mb-4 text-2xl font-bold">Transactions</h2>

      <div className="flex flex-col h-full max-h-[80vh] md:max-h-[90vh]  p-4 text-white bg-blue-900 gap-y-6 rounded-xl">
        {/* Search and Filter Section */}
        <div className="flex items-center justify-between w-full">
          <input
            type="text"
            placeholder="Search..."
            className="w-1/2 p-2 text-black rounded-md"
          />
          <div className="flex gap-x-4">
            <button className="px-4 py-2 bg-blue-950 rounded-lg hover:bg-blue-700 hover:text-blue-950">
              <p className="hidden sm:flex"> Sort</p>
              <Image
                width={20}
                height={20}
                alt="2"
                src={Sort}
                className="sm:hidden"
              />
            </button>
            <button className="px-4 py-2 bg-blue-950 rounded-lg hover:bg-blue-700 hover:text-blue-950">
              <p className="hidden sm:flex"> Filter by Category</p>
              <Image
                width={20}
                height={20}
                alt="2"
                src={Filter}
                className="sm:hidden"
              />
            </button>
          </div>
        </div>

        {/* Transactions Table */}
        <div className=" overflow-x-auto rounded-xl h-full font-jetBrains">
          <table className="w-full text-sm text-left table-auto">
            <thead>
              <tr className="text-white bg-blue-800">
                <th className="px-4 py-2">Person</th>
                <th className="px-4 py-2 hidden sm:table-cell">Type</th>

                <th className="px-4 py-2">Data</th>
                <th className="px-4 py-2">Value</th>
              </tr>
            </thead>
            {data.transactions.map((item, index) => (
              <tbody key={index} className="border-b border-white/15">
                {" "}
                <tr className="odd:bg-blue-700 even:bg-blue-800 hover:bg-blue-600">
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
          <button className=" w-10 h-10 flex items-center justify-center bg-blue-950 rounded-lg hover:bg-blue-700 hover:text-blue-950">
            <Image width={12} height={12} alt="2" src={Left} className="" />
          </button>
          <button className=" w-10 h-10 flex items-center justify-center bg-blue-950 rounded-lg hover:bg-blue-700 hover:text-blue-950">
            <Image width={12} height={12} alt="2" src={Right} className="" />
          </button>
        </div>
      </div>
    </section>
  );
}
