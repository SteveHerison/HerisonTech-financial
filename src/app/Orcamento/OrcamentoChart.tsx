"use client";

import { data } from "@/data/data";

import OrcamentoCard from "../pages/Orcamento/OrcamentoCard";
import BudgetTracker from "../pages/Balance_chart/balanceCard";

export default function OrcamentoChart() {
  return (
    <section className="flex flex-col h-full px-10 pt-8 pb-2  gap-y-4 containers overflow-y-auto lg:overflow-y-hidden ">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl">Orçamentos</h2>
        <button className="rounded-lg p-2 bg-blue-800 hover:bg-yellow-300 hover:text-blue-900 font-semibold">
          +ADD
        </button>
      </div>

      <div className=" flex gap-2 w-full h-full flex-col lg:flex-row">
        <div className="flex bg-blue-900 p-5 rounded-xl lg:w-2/5 flex-col sm:flex-row lg:flex-col max-h-[680px] sm:gap-y-20 sm:gap-x-10 lg:gap-y-0 ">
          <BudgetTracker />

          <div className="flex flex-col w-full h-full justify-between">
            <h2 className="py-5 text-xl">Spending SUmmary</h2>
            <ul className="flex flex-col h-full gap-4">
              {data.pots.map((item, index) => (
                <li key={index} className="h-full flex items-center">
                  <div
                    className="w-full px-2 border-l-4"
                    style={{ borderLeftColor: item.theme }}
                  >
                    <span className="flex items-center w-full justify-between font-jetBrains  space-x-8">
                      <p className="text-sm ">{item.name}</p>
                      <div className="flex items-center space-x-2 flex-col lg:flex-row">
                        <strong className="text-yellow-300 text-sm">
                          {item.total.toLocaleString("pt-BR", {
                            style: "currency",
                            currency: "BRL",
                          })}
                        </strong>
                        <p className="text-xs">{`de ${item.target.toLocaleString(
                          "pt-BR",
                          {
                            style: "currency",
                            currency: "BRL",
                          }
                        )}`}</p>
                      </div>
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <section className="lg:w-2/3 h-full w-full lg:px-6 lg:overflow-y-auto">
          <OrcamentoCard />
        </section>
      </div>
    </section>
  );
}
