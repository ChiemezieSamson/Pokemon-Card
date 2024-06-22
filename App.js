import { Platform, SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import PoKemonCard from './src/components/PoKemonCard';
import pokemonProps from "./src/components/Data"

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {pokemonProps?.map(card => {
          return (
            <PoKemonCard key={card.id} {...card}/>
          )
        })}  
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    
    ...Platform.select({
      android: {
        paddingTop: 25
      },
      default: {
        paddingTop: 0
      }
    })
  },
});
