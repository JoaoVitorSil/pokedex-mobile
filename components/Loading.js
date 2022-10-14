import React from 'react'
import { Text, StyleSheet, View } from 'react-native';
export default function Loading() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Carregando ...</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  text: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
  }
});