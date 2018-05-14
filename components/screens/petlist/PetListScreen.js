import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import { url } from '../../../config.js';

import { PetList } from './PetList.js';

export default class PetListScreen extends React.Component {

  static navigationOptions = ({navigation}) => {

    const { params } = navigation.state;

    return {
      title: params ? `Pets in ${params.zipCode}` : 'Pet Search',
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#23d69d'
      }
    }
  }

  constructor(props) {
    super(props);
    
    this.state = {};
  }

  componentDidMount = () => {

    let { navigation } = this.props;

    let data = {
        zipCode: navigation.getParam('zipCode', ''),
        animal:  navigation.getParam('animal', ''),
        age:     navigation.getParam('age', ''),
        gender:  navigation.getParam('gender', ''),
    };

    fetch(`${url}/pet/find`, {
      method: 'post',
      body: JSON.stringify(data),
      mode: 'cors',
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
    }).then( res => res.json() )
      .then( res => this.setState( {pets: res} ) )
      .catch( err => console.error( err ) );
  }

  componentWillUnmount = () => {
    this.setState({pet: null});
  }

  render() {

    return (
      <View style={styles.container}>
      { !!this.state.pets &&
        <PetList pets={ this.state.pets }></PetList>
      }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});