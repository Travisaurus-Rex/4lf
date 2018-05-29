import React from 'react';
import { StackNavigator } from 'react-navigation';

import HomeScreen from './components/screens/home/HomeScreen.js';
import PetListScreen from './components/screens/petlist/PetListScreen.js';
import FiltersScreen from './components/screens/home/filters/FiltersScreen.js';
import PetInfoScreen from './components/screens/petinfo/PetInfoScreen.js';

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
    },
    PetInfo: {
      screen: PetInfoScreen
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
