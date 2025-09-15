# ReviewAnalytics
📊 ReviewAnalytics

AI-Powered Amazon Product Review Sentiment Analysis
A modern full-stack app that uses AI sentiment analysis to process Amazon product reviews in real-time.

Built with React ⚛ (frontend) and Flask 🐍 (backend)

🚀 Features

🔍 Product Search – Enter any product to fetch Amazon reviews

🤖 AI Sentiment Analysis – TextBlob-powered polarity scoring

📊 Interactive Charts – Visualize sentiment distributions

🖼 Modern UI – Clean glassmorphism design using Tailwind CSS

⚡ Real-Time Insights – Sentiment results update instantly

📝 Review Cards – Each review shows sentiment and polarity

🛠 Tech Stack
🎨 Frontend

⚛ React 18 – Component-based UI framework

🎨 Tailwind CSS – Utility-first CSS styling

📈 Chart.js + react-chartjs-2 – Beautiful interactive graphs

⚙️ Backend

🐍 Flask – Lightweight Python web framework

🔎 BeautifulSoup4 – Web scraping Amazon reviews

🌐 ScraperAPI – Proxy-based scraping solution

🧠 TextBlob – NLP sentiment classification

🔄 Flask-CORS – Cross-origin request handling

📦 Installation
✅ Prerequisites

🐍 Python 3.8+

🌐 Node.js 16+

📦 npm or yarn

🔧 Backend Setup
# Clone the repository
git clone <repository-url>
cd major_major/backend

# Create virtual environment
python -m venv venv

# Activate environment
# Windows:
venv\Scripts\activate
# macOS/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt


📄 Create .env in backend/:

SCRAPER_API_KEY=your_scraper_api_key_here


▶️ Run backend server:

python app.py


📍 Backend runs at: http://localhost:5000

🎨 Frontend Setup
cd frontend

# Install dependencies
npm install

# Start development server
npm start


📍 Frontend runs at: http://localhost:3000

🎯 Usage
🌐 Web App

Visit http://localhost:3000

Enter a product name (e.g., iPhone, Headphones, Laptop)

Click Search 🔍

View:

📊 Sentiment distribution chart

📝 Review cards with sentiment and polarity

📈 Real-time results

📡 API Usage
📥 Fetch Product Reviews

GET /api/reviews?product=<product_name>

📌 Example:
curl "http://localhost:5000/api/reviews?product=iphone"

📤 Response:
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
GET /api/reviews

Fetch product reviews + sentiment analysis

Parameters:

product (string, required)

Returns:

product: Product name

reviews[]: List of reviews

sentiment: "positive", "negative", or "neutral"

polarity: Float value between -1 and 1

🗂 Project Structure
major_major/
├── backend/
│   ├── app.py               # Flask app
│   ├── requirements.txt     # Python dependencies
│   ├── scrapers/
│   │   └── scraper_api.py   # Web scraping logic
│   └── sentiment.py         # Sentiment analysis logic
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

⚙ Configuration

🔐 Add your ScraperAPI key in .env file

✅ Get your free key from ScraperAPI

🚀 Deployment
🔧 Backend

Deploy using:

⚙️ Heroku

☁️ PythonAnywhere

🔄 Render

🎨 Frontend

Build the frontend for production:

cd frontend
npm run build


Deploy using:

🌐 Netlify

🚀 Vercel

📦 GitHub Pages

🤝 Contributing
🍴 Fork the repository
🌱 Create a new branch: feature/amazing-feature
💡 Make your changes
✅ Commit: git commit -m "Add amazing feature"
🚀 Push: git push origin feature/amazing-feature
🔥 Open a pull request

📝 License

📄 MIT License – Free to use, modify, and distribute.

🐛 Troubleshooting
🧩 Issue	💡 Solution
🔑 Invalid ScraperAPI Key	Check .env for correct key
🌐 CORS Errors	Backend must be running on port 5000
❌ No Reviews Found	Product may have no reviews or API was blocked
⚡ Frontend Not Loading	Run npm install and confirm backend is active

💡 Run backend in debug mode for logs:

python app.py

📞 Support

📖 Check the API documentation above

🐞 Open an issue on the GitHub repo

🔮 Future Enhancements

🛍 Support multiple e-commerce sites (eBay, Flipkart, etc.)

🎛 Filter reviews by rating, sentiment, or keywords

📂 Export reviews (CSV / PDF)

🔐 Add user authentication & saved sessions

🕓 Review search history & analytics

📱 Mobile app / PWA version

💡 Made with ❤️ by Mari Ganesh M

⚠️ For educational use only – respect Amazon’s Terms of Service
