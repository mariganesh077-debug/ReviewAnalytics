import React from "react";

function ReviewsList({ reviews }) {
  if (!reviews.length) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
        <p className="text-gray-500">No reviews to display.</p>
      </div>
    );
  }

  const getSentimentIcon = (sentiment) => {
    switch (sentiment) {
      case "positive":
        return (
          <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
        );
      case "negative":
        return (
          <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
          </svg>
        );
      default:
        return (
          <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.414-1.414L11 9.586V6z" clipRule="evenodd" />
          </svg>
        );
    }
  };

  return (
    <div className="grid gap-6">
      {reviews.map((review, idx) => (
        <div 
          key={idx} 
          className="group bg-white/80 backdrop-blur-sm border border-white/40 rounded-2xl p-6 hover:shadow-xl hover:bg-white/90 transition-all duration-300 hover:scale-[1.02]"
        >
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <h3 className="font-semibold text-lg text-gray-800 mb-2 group-hover:text-indigo-600 transition-colors">
                {review.title || "Product Review"}
              </h3>
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                {review.rating && (
                  <div className="flex items-center space-x-1">
                    <span className="text-yellow-500">⭐</span>
                    <span className="font-medium">{review.rating}</span>
                  </div>
                )}
                <span className="text-gray-400">•</span>
                    <span className="text-gray-500">Review #{idx + 1}</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              {getSentimentIcon(review.sentiment)}
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  review.sentiment === "positive"
                    ? "bg-green-100 text-green-800"
                    : review.sentiment === "negative"
                    ? "bg-red-100 text-red-800"
                    : "bg-gray-100 text-gray-800"
                }`}
              >
                {review.sentiment}
              </span>
            </div>
          </div>
          
          <div className="bg-gray-50/50 rounded-xl p-4 mb-4">
            <p className="text-gray-700 leading-relaxed text-sm">
              {review.review || "No content available"}
            </p>
          </div>
          
          {review.polarity && (
            <div className="flex items-center justify-between text-xs text-gray-500">
              <span>Sentiment Score: {review.polarity.toFixed(3)}</span>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                <span>AI Analyzed</span>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default ReviewsList;
