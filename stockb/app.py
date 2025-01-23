from flask import Flask, jsonify, request
from flask_cors import CORS
import yfinance as yf
import logging

app = Flask(__name__)
CORS(app)

# Configure logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

def fetch_stock_data(symbol):
    try:
        stock = yf.Ticker(symbol)

        # Fetch stock info and historical data
        info = stock.info
        hist = stock.history(period="1mo")  # Fetch last month's historical data
        historical_data = hist.reset_index()[['Date', 'Open', 'High', 'Low', 'Close']]

        # Prepare stock details
        stock_details = {
            "Market Cap": info.get('marketCap', 'N/A'),
            "Current Price": info.get('currentPrice', 'N/A'),
            "High / Low": f"{info.get('dayHigh', 'N/A')} / {info.get('dayLow', 'N/A')}",
            "Stock P/E": info.get('trailingPE', 'N/A'),
            "Book Value": info.get('bookValue', 'N/A'),
            "Dividend Yield": f"{info.get('dividendYield', 'N/A') * 100:.2f}%" if info.get('dividendYield') else 'N/A',
            "ROCE": f"{info.get('returnOnEquity', 'N/A') * 100:.2f}%" if info.get('returnOnEquity') else 'N/A',
            "Face Value": info.get('faceValue', 'N/A')
        }

        # Convert historical data to JSON serializable format
        stock_data = historical_data.to_dict(orient="records")
        return {"details": stock_details, "historical_data": stock_data}

    except Exception as e:
        logging.error(f"Error fetching stock data for {symbol}: {str(e)}")
        return {"error": "Unable to fetch data. Please check the company name or try again later."}

@app.route('/api/get_stock_data', methods=['GET'])
def get_stock_data():
    company_name = request.args.get('company_name')
    if not company_name:
        return jsonify({'error': 'Company name is required'}), 400

    stock_data = fetch_stock_data(company_name)
    return jsonify(stock_data)

if __name__ == '__main__':
    app.run(debug=True)
