import React from 'react';
import NavigationScreen from './src/screens/NavigationScreen';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';

function App(): JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <NavigationScreen />
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
