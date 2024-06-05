const ContinueLearning = () => {
  return (
    <div className="bg-white p-6 rounded shadow">
      <div className="flex justify-between items-center mb-4">
        <div className="text-lg font-semibold">Continue Learning</div>
        <div className="flex gap-2 justify-center align-middle items-center ">
          <button className="text-green-600">Resume lessons </button>
          <img src={"arrow-circle-right.png"} className="w-4 h-4" />
        </div>
      </div>
      <div className="flex flex-col gap-4 md:flex-row justify-center items-center align-middle">
        <img src={"RRec.png"} alt="Course" className="w-58 h-26 rounded mr-4" />
        <div className="w-full justify-center gap-3 items-center align-middle">
          <div className="flex flex-col md:flex-row gap-3 justify-between w-full">
            <p className="text-sm font-semibold">
              Introduction to Product Design
            </p>
            <p className="text-xs text-[#505F79] font-bold">17 Aug - 30 Aug</p>
          </div>

          <div className="flex  justify-between w-full md:w-[45%] my-2">
            <div className="flex gap-2">
              <img src={"fullbook.png"} className="w-4 h-4"/>
              <p className="text-xs text-[#505F79] font-semibold">
                5 sub courses
              </p>
            </div>

            <div className="flex gap-2">
              <img src={"calendar.png"} className="w-4 h-4"/>
              
            <p className="text-xs text-[#505F79] font-semibold"> 1 week</p>
            </div>

            <div className="flex gap-2">
              <img src={"timer.png"} className="w-4 h-4" />
              
            <p className="text-xs text-[#505F79] font-semibold">7 mins</p>
            </div>
          </div>

          <div className="w-full my-5 h-1 rounded-full bg-[#EBEDF0]">
            <div className="w-[75%] h-1 rounded-full bg-[#1A9447]"></div>
          </div>


          <div className="flex justify-between w-full">
            <p className="text-sm text-[#505F79]  font-semibold">
              75% done
            </p>
            <p className="text-sm text-[#505F79]  font-semibold">
              3 of 5 completed
            </p>
            
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default ContinueLearning;
