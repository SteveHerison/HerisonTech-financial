import { Component } from "../balance_chart/balance";

const Budgets = () => {
  return (
    <div className="flex  flex-col gap-y-5 bg-blue-900 rounded-xl p-2">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl">Post</h2>
        <p>See Datails - </p>
      </div>
      <div className="flex flex-col w-full md:flex-row h-full items-center gap-3">
        <Component />

        <div className="flex w-full md:max-w-20 lg:max-w-32 xl:max-w-40 flex-row h-full items-center justify-between md:flex-col">
          <div className="flex gap-2">
            <div className="border-red-500 border-l-4" />
            <span className="flex flex-col">
              <p>Savings</p>
              <strong className="text-yellow-300 font-custom">$40</strong>
            </span>
          </div>
          <div className="flex gap-2">
            <div className="border-blue-300 border-l-4" />
            <span className="flex flex-col">
              <p>Savings</p>
              <strong className="text-yellow-300 font-custom">$40</strong>
            </span>
          </div>

          <div className="flex gap-2">
            <div className="border-yellow-300 border-l-4" />
            <span className="flex flex-col">
              <p>Savings</p>
              <strong className="text-yellow-300 font-custom">$40</strong>
            </span>
          </div>
          <div className="flex gap-2">
            <div className="border-green-700 border-l-4" />
            <span className="flex flex-col">
              <p>Savings</p>
              <strong className="text-yellow-300 font-custom">$40</strong>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Budgets;
