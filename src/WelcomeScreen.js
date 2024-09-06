import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/bee_logo.png')} 
                style={styles.logo}
            />
            <Text style={styles.title}>Bienvenido a la App de Conservación de Abejas</Text>
            <Text style={styles.subtitle}>El objetivo de esta aplicacíon es visualizar los resultados del análisis de datos y las predicciones del modelo de manera accesible y amigable para el usuario. </Text>
            
            <Button
                title="Obtener Predicciòn"
                onPress={() => navigation.navigate('MainScreen')}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 20,
    },
    logo: {
        width: 150,
        height: 150,
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        color: '#555',
        textAlign: 'center',
        marginBottom: 20,
    },
});

export default WelcomeScreen;