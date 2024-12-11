import React from "react";
import { BriefcaseIcon } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container h-16 flex justify-between items-center">
        <div className="flex items-center">
          <BriefcaseIcon className="h-8 w-8 text-blue-600" />
          <span className="ml-2 text-xl font-bold text-gray-900">JobHub</span>
        </div>

        <nav className="flex space-x-8">
          <a href="#" className="text-gray-700 hover:text-blue-600">
            Find Jobs
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600">
            Companies
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600">
            All Jobs
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600">
            Contact Us
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <button className="px-4 py-2 text-blue-600 hover:text-blue-700">
            Sign In
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Post a Job
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
