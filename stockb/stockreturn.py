from flask import Flask, request, jsonify
from flask_cors import CORS
import yfinance as yf

app = Flask(__name__)
CORS(app)

@app.route('/api/stock-return', methods=['POST'])
def calculate_stock_return():
    try:

        data = request.json
        company = data['company']
        monthly_investment = float(data['monthly_investment'])
        investment_period = int(data['investment_period']) 

        stock = yf.Ticker(company)
        info = stock.info
        expected_return_percentage = info.get("trailingAnnualDividendYield", 0) * 100  # Fallback to 0 if not available

        if not expected_return_percentage:
            return jsonify({"error": "Expected return data is not available for this company."}), 404

        total_investment = monthly_investment * investment_period
        wealth_gained = total_investment * (expected_return_percentage / 100)
        total_return = total_investment + wealth_gained

        return jsonify({
            "company": company,
            "monthly_investment": monthly_investment,
            "investment_period": investment_period,
            "expected_return_percentage": expected_return_percentage,
            "total_investment": total_investment,
            "wealth_gained": wealth_gained,
            "total_return": total_return
        })

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=5002)
