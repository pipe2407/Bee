from flask import Flask, jsonify
import tensorflow as tf


app = Flask(__name__) 


model = tf.keras.models.load_model('./bee_model.keras')


@app.route('/predict', methods=['GET'])
def predict():

    input_data = [...] 

    
    prediction = model.predict([input_data])

    return jsonify({'prediction': prediction.tolist()})

if __name__ == '_main_':
    app.run(debug=True)