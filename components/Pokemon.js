import React from 'react'
import { StyleSheet, View, Image, Text } from 'react-native';

export default function Pokemon(props) {
  const {name,srcImg,types} = props
  const nameUppercase = name.charAt(0).toUpperCase() + name.slice(1)
  return (
    <View style={styles.card}>
      <View style={styles.esquerda}>
        <Image style={styles.img} source={{uri: srcImg}} />
      </View>
      <View style={styles.direita}>
        <View style={styles.nomePokemon}>
          <Text style={styles.nome}>{nameUppercase}</Text>
        </View>
        <View style={styles.tipoPokemon}>
          {types.map((type, index) => {
                    const typeUppercase = type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)
                    return (
                     <Text style={styles.tipo}  >{typeUppercase}</Text>
                    )
                })}
          
          
        </View>
      </View>
    </View>
    
  )
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#f6f6f6',
    width: "95%",
    height: 120,
    borderRadius: 10,
    alignSelf: "center",
    marginTop: 15,
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
    marginLeft: 20,
  },
  tipoPokemon: {  
    height: '70%',
    flexDirection: 'row',
    alignItems: 'center'
  },
  tipo: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 5,
    marginLeft: 15,
    backgroundColor: 'yellow',
    padding: 10,
    borderRadius: 10
  }
});