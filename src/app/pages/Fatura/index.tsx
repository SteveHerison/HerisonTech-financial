"use client";
import Sort from "@/../public/images/icon-sort-mobile.svg";

import Image from "next/image";
import { useState } from "react";

const Fatura = () => {
  const [transactions] = useState([
    {
      id: 1,
      type: "Receita",
      data: "20-03-2024",
      value: 3500,
    },
    {
      id: 2,
      type: "Despesa",
      data: "20-03-2024",
      value: -500,
    },
    {
      id: 3,
      type: "Receita",
      data: "20-03-2024",
      value: 800,
    },
    {
      id: 4,
      type: "Despesa",
      data: "20-03-2024",
      value: -200,
    },
  ]);
  return (
    <div className="flex w-full h-full flex-col justify-between gap-8 lg:flex-row">
      <div className=" flex flex-1 justify-between lg:justify-start flex-col sm:flex-row gap-4 lg:flex-col ">
        <div className="bg-blue-900 h-40  w-full rounded-xl p-2 flex gap-5 items-center  sm:flex-col sm:items-start sm:p-4">
          <div className="flex flex-col gap-3">
            <h2>total bills</h2>
            <p className="text-2xl font-jetBrains">R$398.89</p>
          </div>
        </div>
        <div className="bg-blue-300 h-40  w-full rounded-xl p-2 text-black ">
          <div className="border-b pb-2 space-y-3">
            <h3 className="text-xl">Summary</h3>
            <div className="flex justify-between">
              <p>Descrição</p>
              <span className="flex gap-2">
                <p>3</p>
                <p>(R$344.33)</p>
              </span>
            </div>
          </div>
        </div>
      </div>

      <section className="flex flex-col h-full lg:w-2/3">
        <div className="flex flex-col h-full  text-white bg-blue-900 gap-y-6 rounded-xl p-2">
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
            </div>
          </div>

          {/* Transactions Table */}
          <div className="mt-6 overflow-x-auto rounded-xl h-full">
            <table className="w-full text-sm text-left table-auto">
              <thead>
                <tr className="text-white bg-blue-800">
                  <th className="px-4 w-1/2 py-2 hidden md:table-cell">Type</th>
                  <th className="px-2 py-2 w-1/4 hidden md:table-cell">Data</th>
                  <th className="px-4 py-2 w-1/4 hidden md:table-cell">
                    Value
                  </th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction) => (
                  <tr
                    key={transaction.id}
                    className="odd:bg-blue-700 even:bg-blue-800 hover:bg-blue-600"
                  >
                    <td className="px-4 py-2 ">{transaction.type}</td>

                    <td className="px-2 py-2 w-1/4 hidden  sm:table-cell">
                      {transaction.data}
                    </td>
                    <td
                      className={`sm:pl-4 px-4 py-2 w-1/4 font-jetBrains text-end md:text-start ${
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
        </div>
      </section>
    </div>
  );
};

export default Fatura;
