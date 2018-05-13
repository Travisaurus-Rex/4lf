import React from 'react';
import { StackNavigator } from 'react-navigation';

import HomeScreen from './components/screens/home/HomeScreen.js';
import PetListScreen from './components/screens/petlist/PetListScreen.js';
import FiltersScreen from './components/screens/home/filters/FiltersScreen.js';

const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    PetList: {
      screen: PetListScreen,
    },
    Filters: {
      screen: FiltersScreen
    }
  }, 
  {
      initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
