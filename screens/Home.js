import { useEffect, useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, View,FlatList} from 'react-native';
import Constants from 'expo-constants'
import { getPokemons, getPokemonData } from '../api';
import Pokemon from '../components/Pokemon'
import Logo from "../styles/logo";
import Loading from "../components/Loading";

export default function Home({navigation}) {
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
    //let imgUri = item['sprites']['versions']['generation-v']['black-white']['animated']['front_default']
    let imgUri = item['sprites']['front_default']
    return(
    <Pokemon
        navigation = {navigation}
        id = {item.id}
        name={item.name}
        srcImg={imgUri}
        types = {item.types}
        abilities = {item.abilities}
        height = {item.height}
        weight = {item.weight}
        stats= {item.stats}
    /> 
  );}
  
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Logo/>
      {loading ? (<Loading/>) : 
      
      (<FlatList
        data={pokemons}
        renderItem={renderItem}
        keyExtractor = {item => item.id}
        showsVerticalScrollIndicator={false}
      />)}
      
      <View style={styles.buttons}>
        <Button 
          onPress={setPreviousPage}
          title="Voltar">
        </Button>
        <Button 
          onPress={setNextPage}
          title="Proxima">
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#333333',
    marginTop: Constants.statusBarHeight,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingTop: 10,
    marginBottom: 10,
  }
});
