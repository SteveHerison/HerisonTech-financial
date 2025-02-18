import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { data } from "@/data/data";

const BudgetTracker: React.FC = () => {
  const { balance } = data;

  const renda = balance.renda;
  const despesas = balance.despesas;
  const restante = renda - despesas;

  const pieData = [
    { name: "Renda", value: balance.renda, color: "#4CAF50" },
    { name: "Despesas", value: balance.despesas, color: "#F44336" },
    { name: "Restante", value: balance.restante, color: "#2196F3" },
  ];

  return (
    <div className="max-w-lg mx-auto   rounded-lg font-jetBrains">
      <div className="text-center mb-6">
        <div className="w-full h-64">
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                label
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <p className="text-sm text-gray-500 mt-2 ">
          Renda:
          {` ${renda.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}`}
          | Despesas:
          {` ${despesas.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}`}
          | Atual:
          {` ${restante.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}`}
        </p>
      </div>
    </div>
  );
};

export default BudgetTracker;
