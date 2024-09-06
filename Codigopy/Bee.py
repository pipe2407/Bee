import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import mean_absolute_error, mean_squared_error, r2_score
import matplotlib.pyplot as plt
import seaborn as sns
import joblib

# Cargar el archivo CSV
file_path = './Bee.csv'
df = pd.read_csv(file_path)

# Mostrar las primeras filas del DataFrame
print(df.head())

# Seleccionar las características (features) y la variable objetivo (target)
X = df.drop(columns=['state', 'state_code', 'percent_lost'])
y = df['percent_lost']

# Dividir los datos en conjuntos de entrenamiento y prueba
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Estandarizar los datos
scaler = StandardScaler()
X_train = scaler.fit_transform(X_train)
X_test = scaler.transform(X_test)

# Entrenar el modelo
model = RandomForestRegressor(n_estimators=100, random_state=42)
model.fit(X_train, y_train)

# Hacer predicciones
y_pred = model.predict(X_test)

# Calcular métricas de evaluación
mae = mean_absolute_error(y_test, y_pred)
mse = mean_squared_error(y_test, y_pred)
rmse = np.sqrt(mse)
r2 = r2_score(y_test, y_pred)

print(f'MAE: {mae}')
print(f'RMSE: {rmse}')
print(f'R2: {r2}')

# Mostrar el porcentaje de pérdidas de colonias de abejas predichas y reales
pred_vs_actual = pd.DataFrame({'Real': y_test, 'Predicho': y_pred})
print("\nPorcentaje de pérdidas de colonias de abejas (reales vs predichos):")
print(pred_vs_actual)

# Comparar las predicciones con los valores reales
plt.figure(figsize=(10, 6))
sns.scatterplot(x=y_test, y=y_pred)
plt.xlabel('Valores reales')
plt.ylabel('Predicciones')
plt.title('Porcentaje de pérdidas de colonias de abejas ')
plt.show()

# Guardar el modelo entrenado
joblib.dump(model, 'bee_colony_loss_predictor.pkl')

# Guardar la figura como una imagen
plt.savefig('bee_colony_loss_plot.png')
