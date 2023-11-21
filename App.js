import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainScreen from './views/MainScreen';
import IntroScreen from './views/IntroScreen';

export default function App() {

  const [isLoaded,setIsLoaded] = useState(false);

  setTimeout(()=>{
    setIsLoaded(true);
  },900);               // logic to show the main page after 0.9 seconds.

  return (
    <View style={styles.container}>
      {isLoaded ? <MainScreen/> : <IntroScreen/>}
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
