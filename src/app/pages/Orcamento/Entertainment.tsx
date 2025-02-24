import { data } from "@/data/data";

export const Entertainment = () => {
  const { budgets } = data;

  const categoryExpenses: { [key: string]: number } = {
    Entretenimento: 30,
  };
  // Pega somente o orçamento com id 1
  const budgetCategory = budgets.find((budget) => budget.id === 1);

  if (!budgetCategory) return <p>Orçamento não encontrado.</p>;

  const expenseForCategory = categoryExpenses[budgetCategory.category] || 0;
  const remaining = budgetCategory.maximum - expenseForCategory;

  const calculatePercentage = (value: number, max: number) =>
    Math.min((value / max) * 100, 100);

  return (
    <section className="w-full bg-primário rounded-xl px-6 py-4 flex flex-col gap-4">
      <div className="flex flex-col h-full gap-y-6">
        <div className="flex flex-col gap-2">
          <h2 className="text-xl flex items-center gap-2">
            <div
              className=" h-5 w-5 rounded-full"
              style={{ background: budgetCategory.theme }}
            />
            <p className="font-jetBrains"> {budgetCategory.category}</p>
          </h2>
          <span className="text-paragrafo flex space-x-2">
            <p> Máximo de</p>
            <strong className=" text-texto">
              {budgetCategory.maximum.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </strong>
          </span>

          <ul className="space-y-4 ">
            <li className="flex  w-full">
              <div className="w-full">
                <p className="text-sm font-medium">{budgetCategory.category}</p>
                <div className="w-full h-2 bg-fundo rounded-full mt-1">
                  <div
                    className="h-2 rounded-full w-full"
                    style={{
                      width: `${calculatePercentage(
                        expenseForCategory,
                        budgetCategory.maximum
                      )}%`,
                      backgroundColor: budgetCategory.theme,
                    }}
                  ></div>
                </div>
              </div>
            </li>
            <div className="flex ">
              <div
                className="w-full px-2 border-l-4"
                style={{ borderLeftColor: budgetCategory.theme }}
              >
                <span>gasto</span>
                <p className="  ">
                  {expenseForCategory.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </p>
              </div>
              <div
                className="w-full px-2 border-l-4"
                style={{ borderLeftColor: budgetCategory.theme }}
              >
                <p> Restante</p>
                <strong className="  ">
                  {remaining.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </strong>
              </div>
            </div>
          </ul>
        </div>
        <div className="w-full h-full bg-zinc-800 rounded-xl text-slate-50">
          <div className="px-4 py-2 flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl">Latest Spending</h2>
              <span>see All + </span>
            </div>
            <div className="flex justify-between border-b pb-2 border-zinc-500/30 items-center">
              <span>James thompson</span>
              <div className="flex flex-col items-end">
                <p className="">
                  - $<span className="font-jetBrains">50</span>
                </p>
                <p>11 aug 2024</p>
              </div>
            </div>
            <div className="flex justify-between border-b pb-2 border-zinc-500/30 items-center">
              <span>James thompson</span>
              <div className="flex flex-col items-end">
                <p className="">
                  - $<span className="font-jetBrains">50</span>
                </p>
                <p>11 aug 2024</p>
              </div>
            </div>
            <div className="flex justify-between border-b pb-2 border-zinc-500/30 items-center">
              <span>James thompson</span>
              <div className="flex flex-col items-end">
                <p className="">
                  - $<span className="font-jetBrains">50</span>
                </p>
                <p>11 aug 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
