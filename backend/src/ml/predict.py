import sys
import joblib
import numpy as np
import pandas as pd
import os

model_path = os.path.join(os.path.dirname(__file__), "crop_model.pkl")
model = joblib.load(model_path)

args = list(map(float, sys.argv[1:]))
input_df = pd.DataFrame([args], columns=["N", "P", "K", "temperature", "humidity", "ph", "rainfall"])
prediction = model.predict(input_df)[0]
print(prediction)