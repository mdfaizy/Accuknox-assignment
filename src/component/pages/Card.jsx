// import Chart from "./Chart";
// import ChartBox from "./ChartBox";
// import { BsGraphUp } from "react-icons/bs";
// import { Link } from "react-router-dom";
// const Card = () => {
//   const data = JSON.parse(localStorage.getItem(''));
//   console.log(data);
//   return (
//     <div className="w-11/12 mx-auto">
//       <h1 className="font-bold text-[1rem]">CSPM Executive Dashboard</h1>
//       <div className="flex gap-3 p-2">
//         <div className="bg-white shadow-lg rounded-lg w-[450px] h-48 p-2">
//           <h1 className="font-bold text-[1rem]">Cloud Account</h1>

//           <div className="relative">
//             <div className="flex justify-center items-center  rounded-full ">
//               <ChartBox />
//             </div>
//           </div>
//         </div>

//         <div className="bg-white shadow-lg rounded-lg w-[450px] h-48 p-2">
//           <h1 className="font-bold text-[1rem]">Cloud Account Risk Assessment</h1>

//           <div className="flex justify-between items-center text-center">
//             <Chart />
//           </div>
//         </div>

//         <div className="bg-gray-100 rounded-lg w-[450px] h-48 p-4 shadow-lg flex flex-col items-center justify-center">
//           <div className="flex items-center justify-center border gap-2 px-4 py-2 border-gray-400 rounded-md">
//            <Link   to="/addwidget">
//            <button className="text-lg font-semibold">Add Widget</button>
//            </Link>
//             {/* <p className="text-2xl"><GoPlus/></p> */}
//           </div>
//         </div>
//       </div>

//       <div>
//         <h1 className="font-bold text-[1rem]">CWPP Dashboard</h1>
//         <div className="flex gap-3 p-2">
//           <div className="bg-white shadow-lg rounded-lg w-[450px] h-48 p-2">
//             <h1 className="font-bold text-[1rem]">Top 5 Namespace Specific Alerts</h1>
//             <div className="flex flex-col items-center text-center mt-4">
//               <BsGraphUp className="text-center text-4xl mb-2" />
//               <p>Not Graph data available</p>
//             </div>
//           </div>
//           <div className="bg-white shadow-lg rounded-lg w-[450px] h-48 p-2">
//             <h1 className="font-bold">Work load Alerts</h1>
//             <div className="flex flex-col items-center text-center mt-4">
//               <BsGraphUp className="text-center text-4xl mb-2" />
//               <p>Not Graph data available</p>
//             </div>
//           </div>
//           <div className="bg-gray-100 rounded-lg w-[450px] h-48 p-4 shadow-lg flex flex-col items-center justify-center">
//             <div className="flex items-center justify-center border gap-2 px-4 py-2 border-gray-400 rounded-md">
//             <Link   to="/addwidget">
//            <button className="text-lg font-semibold">Add Widget</button>
//            </Link>
//               {/* <p className="text-2xl"><GoPlus/></p> */}
//             </div>
//           </div>{" "}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Card;

import { useEffect, useState } from "react";
import Chart from "./Chart";
import ChartBox from "./ChartBox";
import { BsGraphUp } from "react-icons/bs";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
// import {initialCategories} from "../utils/Category"
const Card = () => {
  // const [searchQuery, setSearchQuery] = useState('');

  // const filteredWidgets =initialCategories.name.filter(initialCategories =>
  //   initialCategories.title.toLowerCase().includes(searchQuery.toLowerCase())
  // );

  //  useEffect(()=>{
  //   filteredWidgets()
  // },[])

  return (
    <div className="w-11/12 mx-auto">
      <h1 className="font-bold text-[1rem]">CSPM Executive Dashboard</h1>
      <div className="flex gap-3 p-2">
        <div className="bg-white shadow-lg rounded-lg w-[450px] h-48 p-2">
          <h1 className="font-bold text-[1rem]">Cloud Account</h1>

          <div className="relative">
            <div className="flex justify-center items-center  rounded-full ">
              <ChartBox />
            </div>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg w-[450px] h-48 p-2">
          <h1 className="font-bold text-[1rem]">
            Cloud Account Risk Assessment
          </h1>

          <div className="flex justify-between items-center text-center">
            <Chart />
          </div>
        </div>

        <div className="bg-gray-100 rounded-lg w-[450px] h-48 p-4 shadow-lg flex flex-col items-center justify-center">
          <div className="flex items-center justify-center border gap-2 px-4 py-2 border-gray-400 rounded-md">
            <Link to="/addwidget">
              <button className="text-lg font-semibold">Add Widget</button>
            </Link>
            {/* <p className="text-2xl"><GoPlus/></p> */}
          </div>
        </div>
      </div>

      <div>
        <h1 className="font-bold text-[1rem]">CWPP Dashboard</h1>
        <div className="flex gap-3 p-2">
          <div className="bg-white shadow-lg rounded-lg w-[450px] h-48 p-2">
            <h1 className="font-bold text-[1rem]">
              Top 5 Namespace Specific Alerts
            </h1>
            <div className="flex flex-col items-center text-center mt-4">
              <BsGraphUp className="text-center text-4xl mb-2" />
              <p>Not Graph data available</p>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg w-[450px] h-48 p-2">
            <h1 className="font-bold">Work load Alerts</h1>
            <div className="flex flex-col items-center text-center mt-4">
              <BsGraphUp className="text-center text-4xl mb-2" />
              <p>Not Graph data available</p>
            </div>
          </div>
          <div className="bg-gray-100 rounded-lg w-[450px] h-48 p-4 shadow-lg flex flex-col items-center justify-center">
            <div className="flex items-center justify-center border gap-2 px-4 py-2 border-gray-400 rounded-md">
              <Link to="/addwidget">
                <button className="text-lg font-semibold">Add Widget</button>
              </Link>
              {/* <p className="text-2xl"><GoPlus/></p> */}
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default Card;
