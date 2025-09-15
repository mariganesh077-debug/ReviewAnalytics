# ReviewAnalytics
# ReviewAnalytics
📊 ReviewAnalytics – Amazon Product Review Sentiment Analysis

A modern web app that analyzes sentiment from Amazon product reviews using AI-powered insights 🤖✨
Built with React (frontend) ⚛ and Flask (backend) 🐍.

🚀 Features

🔍 Product Search – Search any Amazon product to fetch reviews

🤖 AI Sentiment Analysis – Polarity scoring with TextBlob

📊 Interactive Charts – Beautiful charts for sentiment distribution

🖼 Modern UI – Clean, glassmorphism design

⚡ Real-time Analysis – Instant sentiment results

📝 Review Display – Detailed cards with sentiment indicators

📋 Table of Contents

Features

Tech Stack

Installation

Usage

API Documentation

Project Structure

Configuration

Deployment

Contributing

License

Troubleshooting

Support

Future Enhancements

🛠 Tech Stack
🎨 Frontend

⚛ React 18 – Modern UI framework

🎨 Tailwind CSS – Utility-first CSS styling

📊 Chart.js + React-Chartjs-2 – Interactive charts

⚙ Backend

🐍 Flask – Python web framework

🔎 BeautifulSoup4 – Web scraping

🌐 ScraperAPI – Proxy-based scraping

🧠 TextBlob – NLP sentiment analysis

🔄 Flask-CORS – API cross-origin handling

📦 Installation
✅ Prerequisites

🐍 Python 3.8+

🌐 Node.js 16+

📦 npm / yarn

🔧 Backend Setup
# Clone repo
git clone <repository-url>
cd major_major/backend

# Create virtual environment
python -m venv venv

# Activate (Windows)
venv\Scripts\activate

# Activate (macOS/Linux)
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt


Create .env inside backend/:

SCRAPER_API_KEY=your_scraper_api_key_here


Run server:

python app.py


👉 Backend runs at: http://localhost:5000

🎨 Frontend Setup
cd frontend

# Install dependencies
npm install

# Start development server
npm start


👉 Frontend runs at: http://localhost:3000

🎯 Usage
🌐 Web App

Open http://localhost:3000

Enter a product name (e.g., iPhone, Laptop, Headphones)

Click Search 🔍

View:

📊 Sentiment distribution chart

📝 Review cards

📈 Polarity scores

🛠 API Usage

Get Product Reviews

GET /api/reviews?product=<product_name>

Example:

curl "http://localhost:5000/api/reviews?product=iphone"


Response:

{
  "product": "iphone",
  "query_type": "search",
  "reviews": [
    {
      "product": "Apple iPhone 13",
      "review": "Great phone with excellent camera quality...",
      "title": "Product Review",
      "rating": null,
      "sentiment": "positive",
      "polarity": 0.8
    }
  ],
  "total_reviews": 15
}

📚 API Documentation
🔹 Endpoints

GET /api/reviews → Fetch product reviews + sentiment analysis

Parameters:

product (string, required)

Response:

product: Product name

reviews: Array of review objects

sentiment: "positive" | "negative" | "neutral"

polarity: Float (-1 → 1)

GET / → Health check endpoint

📁 Project Structure
major_major/
├── backend/
│   ├── app.py              # Flask app
│   ├── requirements.txt    # Dependencies
│   ├── scrapers/
│   │   └── scraper_api.py  # Amazon scraping logic
│   └── sentiment.py        # Sentiment analysis
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── App.js
│   │   ├── index.js
│   │   ├── index.css
│   │   └── components/
│   │       ├── SearchBar.js
│   │       ├── ReviewsList.js
│   │       └── SentimentChart.js
│   ├── package.json
│   └── tailwind.config.js
└── README.md

🔧 Configuration

Add your ScraperAPI key in .env

Sign up at ScraperAPI

🚀 Deployment
⚙ Backend

Deploy via Heroku / PythonAnywhere

🎨 Frontend

Build for production:

cd frontend
npm run build


Deploy to Netlify / Vercel

🤝 Contributing

🍴 Fork repo

🌱 Create branch → feature/amazing-feature

💡 Commit → git commit -m "Add feature"

🚀 Push → git push origin feature/amazing-feature

🔥 Open PR

📝 License

Licensed under MIT – free to use & modify.

🐛 Troubleshooting

🔑 ScraperAPI Key Error → Check .env

🌐 CORS Issue → Ensure backend runs on 5000

❌ No Reviews Found → Product may have no reviews / API blocked

⚡ Frontend Not Loading → Run npm install + check backend

Run backend in debug mode:

python app.py

📞 Support

📖 Read API Docs

🐞 Open a GitHub issue

🔮 Future Enhancements

🛍 Support multiple e-commerce sites

🎛 Advanced review filters

📂 Export reviews

🔑 User authentication

🕑 Review history tracking

📱 Mobile app version

💡 Made with ❤ by Mari Ganesh M


⚠ Educational purpose only – respect Amazon’s ToS.
