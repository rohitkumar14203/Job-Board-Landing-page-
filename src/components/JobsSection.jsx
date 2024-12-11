import React from "react";
import { Building2, MapPin, IndianRupee } from "lucide-react";
import { jobs } from "../data/jobs.js";

const JobsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Popular Jobs</h2>
        <div className="grid grid-cols-3 gap-6">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start">
                <img
                  src={job.logo}
                  alt={job.company}
                  className="w-12 h-12 rounded-lg object-cover"
                />
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {job.title}
                  </h3>
                  <div className="flex items-center mt-2 text-gray-600">
                    <Building2 className="h-4 w-4" />
                    <span className="ml-2">{job.company}</span>
                  </div>
                  <div className="flex items-center mt-2 text-gray-600">
                    <MapPin className="h-4 w-4" />
                    <span className="ml-2">{job.location}</span>
                  </div>
                  <div className="flex items-center mt-2 text-gray-600">
                    <IndianRupee className="h-4 w-4" />
                    <span className="ml-2">{job.salary}</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  {job.type}
                </span>
                <button className="text-blue-600 hover:text-blue-700 font-medium">
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobsSection;
