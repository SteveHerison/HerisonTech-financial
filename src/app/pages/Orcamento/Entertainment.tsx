export const Entertainment = () => {
  return (
    <section className="w-full  bg-blue-900 rounded-xl px-6 py-4 flex flex-col gap-4">
      <div className="flex flex-col h-full gap-y-6">
        <div className="flex flex-col gap-2">
          <h2 className="text-xl flex items-center gap-2">
            <div className="bg-black h-5 w-5 rounded-full" />
            <p className="font-jetBrains"> Entertainment</p>
          </h2>
          <span className="text-zinc-400">
            Maximum of
            <strong className="font-jetBrains text-yellow-300"> $50.00</strong>
          </span>
          <div className="bg-black">progress</div>

          <div className="flex ">
            <div className="flex gap-2 w-full">
              <div className="border-red-500 border-l-4" />
              <div className="flex flex-col">
                <span>Spent</span>
                <p className="font-jetBrains">30</p>
              </div>
            </div>
            <div className="flex gap-2 w-full">
              <div className="border-red-500 border-l-4" />
              <div className="flex flex-col">
                <span>Spent</span>
                <p className="font-jetBrains">50</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-full bg-blue-950 rounded-xl">
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
