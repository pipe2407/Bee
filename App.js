import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import WelcomeScreen from './src/WelcomeScreen';
import MainScreen from './src/MainScreen';
import RecommendationsScreen from './src/RecommendationsScreen'; // Importar la nueva pantalla

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="WelcomeScreen">
        <Stack.Screen 
          name="WelcomeScreen" 
          component={WelcomeScreen} 
          options={{ title: 'Aplicación de Técnicas de Análisis de Datos  ' }}
        />
        <Stack.Screen 
          name="MainScreen" 
          component={MainScreen} 
          options={{ title: 'Porcentaje de pérdidas de colonias de abejas ' }}
        />
        <Stack.Screen 
          name="RecommendationsScreen" 
          component={RecommendationsScreen} 
          options={{ title: 'Recomendaciones' }} // Personaliza el título del encabezado para RecommendationsScreen
         
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;