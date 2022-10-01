import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';
import Pokemon from './components/Pokemon';

export default function App() {
  return (
    <View style={styles.container}>
        <StatusBar style='auto'/>
        <Pokemon/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    marginTop: Constants.statusBarHeight,
    alignItems: 'center',
  }
});

