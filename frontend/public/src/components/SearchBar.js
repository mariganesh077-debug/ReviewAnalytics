import React, { useState } from "react";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (!query.trim()) {
      alert("Please enter a product name");
      return;
    }
    onSearch(query.trim(), "both"); // Default to both sources
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="relative max-w-2xl mx-auto">
      <div className="relative">
        <input
          type="text"
          placeholder="Enter product name (e.g., iPhone, laptop, headphones)"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={handleKeyPress}
          className="w-full p-6 pl-16 pr-20 text-xl border-0 rounded-2xl bg-white shadow-lg focus:outline-none focus:ring-4 focus:ring-indigo-500/20 transition-all duration-300 placeholder-gray-400"
        />
        <div className="absolute left-6 top-1/2 transform -translate-y-1/2">
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <button
          onClick={handleSearch}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-indigo-600 to-pink-600 text-white px-6 py-3 rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl"
        >
          Search
        </button>
      </div>
      <div className="flex items-center justify-center mt-4">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span className="text-sm text-gray-500">Product Search</span>
        </div>
      </div>
      <p className="text-center text-gray-500 mt-2 text-xs">
        Search for product reviews on Amazon
      </p>
    </div>
  );
}

export default SearchBar;
