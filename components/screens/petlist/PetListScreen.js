import React from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  ActivityIndicator 
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { url } from '../../../config.js';
import { PetList } from './PetList.js';

export default class PetListScreen extends React.Component {

  static navigationOptions = ({navigation}) => {

    const { params } = navigation.state;

    let hTitle = '';

    if (params.animal && params.animal != 'Any') {
      hTitle = `${params.animal.charAt(0).toUpperCase() + params.animal.substring(1)}s in ${params.zipCode}`;
    } else {
      hTitle = `Pets in ${params.zipCode}`;
    }

    return {
      title: hTitle,
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#56C3EB'
      }
    }
  }

  constructor(props) {
    super(props);
    
    this.state = { loading: false };
  }

  componentDidMount = () => {

    let { navigation } = this.props;

    let data = {
        zipCode: navigation.getParam('zipCode', ''),
        animal:  navigation.getParam('animal', ''),
        age:     navigation.getParam('age', ''),
        size:     navigation.getParam('size', ''),
        gender:  navigation.getParam('gender', ''),
    };

    this.setState(data);
    this.setState({ loading: true })

    fetch(`${url}/pet/find`, {
      method: 'post',
      body: JSON.stringify(data),
      mode: 'cors',
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
    }).then( res => res.json() )
      .then( res => {
        if (Array.isArray(res.pets)) {
          this.setState({
            pets: res.pets,
            loading: false
          })
        } else {
          this.setState({ 
            error: 'No results found.',
            loading: false
          });
        }
      })
      .catch( err => this.setState({ error: 'Network error. Please try again.', loading: false}));

  }

  clickAnimal = (index) => {

    this.props.navigation.navigate('PetInfo', {
      selectedPet: this.state.pets[index]
    })

  }

  render() {

    return (
      <View style={styles.container}>
      { !!this.state.loading &&
        <ActivityIndicator size="large" color="#56C3EB" />
      }
      { !!this.state.pets &&
        <View>
          <PetList 
            pets={ this.state.pets }
            clickAnimal={this.clickAnimal}
          />

        </View>
      }
      { !!this.state.error &&
        <Text>{this.state.error}</Text>
      }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
});