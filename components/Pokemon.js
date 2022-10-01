import React from 'react'
import { StyleSheet, View, Image, Text } from 'react-native';

export default function Pokemon() {
  return (
    <View style={styles.card}>
      <View style={styles.esquerda}>
        <Image style={styles.img} source={require("../assets/images/pikachu.png")} />
      </View>
      <View style={styles.direita}>
        <View style={styles.nomePokemon}>
          <Text style={styles.nome}>Pikachu</Text>
        </View>
        <View style={styles.tipoPokemon}>
          <Text style={styles.tipo}>Elétrico</Text>
          <Text style={styles.tipo}>Elétrico</Text>
        </View>
      </View>
    </View>
    
  )
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    width: "95%",
    height: "20%",
    marginTop: 15,
    borderRadius: 10
  },

  esquerda: {
    width: "30%",
    height: "100%",
    alignItems: 'center',
    justifyContent: 'center', 
  },
  img: {
    width: 100,
    height: 100,
  },
  direita: {
    width: '70%',
    height: "100%",
    
  },
  nomePokemon: {
    height: "30%" ,
    justifyContent: 'flex-end'
  },
  nome: {
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 20
  },
  tipoPokemon: {  
    height: '70%',
    flexDirection: 'row',
    alignItems: 'center'
  },
  tipo: {
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 15,
    backgroundColor: 'yellow',
    padding: 10,
    borderRadius: 10
  }
});