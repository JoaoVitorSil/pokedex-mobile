import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

export default function Logo() {
  return (
    <View style={styles.logo}>
        <Image style={styles.pokeball} source={require('../assets/images/pokeball.png')} />
        <Image style={styles.pokedex} source={require('../assets/images/pokedex.png')} />
    </View>
  )
}

const styles = StyleSheet.create({
    logo: {
        height: 90,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
        
    },
    pokeball: {
        width: 70,
        height: 70,
    },
    pokedex:{
        marginLeft: 10
    }
  });