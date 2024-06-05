

const ContinueLearning = () => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <div className="flex justify-between items-center mb-4">
        <div className="text-lg font-semibold">Continue Learning</div>
        <button className="text-green-600">Resume lessons</button>
      </div>
      <div className="flex">
        <img src={'RRec.png'} alt="Course" className="w-38 h-16 rounded mr-4" />
        <div>
          <div className="text-sm font-semibold">Introduction to Product Design</div>
          <div className="text-xs text-gray-500">17 Aug - 30 Aug</div>
          <div className="mt-2">
            <div className="text-xs font-semibold inline-block py-1 px-2 rounded-full text-green-600 bg-green-200">
              25% done
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContinueLearning;
