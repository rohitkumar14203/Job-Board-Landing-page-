import React from "react";

import SearchSection from "./components/SearchSection";
import Header from "./components/Header";
import Footer from "./components/Footer";
import JobsSection from "./components/JobsSection";
import Categories from "./components/Categories";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <SearchSection />
      <JobsSection />
      <Categories />
      <Footer />
    </div>
  );
}

export default App;
