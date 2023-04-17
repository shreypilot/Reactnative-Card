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
import ActionCard from './components/ActionCard';
import ContactList from './components/ContactList';
function App(): JSX.Element {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text>App</Text>
        <FlatCards />
        <ElevatedCards />
        <FancyCard />
        <ActionCard />
        <ContactList />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
