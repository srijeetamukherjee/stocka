import pandas as pd
from flask import Flask, request, jsonify
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

# Load the Excel file with company data
company_data = pd.read_excel("Companies.xlsx")  # Ensure this file has columns "Symbol" and "Full Name"

# Convert to dictionary for quick lookup
company_mapping = dict(zip(company_data['Symbol'], company_data['Name']))

@app.route('/api/get_company_name', methods=['GET'])
def get_company_name():
    symbol = request.args.get('symbol')
    full_name = company_mapping.get(symbol, "Unknown Company")
    return jsonify({"full_name": full_name})

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=5001)
