import React from "react";
import { categories } from "../data/categories";

const Categories = () => {
  return (
    <section className="py-16">
      <div className="container">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Popular Categories
        </h2>

        <div className="grid grid-cols-3 gap-6">
          {categories.map(({ icon: Icon, name, count }) => (
            <div
              key={name}
              className="flex items-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="p-3 bg-blue-100 rounded-lg">
                <Icon className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
                <p className="text-gray-600">{count}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
