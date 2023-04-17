/* eslint-disable no-trailing-spaces */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, ScrollView, Text} from 'react-native';
import FlatCards from './components/FlatCards';
import ElevatedCards from './components/ElevatedCards';
import FancyCard from './components/FancyCards';
function App(): JSX.Element {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text>App</Text>
        <FlatCards />
        <ElevatedCards />
        <FancyCard />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
