import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

export default function Pokemon(props) {
  const { name, srcImg, types } = props;
  const nameUppercase = name.charAt(0).toUpperCase() + name.slice(1);

  const colorType = (type) => {
    switch (type) {
      case "normal":
        return { backgroundColor: "#a8a77a" };

      case "fire":
        return {
          backgroundColor: "#ee8130",
        };
      case "water":
        return {
          backgroundColor: "#6390f0",
        };
      case "electric":
        return {
          backgroundColor: "#f7d02c",
        };
      case "grass":
        return {
          backgroundColor: "#7ac74c",
        };
      case "ice":
        return {
          backgroundColor: "#96d9d6",
        };
      case "fighting":
        return {
          backgroundColor: "#c22e28",
        };
      case "poison":
        return {
          backgroundColor: "#a33ea1",
        };
      case "ground":
        return {
          backgroundColor: "#e2bf65",
        };
      case "flying":
        return {
          backgroundColor: "#a98ff3",
        };
      case "psychic":
        return {
          backgroundColor: "#f95587",
        };
      case "bug":
        return {
          backgroundColor: "#a6b91a",
        };
      case "rock":
        return {
          backgroundColor: "#b6a136",
        };
      case "ghost":
        return {
          backgroundColor: "#735797",
        };
      case "dragon":
        return {
          backgroundColor: "#6f35fc",
        };
      case "dark":
        return {
          backgroundColor: "#705746",
        };
      case "steel":
        return {
          backgroundColor: "#b7b7ce",
        };
      case "fairy":
        return {
          backgroundColor: "#d685ad",
        };
    }
  };
  return (
    <View style={[styles.card, colorType(types)]}>
      <View style={styles.esquerda}>
        <Image style={styles.img} source={{ uri: srcImg }} />
      </View>
      <View style={styles.direita}>
        <View style={styles.nomePokemon}>
          <Text style={styles.nome}>{nameUppercase}</Text>
        </View>
        <View style={styles.tipoPokemon}>
          {types.map((type, index) => {
            const typeUppercase =
              type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1);
            return <Text style={[styles.tipo, colorType(type.type.name)]}>{typeUppercase}</Text>;
          })}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "#f6f6f6",
    width: "95%",
    height: 120,
    borderRadius: 10,
    alignSelf: "center",
    marginTop: 15,
  },

  esquerda: {
    width: "30%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: 100,
    height: 100,
  },
  direita: {
    width: "70%",
    height: "100%",
  },
  nomePokemon: {
    height: "30%",
    justifyContent: "flex-end",
  },
  nome: {
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: 20,
  },
  tipoPokemon: {
    height: "70%",
    flexDirection: "row",
    alignItems: "center",
  },
  tipo: {
    color: 'white',
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 5,
    marginLeft: 15,
    backgroundColor: "yellow",
    padding: 10,
    borderRadius: 10,
  },
});
