import { useState } from "react";
import { categorySection } from "../utils/Category";
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
const Dashboard = () => {
  const [activeCategory, setActiveCategory] = useState('CSPM');
  const [checkedItems, setCheckedItems] = useState({});
const navigator =useNavigate()
  // Handle category click
  const handleCategoryClick = (category) => {
    setActiveCategory(category.name);
    setCheckedItems({}); // Reset checked items when switching categories
  };


  // Handle checkbox change
  const handleCheckboxChange = (e, item) => {
    setCheckedItems((prevCheckedItems) => ({
      ...prevCheckedItems,
      [item]: e.target.checked,
    }));
  };

  const handleCancel = () => {
    setActiveCategory(null); // Deselect category and reset form
    setCheckedItems({});
    navigator('/');
  };

  const handleConfirm = () => {
    console.log("Checked Items:", checkedItems);
    // Add your logic to handle the confirmed data
    setActiveCategory(null); // Clear selection
    setCheckedItems({});
  };


  const handleCancelToHome=()=>{
    navigator('/');
  }
  return (
    <div className="container  justify-end mx-[50%] p-4 w-[50%]">
      <div className="bg-blue-800 flex justify-between text-center p-2">
        <h2 className="text-white text-[14px]">Add Widget</h2>
        <div className="text-white text-[16px]" onClick={handleCancelToHome}><RxCross2 /></div>
      </div>
      <h2>Personalise your dashboard adding the following widget</h2>

      {/* Render category buttons */}
      <div className="flex flex-row space-x-4">
        {categorySection.map((category) => (
          <button
            key={category.id}
            className={`bg-blue-500 text-white p-2 rounded ${
              activeCategory === category.name ? "bg-blue-700" : ""
            }`}
            onClick={() => handleCategoryClick(category)}
          >
            {category.name}
          </button>
        ))}
      </div>
      {/* Render input fields and checkboxes based on selected category */}
      {activeCategory && (
        <div className="mt-4">
          {activeCategory === "CSPM" && (
            <div className="bg-white shadow rounded-md p-4 m-2">
              <div className="px-2 border-2	mb-2 rounded-sm border-gray-400 gap-x-3">
                <label className="">
                  <input
                    className="outlate-0 border-0 text-2xl px-2"
                    type="checkbox"
                    checked={checkedItems["Cloud Accounts"] || false}
                    onChange={(e) => handleCheckboxChange(e, "Cloud Accounts")}
                  />{" "}

                  <input type="text" placeholder="Cloud Accounts" className="outline-0" />
                </label>
              </div>
              <div className="px-2 border-2	 rounded-sm border-gray-400">
                <label>
                  <input
                    type="checkbox"
                    checked={
                      checkedItems["Cloud Account Risk Assessment"] || false
                    }
                    onChange={(e) =>
                      handleCheckboxChange(e, "Cloud Account Risk Assessment")
                    }
                  />{" "}
                  <input type="text" placeholder='Cloud Account Risk Assessment' name="" id="" />
                </label>
              </div>

              <div className="mt-[350px] justify-end flex">
                <button
                  className="bg-red-500 text-white p-2 rounded-sm mr-2"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
                <button
                  className="bg-green-500 text-white p-2 rounded"
                  onClick={handleConfirm}
                >
                  Confirm
                </button>
              </div>
            </div>
          )}

          {activeCategory === "CWPP" && (
            <div className="bg-white shadow rounded-md p-4">
              {/* CWPP Specific Checkboxes */}
              <div className="px-2 border-2	mb-2 rounded-sm border-gray-400 gap-x-3">
                <label>
                  <input
                    type="checkbox"
                    checked={checkedItems["Top 4 Accounts"] || false}
                    onChange={(e) => handleCheckboxChange(e, "Top 4 Accounts")}
                  />{" "}
                   <input type="text" className="outline-0" />
                </label>
              </div>
              <div className="px-2 border-2	mb-2 rounded-sm border-gray-400 gap-x-3">
                <label>
                  <input
                    type="checkbox"
                    checked={
                      checkedItems["Faizy Account Risk Assessment"] || false
                    }
                    onChange={(e) =>
                      handleCheckboxChange(e, "Faizy Account Risk Assessment")
                    }
                  />{" "}
                 <input type="text" className="outline-0" />
                </label>
              </div>

              {/* Cancel and Confirm Buttons */}
              <div className="mt-[350px] justify-end flex">
                <button
                  className="bg-red-500 text-white p-2 rounded-sm mr-2"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
                <button
                  className="bg-green-500 text-white p-2 rounded"
                  onClick={handleConfirm}
                >
                  Confirm
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Dashboard;