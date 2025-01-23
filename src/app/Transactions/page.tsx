"use client";
import { useState } from "react";

export default function Transactions() {
  const [transactions] = useState([
    {
      id: 1,
      person: "João",
      type: "Receita",
      category: "Salário",
      value: 3500,
    },
    {
      id: 2,
      person: "Maria",
      type: "Despesa",
      category: "Alimentação",
      value: -500,
    },
    {
      id: 3,
      person: "Carlos",
      type: "Receita",
      category: "Freelance",
      value: 800,
    },
    {
      id: 4,
      person: "Ana",
      type: "Despesa",
      category: "Transporte",
      value: -200,
    },
  ]);

  return (
    <section className="flex flex-col h-full py-8 gap-y-4 containers ">
      <h2 className="mb-4 text-2xl font-bold ">Transactions</h2>

      <div className="flex flex-col h-full p-4 text-white bg-blue-900 gap-y-6 rounded-xl">
        {/* Search and Filter Section */}
        <div className="flex items-center justify-between w-full">
          <input
            type="text"
            placeholder="Search..."
            className="w-1/2 p-2 text-black rounded-md"
          />
          <div className="flex space-x-8">
            <button className="px-4 py-2 bg-blue-700 rounded-lg hover:bg-blue-600">
              Sort
            </button>
            <button className="px-4 py-2 bg-blue-700 rounded-lg hover:bg-blue-600">
              Filter by Category
            </button>
          </div>
        </div>

        {/* Transactions Table */}
        <div className="mt-6 overflow-x-auto">
          <table className="w-full text-sm text-left table-auto">
            <thead>
              <tr className="text-white bg-blue-800">
                <th className="px-4 py-2">Person</th>
                <th className="px-4 py-2">Type</th>
                <th className="px-4 py-2">Category</th>
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
                  <td className="px-4 py-2">{transaction.type}</td>
                  <td className="px-4 py-2">{transaction.category}</td>
                  <td
                    className={`px-4 py-2 ${
                      transaction.value < 0 ? "text-red-400" : "text-green-400"
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
          <button className="px-4 py-2 bg-blue-700 rounded-lg hover:bg-blue-600">
            Previous
          </button>
          <button className="px-4 py-2 bg-blue-700 rounded-lg hover:bg-blue-600">
            Next
          </button>
        </div>
      </div>
    </section>
  );
}
