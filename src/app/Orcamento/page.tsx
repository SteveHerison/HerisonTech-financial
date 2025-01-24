"use client";

import { Balance } from "../pages/home/Balance_chart/balance";

export default function Orcamento() {
  return (
    <section className="flex flex-col h-full py-8 gap-y-4 containers overflow-y-auto lg:overflow-y-hidden">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl">Orçamento</h2>
        <button className="rounded-lg p-2 bg-blue-800 hover:bg-yellow-300 hover:text-blue-900 font-semibold">
          +ADD
        </button>
      </div>

      <div className=" flex gap-2 w-full h-full flex-col lg:flex-row">
        <div className="flex bg-blue-900 p-5 rounded-xl lg:w-2/5 flex-col sm:flex-row lg:flex-col max-h-[680px] sm:gap-y-20 sm:gap-x-10 lg:gap-y-0 ">
          <Balance />

          <div className="flex flex-col w-full h-full justify-between">
            <h2 className="py-5 text-xl">Spending SUmmary</h2>
            <div className="flx flex-col space-y-4 py-5">
              <div className="flex gap-2 border-b pb-4">
                <div className="border-red-500 border-l-4" />
                <span className="flex w-full items-center justify-between">
                  <p>Savings</p>
                  <div className="flex items-center gap-2">
                    <strong className="text-yellow-300 font-custom font-jetBrains">
                      $40
                    </strong>
                    <p className="text-sm">of 50</p>
                  </div>
                </span>
              </div>

              <div className="flex gap-2 border-b pb-4">
                <div className="border-red-500 border-l-4" />
                <span className="flex w-full items-center justify-between">
                  <p>Savings</p>
                  <div className="flex items-center gap-2">
                    <strong className="text-yellow-300 font-custom font-jetBrains">
                      $40
                    </strong>
                    <p className="text-sm">of 50</p>
                  </div>
                </span>
              </div>
              <div className="flex gap-2 border-b pb-4">
                <div className="border-red-500 border-l-4" />
                <span className="flex w-full items-center justify-between">
                  <p>Savings</p>
                  <div className="flex items-center gap-2">
                    <strong className="text-yellow-300 font-custom font-jetBrains">
                      $40
                    </strong>
                    <p className="text-sm">of 50</p>
                  </div>
                </span>
              </div>
              <div className="flex gap-2 ">
                <div className="border-red-500 border-l-4" />
                <span className="flex w-full items-center justify-between">
                  <p>Savings</p>
                  <div className="flex items-center gap-2">
                    <strong className="text-yellow-300 font-custom font-jetBrains">
                      $40
                    </strong>
                    <p className="text-sm">of 50</p>
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>
        <section className="lg:w-2/3 h-full w-full lg:px-10 lg:overflow-y-auto">
          <div className=" h-full">po</div>
        </section>
      </div>
    </section>
  );
}
