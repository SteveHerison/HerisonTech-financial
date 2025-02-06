"use client";

import { data } from "@/data/data";
import BudgetTracker from "../../Balance_chart/balanceCard";

export default function BudgetsCard() {
  const limit = 4;
  return (
    <div className="flex  flex-col gap-y-5 bg-blue-900 rounded-xl flex-1">
      <div className="flex flex-col w-full md:flex-row h-full  gap-4">
        <BudgetTracker />

        <div className="flex w-full md:max-w-20 lg:max-w-32 xl:max-w-40 flex-row h-full items-center justify-between md:flex-col">
          <ul className="grid items-center w-full grid-cols-2 md:grid-cols-1 gap-4 h-full">
            {data.pots.slice(0, limit).map((item, index) => (
              <li key={index}>
                <div
                  className="w-full px-2 border-l-4"
                  style={{ borderLeftColor: item.theme }}
                >
                  <span>
                    <p>{item.name}</p>
                    <strong className="text-yellow-300 font-jetBrains text-sm md:">
                      {item.total.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </strong>
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
