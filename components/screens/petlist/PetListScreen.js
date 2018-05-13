import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, Dimensions } from 'react-native';
import { StackNavigator } from 'react-navigation';

import { url } from '../../../config.js';

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
        zipCode: navigation.getParam('zipCode', null),
        animal: navigation.getParam('animal', null),
        age: navigation.getParam('age', null),
        gender: navigation.getParam('gender', null),
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
      .then( res => this.formatPet(res))
      .catch( err => console.error(err));
  }

  formatPet = (pets) => {

    var {width: w} = Dimensions.get('window');

    w -= 32;

    let pet, image;

    if (Array.isArray(pets)) {
      pet = pets[1];
    }

    let jsx = (
      <View>
        <Text>Name: {pet.name}</Text>
        <Image source={{uri: pet.images[0]}} style={{ flex: 1, width: w, height: w}} resizeMode="cover"/>
        <Text>{pet.description}</Text>
        <Text>{pet.contact.city}, {pet.contact.state}</Text>
        <Text>{pet.animal}</Text>
        <Text>Mix: {pet.mix}</Text>
      </View>
    );

    this.setState({pet: jsx});
  }

  componentWillUnmount = () => {
    this.setState({pet: null});
  }

  render() {

    return (
      <View style={styles.container}>
      { !!this.state.pet &&
        <View style={{margin: 16}}>{this.state.pet}</View>
      }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
});