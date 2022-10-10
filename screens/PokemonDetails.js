import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, ScrollView} from "react-native";
import { searchPokemon } from "../api";
import { colorType } from "../styles/colors";
import { cardColorType } from "../styles/colors";

export default function PokemonDetails({ route }) {
  const {id, name, types, abilities, height, weight, stats} = route.params;
  const [pokemon, setPokemon] = useState({});
  const fetchPokemon = async () => {
    try {
      const data = await searchPokemon(id);
      setPokemon(data);
    } catch (error) {
      console.log("fetchPokemons error:", error);
    }
  };
  useEffect(() => {  
    fetchPokemon();
  }, []);

  let imgUri = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`

  const nameUppercase = name.charAt(0).toUpperCase() + name.slice(1);

  var abilit = "";
  abilities.map((item, index) => {
    abilit += `${item.ability.name.charAt(0).toUpperCase() + item.ability.name.slice(1)}${
      abilities.length == index + 1 ? "" : ", "
    }`;
  });

  return (
    <ScrollView style={colorType(types[0].type.name)}>
      <View style={styles.container}>
        <View style={styles.details}>
          <View style={[styles.card, cardColorType(types[0].type.name)]}>
            <Text style={styles.name}>{nameUppercase}</Text>
            <Text style={styles.id}>#{id}</Text>
            <Image style={styles.image} source={{ uri: imgUri }}/>
            <View style={styles.tipoPokemon}>
              {types.map((type, index) => {
                const typeUppercase = type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1);
                return <Text style={[styles.tipo, colorType(type.type.name)]}>{typeUppercase}</Text>;
              })}
            </View>
          </View>
          
          <View style={styles.features}>

            <Text style={styles.detailTitle}>Heigth</Text>
            <Text style={styles.detail}>{height/10} m </Text>

            <Text style={styles.detailTitle}>Weight</Text>
            <Text style={styles.detail}>{weight/10} kg </Text>

            <Text style={styles.detailTitle}>Abilities</Text>
            <Text style={styles.detail}>{abilit}</Text>
          </View>
        </View>
        <View style={styles.stats}>
          <Text style={styles.statsTitle}>Stats</Text>
            {stats.map((item, index) => {
                const typeUppercase = item.stat.name.charAt(0).toUpperCase() + item.stat.name.slice(1);
                return (<Text style={styles.stat}>{typeUppercase}: {item['base_stat']}</Text>);
            })}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center"
  },
  details: {
    marginTop: 30,
    width: "95%",
    backgroundColor: "#333333",
    borderRadius: 25,
    alignItems: "center",
    paddingBottom: 20,
    marginBottom: 10,
  },
  card: {
    backgroundColor: "grey",
    marginTop: 40,
    width: "80%",
    alignItems: "center",
    paddingBottom: 20,
    borderRadius: 25
  },
  name: {
    marginTop: 20,
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
  id: {
    marginTop: 5,
    fontSize: 30,
    color: "white",
  },
  image: {
    height: 120,
    width: 120,
    marginTop: 25, 
  },
  features:{
    width: "80%",
    padding: 10
  },
  detail:{
    fontSize: 25,
    color: 'white',
    fontWeight:'bold',
  }, 
  detailTitle:{
    fontSize: 15,
    color: 'white',
    marginTop: 20,
  }, 
  tipoPokemon: {
    height: 100,
    flexDirection: "row",
    alignItems:'center',
  },
  tipo: {
    color: 'white',
    fontSize: 25,
    fontWeight: "bold",
    margin: 10,
    padding: 10,
    borderRadius: 10,
  },
  stats: {
    backgroundColor: "#333333",
    width: '95%',
    borderRadius: 25,
    padding: 10,
    paddingBottom: 30,
    marginBottom: 30,
  },
  statsTitle: {
    fontSize: 30,
    color: 'white',
    alignSelf: 'center',
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 15,
    marginTop: 10,

  },
  stat: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 10,
    marginLeft: 40,
  }
});
