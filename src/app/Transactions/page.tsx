"use client";
import Filter from "@/../public/images/icon-filter-mobile.svg";
import Sort from "@/../public/images/icon-sort-mobile.svg";
import Right from "@/../public/images/icon-caret-right.svg";
import Left from "@/../public/images/icon-caret-left.svg";
import Image from "next/image";
import { useState } from "react";

export default function Transactions() {
  const [transactions] = useState([
    {
      id: 1,
      person: "João",
      type: "Receita",
      category: "Salário",
      data: "20-03-2024",
      value: 3500,
    },
    {
      id: 2,
      person: "Maria",
      type: "Despesa",
      category: "Alimentação",
      data: "20-03-2024",
      value: -500,
    },
    {
      id: 3,
      person: "Carlos",
      type: "Receita",
      category: "Freelance",
      data: "20-03-2024",
      value: 800,
    },
    {
      id: 4,
      person: "Ana",
      type: "Despesa",
      category: "Transporte",
      data: "20-03-2024",
      value: -200,
    },
  ]);

  return (
    <section className="flex flex-col h-full px-10 pt-8 pb-2 gap-y-4 containers">
      <h2 className="mb-4 text-2xl font-bold">Transactions</h2>

      <div className="flex flex-col h-full p-4 text-white bg-blue-900 gap-y-6 rounded-xl">
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
        <div className="mt-6 overflow-x-auto rounded-xl h-full">
          <table className="w-full text-sm text-left table-auto">
            <thead>
              <tr className="text-white bg-blue-800">
                <th className="px-4 py-2">Person</th>
                <th className="px-4 py-2 hidden sm:table-cell">Type</th>
                <th className="px-4 py-2 hidden md:table-cell">Category</th>
                <th className="px-4 py-2">Data</th>
                <th className="px-4 py-2">Value</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr
                  key={transaction.id}
                  className="odd:bg-blue-700 even:bg-blue-800 hover:bg-blue-600"
                >
                  <td className="px-4 py-2">{transaction.person}</td>
                  <td className="px-4 py-2 hidden sm:table-cell">
                    {transaction.type}
                  </td>
                  <td className="px-4 py-2 hidden md:table-cell">
                    {transaction.category}
                  </td>
                  <td className="px-4 py-2">{transaction.data}</td>
                  <td
                    className={`pl-4 py-2 font-jetBrains ${
                      transaction.value < 0
                        ? "text-red-400 pl-1"
                        : "text-green-400"
                    }`}
                  >
                    {transaction.value.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-between w-full mt-4 text-sm">
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
