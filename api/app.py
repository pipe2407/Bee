from flask import Flask, request, jsonify
import tensorflow as tf
import numpy as np
import os

model_path = os.path.join(os.path.dirname(_file_), '../Codigopy/bee_model.keras')
model = tf.keras.models.load_model(model_path)


app = Flask(_name_)


@app.route('/predict', methods=['POST'])
def predict():
    
    data = request.json
    
   
    input_data = np.array([data['features']])  

  
    prediction = model.predict(input_data)

   
    return jsonify({'prediction': prediction.tolist()})

if _name_ == '_main_':
    app.run(debug=True)