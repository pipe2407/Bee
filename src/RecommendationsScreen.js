import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const RecommendationsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Recomendaciones para la Conservación de Colonias de Abejas</Text>
      
      <Text style={styles.paragraph}>
        1. Promover la Diversidad Floral:
         Plantar una variedad de flores que proporcionen néctar y polen durante todo el año es crucial para la salud de las colonias.
      </Text>

      <Text style={styles.paragraph}>
        2. Reducir el Uso de Pesticidas:
         Minimizar el uso de pesticidas y optar por alternativas menos dañinas puede ayudar a proteger las abejas de sustancias químicas tóxicas.
      </Text>

      <Text style={styles.paragraph}>
        3. Fomentar Hábitats Naturales:
         Conservar y restaurar hábitats naturales, como praderas y bosques, proporciona refugio y recursos alimenticios vitales para las abejas.
      </Text>

      <Text style={styles.paragraph}>
        4. Manejo de Parásitos y Enfermedades:
         Implementar prácticas de manejo que controlen parásitos como el ácaro Varroa y enfermedades comunes sin dañar las colonias es fundamental.
      </Text>

      <Text style={styles.paragraph}>
        5. Educación y Concientización:
         Educar a la comunidad sobre la importancia de las abejas y cómo sus acciones pueden impactar en la salud de las colonias es esencial para su conservación.
      </Text>
    </ScrollView>
  );
};
export default RecommendationsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 12,
    lineHeight: 22,
    color: '#555',
  },
});
