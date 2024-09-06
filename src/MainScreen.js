import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MainScreen = () => {
  const navigation = useNavigation();
  const consoleOutput = `
state    state_code  num_colonies  ...  pesticides  other  unknown
Alabama         AL          7000  ...         2.2    9.1      9.4        
Arizona         AZ         35000  ...         0.0    1.8      3.1        
Arkansas        AR         13000  ...         3.4    1.0      1.0        
California      CA       1440000  ...         7.5    6.5      2.8        
Colorado        CO          3500  ...         0.6    2.6      5.9        

[5 rows x 17 columns]

MAE: 1.26446735395189
RMSE: 2.606945652624702
R2: 0.8811559035875874

Porcentaje de pérdidas de colonias de abejas (reales vs predichos):
Real  Predicho
20     17.75
15     15.20
11     10.96
9      8.87
14     15.14
  `;

  return (
    <ScrollView style={styles.container}>
    
      <Text style={styles.consoleText}>{consoleOutput}</Text>


      <Image 
        source={require('./bee_colony_loss_plot.png')} 
        style={styles.image} 
        resizeMode="contain" 
      />

     
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('RecommendationsScreen')}
      >
        <Text style={styles.buttonText}>Ver Recomendaciones</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  consoleText: {
    fontFamily: 'Courier',
    fontSize: 14,
    color: '#333',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 300,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default MainScreen;