import React, { useState } from 'react'
import { View, Text } from 'react-native'
import {searchPokemon} from '../api'

export default function PokemonStats({ route, navigation }) {
  const {id} = route.params
  const [pokemon, setPokemon] = useState[{}]
  
  const fetchPokemon = async ()=>{
    try{
      const data = await searchPokemon(id)
      setPokemon(results)
    }
    catch(error){
      console.log("fetchPokemons error:", error)
    }
  }

  useEffect(()=>{
    fetchPokemon();
  },[])
  return (
    <View>
        <Text>{pokemon.name}</Text>
    </View>
  )
}
