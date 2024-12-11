import React from "react";
import { Search, MapPin } from "lucide-react";

const SearchSection = () => {
  return (
    <div className="bg-blue-600 py-20">
      <div className="container text-center">
        <h1 className="text-5xl font-bold text-white mb-6">
          Find Your Dream Job Today
        </h1>
        <p className="text-xl text-blue-100 mb-8">
          Discover thousands of job opportunities with all the information you
          need
        </p>

        <div className="bg-white p-4 rounded-lg shadow-lg flex gap-4 w-3/4 mx-auto">
          <div className="flex-1 flex items-center border rounded px-3 py-2">
            <Search className="h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Job title or keyword"
              className="ml-2 flex-1 outline-none"
            />
          </div>
          <div className="flex-1 flex items-center border rounded px-3 py-2">
            <MapPin className="h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Location"
              className="ml-2 flex-1 outline-none"
            />
          </div>
          <button className="bg-blue-600 text-white px-8 py-2 rounded hover:bg-blue-700 transition-colors">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
