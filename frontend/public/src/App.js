import React, { useState } from "react";
import SentimentChart from "./components/SnetimentChart";
import SearchBar from "./components/SearchBar";
import ReviewsList from "./components/ReviewsList";

function App() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [currentQuery, setCurrentQuery] = useState("");

  const handleSearch = async (query, source) => {
    if (!query) {
      alert("Please enter a product name");
      return;
    }

    setLoading(true);
    setError("");
    setReviews([]);
    setCurrentQuery(query);

    try {
      const res = await fetch(
        `http://localhost:5000/api/reviews?product=${encodeURIComponent(
          query
        )}&source=${source}`
      );

      if (!res.ok) throw new Error("Failed to fetch reviews");

      const data = await res.json();
      if (!data.reviews || !Array.isArray(data.reviews)) throw new Error("Invalid API response");

      setReviews(data.reviews);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-md border-b border-white/20 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-pink-600 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">
                ReviewAnalytics
              </h1>
            </div>
            <div className="text-sm text-gray-500">
              Powered by AI Sentiment Analysis
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-gray-800 mb-4">
            Discover What People Are Saying
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get comprehensive sentiment analysis of product reviews from Amazon. 
            Search for any product to see what customers are saying.
          </p>
        </div>

        {/* Search Section */}
        <div className="bg-white/60 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-8 mb-12">
          <SearchBar onSearch={handleSearch} />
        </div>

        {/* Query Indicator */}
        {currentQuery && !loading && !error && (
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-4 mb-8">
            <div className="flex items-center justify-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm font-medium text-gray-700">
                Product Search: {currentQuery}
              </span>
            </div>
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-12 mb-8">
            <div className="flex flex-col items-center justify-center">
              <div className="relative">
                <div className="w-16 h-16 border-4 border-indigo-200 rounded-full animate-spin"></div>
                <div className="absolute top-0 left-0 w-16 h-16 border-4 border-transparent border-t-indigo-600 rounded-full animate-spin"></div>
              </div>
              <p className="mt-6 text-lg text-gray-600 font-medium">Searching for reviews...</p>
              <p className="text-sm text-gray-500 mt-2">This may take a few moments</p>
            </div>
          </div>
        )}
        
        {/* Error State */}
        {error && (
          <div className="bg-red-50/80 backdrop-blur-sm rounded-3xl shadow-xl border border-red-200 p-8 mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-red-800 mb-2">Oops! Something went wrong</h3>
              <p className="text-red-600">{error}</p>
            </div>
          </div>
        )}

        {/* Results */}
        {reviews.length > 0 && (
          <div className="space-y-8">
            {/* Chart Section */}
            <div className="bg-white/60 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Sentiment Overview</h2>
                <p className="text-gray-600">Analysis of {reviews.length} reviews</p>
              </div>
              <SentimentChart reviews={reviews} />
            </div>

            {/* Reviews Section */}
            <div className="bg-white/60 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-8">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold text-gray-800">All Reviews</h2>
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span>Positive</span>
                  <div className="w-3 h-3 bg-red-500 rounded-full ml-3"></div>
                  <span>Negative</span>
                  <div className="w-3 h-3 bg-gray-500 rounded-full ml-3"></div>
                  <span>Neutral</span>
                </div>
              </div>
              <ReviewsList reviews={reviews} />
            </div>
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && reviews.length === 0 && (
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-16 text-center">
            <div className="w-24 h-24 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-700 mb-3">Ready to Explore?</h3>
            <p className="text-gray-500 max-w-md mx-auto">
              Enter a product name above to discover what customers are saying and get AI-powered sentiment insights.
            </p>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="mt-16 bg-white/80 backdrop-blur-md border-t border-white/20">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="text-center text-gray-500">
            <p>&copy; 2024 ReviewAnalytics. Built with React & AI.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
