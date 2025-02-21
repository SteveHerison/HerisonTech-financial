import { data } from "@/data/data";
import Link from "next/link";

const Posts = () => {
  const limit = 4;
  return (
    <div className="flex flex-col gap-y-5 bg-slate-50 p-4 rounded-xl ">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl">Post</h2>
        <Link className="" href="/dashboard/post">
          <p>See Datails - </p>
        </Link>
      </div>
      <div className="flex flex-col h-full gap-y-5 md:gap-y-0 md:gap-x-3 md:flex-row">
        <div className="flex items-center w-full h-full p-2 gap-x-3 shadow-md bg-zinc-800 rounded-xl">
          <div>
            <p className="text-zinc-300">total</p>
            <strong className="text-xl text-slate-50 xl:text-2xl font-custom ">
              $900,00
            </strong>
          </div>
        </div>

        <ul className="grid items-center w-full grid-cols-2 gap-4">
          {data.pots.slice(0, limit).map((item, index) => (
            <li key={index}>
              <div
                className="w-full px-2 border-l-4"
                style={{ borderLeftColor: item.theme }}
              >
                <span>
                  <p>{item.name}</p>
                  <strong className="text-zinc-800 font-semibold  text-sm md:">
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
  );
};

export default Posts;
