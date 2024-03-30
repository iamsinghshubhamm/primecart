import React, { useContext } from "react";
import ContextAPI from "../../Context/Data/ContextApi";
import { IoSearch } from "react-icons/io5";

function Filter() {
  const context = useContext(ContextAPI);
  const { mode } = context;

  return (
    <div>
      <div className=" container mx-auto px-4 mt-5 ">
        <div
          className="p-5 rounded-lg bg-amber-50 drop-shadow-xl border border-gray-200"
          style={{
            backgroundColor: mode === "dark" ? "#282c34" : "",
            color: mode === "dark" ? "white" : "",
          }}
        >
          <div className="relative">
            <div className="absolute flex items-center ml-2 h-full">
              <IoSearch className="text-gray-400 text-xl mt-1" />
            </div>
            <input
              type="text"
              name="searchkey"
              id="searchkey"
              placeholder="Search here"
              className="px-8 py-3 shadow-md w-full rounded-md bg-violet-0 border-transparent outline-0 text-sm"
              style={{
                backgroundColor: mode === "dark" ? "rgb(64 66 70)" : "",
                color: mode === "dark" ? "white" : "",
              }}
            />
          </div>
          <div className="flex items-center justify-between mt-4">
            <p className="font-medium">Filters</p>
            <button
              className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md"
              style={{ color: mode === "dark" ? "black" : "" }}
            >
              Reset Filter
            </button>
          </div>
          <div>
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
              <select
                className="px-4 shadow-md py-3 w-full rounded-md bg-gray-50 border-transparent outline-0 focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
                style={{
                  backgroundColor: mode === "dark" ? "rgb(64 66 70)" : "",
                  color: mode === "dark" ? "white" : "",
                }}
              >
                <option value="jacket">Jacket</option>
                <option value="shirt">shirt</option>
                <option value="mobile">mobile</option>
                <option value="jacket">Jacket</option>
              </select>
              <select
                className="px-4 shadow-md py-3 w-full rounded-md bg-gray-50 border-transparent outline-0  focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
                style={{
                  backgroundColor: mode === "dark" ? "rgb(64 66 70)" : "",
                  color: mode === "dark" ? "white" : "",
                }}
              >
                <option value="100">100</option>
                <option value="200">200</option>
                <option value="300">300</option>
                <option value="400">400</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;
