

const ProgressOverview = () => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      <div className="bg-white p-5 rounded shadow">
        <div className="flex justify-between items-center p-x-3 gap-y-4">
        <img className="w-5  h-5 " src={'award.png '}/> 
          <p className="text-2xl">10%</p>
        </div>
        <div className="text-lg font-semibold">Batch overall progress</div>
      </div>
      <div className="bg-white p-4 rounded shadow">
        <div className="flex justify-between items-center p-x-3 gap-y-4">
        <img src={'trend-up.png '}/> 
          <p className="text-2xl">50%</p>
        </div>
        <div className="text-lg font-semibold">Total overall progress</div>
      </div>
      <div className="bg-white p-4 rounded shadow">
        <div className="flex justify-between items-center p-x-3 gap-y-4">
          <img src={'teacher.png '}/> 
          <p className="text-2xl">30%</p>
          </div>
        <div className="text-lg font-semibold">Overall grade</div>
      </div>
    </div>
  );
};

export default ProgressOverview;
