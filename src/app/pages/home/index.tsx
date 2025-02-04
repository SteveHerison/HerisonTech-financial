"use client";

export default function HeroHome() {
  return (
    <section className="">
      <div className="flex flex-col w-full h-full">
        <h1 className="text-2xl">Home</h1>

        <div className="flex flex-col gap-3 py-4 md:flex-row">
          <div className="w-full  bg-blue-900 rounded-xl p-5">
            <p className="text-sm">Current Balance </p>
            <strong className="text-2xl text-yellow-200 font-jetBrains">
              $2.300,40
            </strong>
          </div>
          <div className="w-full bg-blue-900 rounded-xl p-5">
            <p className="text-sm">Current Balance </p>
            <strong className="text-2xl text-yellow-200 font-jetBrains">
              $4.000,74
            </strong>
          </div>
          <div className="w-full  bg-blue-900 rounded-xl p-5">
            <p className="text-sm">Current Balance </p>
            <strong className="text-2xl text-yellow-200 font-jetBrains">
              $2.030,00
            </strong>
          </div>
        </div>
      </div>
    </section>
  );
}
