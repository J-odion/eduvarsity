

const Header = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-white border-b border-gray-200">
      <img className="lg:hidden" src={'Group.png'} alt="" />
      <div className="text-xl font-semibold">Dashboard Overview</div>
      <img className="lg:hidden" src={'Mask.svg'} alt="" />
      <div className="lg:flex items-center hidden">
        <input type="text" placeholder="Search" className="border rounded p-2 mr-4 hidden md:block" />
        <div className="flex items-center">
          <img src={'rec.png'} alt="User" className="w-8 h-8 rounded-full" />
          
          <div className="ml-2 hidden md:block">Thanau Abbas</div>

          <img src={'rec.png'} alt="User" className="w-8 h-8 rounded-full" />
        
        </div>
      </div>
    </div>
  );
};

export default Header;
