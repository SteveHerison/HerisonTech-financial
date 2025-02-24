import { data } from "@/data/data";
import Link from "next/link";

const Transaction = () => {
  const limit = 6;

  return (
    <div className="flex flex-col h-full gap-y-2 bg-primário p-2 rounded-xl ">
      <div className="h-full  overflow-y-auto">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl">Transaction</h2>
          <Link href="/dashboard/transactions">See Details - </Link>
        </div>
        <ul className="">
          {data.transactions.slice(0, limit).map((item, index) => (
            <li key={index}>
              <div className="w-full flex justify-between items-center border-b border-texto/10 py-2 px-2">
                <p>{item.name}</p>
                <div>
                  <p
                    className={`pl-4 py-2 ${
                      item.amount < 0 ? "text-red-400 pl-2" : "text-terciário"
                    }`}
                  >
                    {item.amount.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </p>
                  <p>{item.date}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Transaction;
