
const NextBadge = () => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <div className="flex justify-between items-center mb-4">
        <div className="text-lg font-semibold">Your Next Badge</div>
        <button className="text-green-600">View all</button>
      </div>
      <div className="flex flex-col gap-y-4">
      <div className="flex bg-[#FCF6EA] p-4 rounded-md gap-4 justify-around items-center ">
        <div className="flex flex-col justify-center align-middle items-center">
        <img src={'yolo.png'} alt="Badge" className="w-10 h-10 rounded mr-4" />
        <p className="text-sm font-semibold">Scholar</p>
        </div>
        <div>
          
          <div className="flex items-center gap-3">
            <img className="w-3  h-3" src={'arrow-circle-right.png'}/>
          <p className="text-xs text-gray-500">Complete 4 courses</p>
          
          </div>
          <div className="flex items-center gap-3">
            <img className="w-3  h-3" src={'arrow-circle-right.png'}/>
            <p className="text-xs text-gray-500">All assignments</p>
          
          </div>
          
        </div>
      </div>

      <div className="flex bg-[#FCF6EA] p-4 rounded-md gap-y-4  justify-around items-center">
        <div className="flex flex-col justify-center align-middle items-center">
        <img src={'pull.png'} alt="Badge" className="w-10 h-10 rounded mr-4" />
        <p className="text-sm font-semibold">Achiever</p>
        </div>
        <div>
          
          <div className="flex items-center gap-3">
            <img className="w-3  h-3" src={'arrow-circle-right.png'}/>
          <p className="text-xs text-gray-500">Complete 4 courses</p>
          
          </div>
          <div className="flex items-center gap-3">
            <img className="w-3  h-3" src={'arrow-circle-right.png'}/>
            <p className="text-xs text-gray-500">All assignments</p>
          
          </div>
          
        </div>
      </div>
      </div>
      
    </div>
  );
};

export default NextBadge;
