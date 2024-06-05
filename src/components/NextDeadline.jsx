const NextDeadline = () => {
  return (
    <div className="bg-white p-4 rounded shadow w-full">
      <div className="text-lg font-semibold">Next Deadline</div>
      <div className="flex flex-col justify-center w-full align-middle items-center">
        <div className=" flex gap-x-2 items-center">
          <img className="w-4 h-4" src={"calendar.png"} /> 
          <p className="text-2xl font-bold">30</p>
          <p className="text-xl">Aug</p>
        </div>
        <p className="text-xs">22 hrs remaining</p>
      </div>
    </div>
  );
};

export default NextDeadline;
