import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default ({ navigation }) => {
    return (
      <View style={styles.container}>
        <Text style = {styles.text1}>vai se fude </Text>
        <Text style = {styles.text}>Seja Bem Vindo ao aplicativo de acessibilidade visual do IFFAR</Text>
        <Text style = {styles.text}>Escaneie o código QR, através do botão abaixo.</Text>

        
      
      </View>
    );
  }








<TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('CameraScreen')}
        >
          <Text style={styles.buttonText}> Escanear QR Code </Text>
        </TouchableOpacity>



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      button: {
        backgroundColor: '#5f9ea0',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 4,
      },
      buttonText: {
        color: '#fff',
        fontSize: 30,
      }, text:{
        justifyContent: 'center',
        paddingBottom: 50,
        alignItems: 'center',
        color: '#fff',
        fontSize: 25,
      },
      text1:{
        justifyContent: 'center',
        alignItems: 'center',
        color: 'green',
        fontSize: 45,
        paddingBottom: 10,
      }
})