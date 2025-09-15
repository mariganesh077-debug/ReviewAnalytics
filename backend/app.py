from flask import Flask, request, jsonify
from flask_cors import CORS
from scrapers.scraper_api import scrape_amazon_reviews
from sentiment import analyze_sentiment
from db import get_database
from datetime import datetime

app = Flask(__name__)
CORS(app)  # Enable CORS for frontend

@app.route("/api/reviews", methods=["GET"])
def get_reviews():
    """
    API Endpoint:
    /api/reviews?product=<product_name>
    Example: /api/reviews?product=iphone
    """
    product_query = request.args.get("product", "").strip()

    if not product_query:
        return jsonify({"error": "Missing 'product' query parameter"}), 400

    try:
        reviews_data = scrape_amazon_reviews(product_query, max_products=3)

        if not reviews_data:
            return jsonify({"error": f"No reviews found for '{product_query}'. Try a different search term."}), 404

        # Add sentiment analysis
        for review in reviews_data:
            sentiment_result = analyze_sentiment(review["review"])
            review["sentiment"] = sentiment_result["label"]
            review["polarity"] = sentiment_result["polarity"]

        # Persist to MongoDB
        db = get_database()
        products_col = db["products"]
        reviews_col = db["reviews"]

        product_doc = {
            "query": product_query,
            "created_at": datetime.utcnow(),
            "total_reviews": len(reviews_data)
        }
        product_insert = products_col.insert_one(product_doc)
        product_id = product_insert.inserted_id

        review_docs = []
        for r in reviews_data:
            review_docs.append({
                "product_id": product_id,
                "product": r.get("product"),
                "title": r.get("title"),
                "review": r.get("review"),
                "rating": r.get("rating"),
                "sentiment": r.get("sentiment"),
                "polarity": r.get("polarity"),
                "created_at": datetime.utcnow()
            })
        if review_docs:
            reviews_col.insert_many(review_docs)

        # Prepare response
        response_data = {
            "product": product_query,
            "query_type": "search",
            "reviews": reviews_data,
            "total_reviews": len(reviews_data),
            "stored": {
                "product_id": str(product_id),
                "reviews_inserted": len(review_docs)
            }
        }

        return jsonify(response_data)

    except Exception as e:
        return jsonify({"error": str(e)}), 500


@app.route("/", methods=["GET"])
def home():
    return jsonify({
        "message": "Amazon Review Scraper API is running!",
        "usage": {
            "search_by_name": "/api/reviews?product=iphone"
        }
    })


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5000)
