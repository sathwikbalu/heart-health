from flask import Flask, request, jsonify
import pandas as pd
import pickle
app = Flask(__name__)
neigh = pickle.load(open("server.js/finalized_model.sav", 'rb'))
@app.route('/predict', methods=['POST'])
def prediction():
    data = request.json["data"]
    series_data = pd.Series(data, index=['age', 'sex', 'cp', 'trestbps', 'chol', 'fbs', 'restecg', 'thalach', 'exang', 'oldpeak', 'slope', 'ca', 'thal'])
    df = pd.DataFrame([series_data])  # Convert Series to DataFrame
    prediction_result = {"prediction": neigh.predict(df).tolist()}
    return jsonify(prediction_result)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=4000, debug=True)
