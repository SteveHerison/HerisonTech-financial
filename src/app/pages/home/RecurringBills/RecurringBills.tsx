const RecurringBills = () => {
  return (
    <div className="flex flex-1 flex-col gap-y-5 bg-blue-900 p-2 rounded-xl">
      <div className="flex items-center justify-between ">
        <h2 className="text-xl md:text-2xl">Recurring Bills</h2>
        <p>See Datails - </p>
      </div>

      <div className="flex flex-col gap-y-3 h-full items-center justify-center">
        <div className="flex items-center w-full h-16 px-4 border-l-4 border-red-600 bg-blue-950 rounded-xl">
          <span className="flex items-center justify-between w-full py-2">
            <p>Savings</p>
            <strong className="text-yellow-300 font-custom">$159</strong>
          </span>
        </div>
        <div className="flex items-center w-full h-16 px-4 border-l-4 border-red-600 bg-blue-950 rounded-xl">
          <span className="flex items-center justify-between w-full py-2">
            <p>Savings</p>
            <strong className="text-yellow-300 font-custom">$159</strong>
          </span>
        </div>
        <div className="flex items-center w-full h-16 px-4 border-l-4 border-red-600 bg-blue-950 rounded-xl">
          <span className="flex items-center justify-between w-full py-2">
            <p>Savings</p>
            <strong className="text-yellow-300 font-custom">$159</strong>
          </span>
        </div>
        <div className="flex items-center w-full h-16 px-4 border-l-4 border-red-600 bg-blue-950 rounded-xl">
          <span className="flex items-center justify-between w-full py-2">
            <p>Savings</p>
            <strong className="text-yellow-300 font-custom">$159</strong>
          </span>
        </div>
      </div>
    </div>
  );
};

export default RecurringBills;
