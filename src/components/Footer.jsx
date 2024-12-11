import React from "react";
import { BriefcaseIcon, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container py-12">
        <div className="grid grid-cols-4 gap-8">
          <div>
            <div className="flex items-center h-full">
              <BriefcaseIcon className="h-8 w-8 text-blue-500" />
              <span className="ml-2 text-3xl  font-bold text-white">
                JobHub
              </span>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              For Job Seekers
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-400">
                  Browse Jobs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Job Alerts
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              For Employers
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-400">
                  Post a Job
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Browse Candidates
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Contact Us
            </h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-blue-500" />
                <span className="ml-2">support@jobhub.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-blue-500" />
                <span className="ml-2">+91 98884XXXXX</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
