
import { Link } from "react-router-dom";

import { FaSearch } from "react-icons/fa";
import { FiRefreshCcw } from "react-icons/fi";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { GoPlus } from "react-icons/go";
import { MdAccessTime } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa6";

const Header = () => {
  return (
    <div className="pt-4">
     <div className="text-center bg-slate-300 border rounded-lg w-[400px] mx-auto  flex items-center gap-4 p-1">
  <button className=" space-x-2">
    <FaSearch />
  </button>
  <input
    type="text"
    placeholder="Search anything"
    className="outline-0 flex-grow p-1 bg-slate-300"
  />
</div>


      <div className="flex justify-between w-11/12 mx-auto p-4 text-center items-center mb-4">
        <h1 className="font-bold text-[1rem]">CNAPP Dashboard</h1>

        <div className="flex gap-5 items-center text-center">
          <Link
            to="/addwidget"
            className="flex items-center border gap-1 px-2 py-1 border-gray-400 rounded-md"
          >
            <button className="">Add Widget</button>
            <p className="text-2xl"><GoPlus/></p>
          </Link>
          <div className="bg-white border border-gray-300 p-1 rounded-md"><FiRefreshCcw /></div>
          <div className="bg-white border border-gray-300 p-1 rounded-md"><HiOutlineDotsVertical/></div>
          
          <button className="flex items-center text-center space-x-2 border border-blue-800 bg-white">
  <MdAccessTime className="text-lg text-white bg-blue-900 rounded-full mx-2" />
  <span className="border-l border-gray-400 px-2 text-blue-800">Last 2 days</span>
  <FaAngleDown className="text-lg" />
</button>

        </div>
      </div>

      {/* Card Component */}
    </div>
  );
};

export default Header;
