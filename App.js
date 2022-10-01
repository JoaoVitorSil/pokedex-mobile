import { useEffect, useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View,FlatList, Image } from 'react-native';
import { getPokemons, searchPokemon, getPokemonData } from './api';

export default function App() {
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const itensPerPage = 15;
  const fetchPokemons = async ()=>{
    try{
      setLoading(true)
      const data = await getPokemons(itensPerPage, itensPerPage * page);
      const promises = data.results.map(async (pokemon) => {
        await getPokemonData('https://pokeapi.co/api/v2/language/13/')
        return await getPokemonData(pokemon.url);
      });
      const results = await Promise.all(promises)
      setPokemons(results)
      setLoading(false);
      setTotalPages(Math.ceil(data.count / itensPerPage));
    }
    catch(error){
      console.log("fetchPokemons error:", error)
    }
  }

  const setPreviousPage = ()=>{
    if(page > 0) {
      setPage(page-1)
  }
  }

  const setNextPage = ()=>{
    if(page+1 !== totalPages){
      setPage(page+1)
    }
  }
  useEffect(()=>{
    fetchPokemons();
  },[page])
  
  const renderItem = ({ item }) => {
    let imgUrI = item['sprites']['versions']['generation-v']['black-white']['animated']['front_default']
    return(
    <Pokemon
        name={item.name}
        srcImg={imgUrI}
    /> 
  );}
  
  return (
    <View style={styles.container}>
      
      
       
      <FlatList
        data={pokemons}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <Button 
      onPress={setNextPage}
      title="Proxima"></Button>
      <Button 
      onPress={setPreviousPage}
      title="Voltar"></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
