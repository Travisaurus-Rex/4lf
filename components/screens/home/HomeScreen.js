import React from 'react';
import { 
  StyleSheet,
  Text, 
  View, 
  KeyboardAvoidingView, 
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { LinearGradient } from 'expo';

import { Logo } from '../../shared/Logo.js';
import { Location } from './Location.js';
import { SearchOrFilter } from './SearchOrFilter.js';

export default class HomeScreen extends React.Component {

  static navigationOptions = {
    headerTransparent: true
  };

  constructor(props) {
    super(props);
    this.state = { 
      zipCodeSubmitted: false,
      zipCode: 0,
      zipCodeValid: false
    };
  }

  setZipCode = (value) => {
    this.setState({ zipCode: value });
  }

  submitZipCode = () => {
    this.setState({ 
      zipCodeSubmitted: true
    });
    this.validateZipCode();
  }

  validateZipCode = () => {
    let { zipCode } = this.state;
    let length = zipCode.toString().length;

    if (length == 5) {
      this.setState({ zipCodeValid: true})
    } else {
      this.setState({ zipCodeValid: false})
    }
  }

  search = () => {
    this.props.navigation.navigate('PetList', { 
      zipCode: this.state.zipCode
    })
  }

  goToFiltersScreen = () => {
    this.props.navigation.navigate('Filters', {
      zipCode: this.state.zipCode
    })
  }


  render() {
    return(
      <LinearGradient
        start={[1, 0]}
        end={[0, 1]}
        colors={['#568AEB', '#56C3EB', '#23d69d', '#1DDB85']}
        style={{width: '100%', height: '100%'}}
      >
        <KeyboardAvoidingView 
          style={styles.container}
          behavior="padding"
        >
          <Logo size={{ width: 200, height: 200}} />
          <Text style={styles.text}>Enter a location to get started</Text>
          <Location setzip={this.setZipCode} submit={this.submitZipCode} />
          { !!this.state.zipCodeSubmitted && !this.state.zipCodeValid && 
            <Text style={{ color: '#fff', paddingTop: 24}}>The zip code you entered was not valid</Text>
          }
          { !!this.state.zipCodeValid &&
            <SearchOrFilter filters={this.goToFiltersScreen} search={this.search} />
          }
        </KeyboardAvoidingView>
      </LinearGradient>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  smallText: {
    fontSize: 12,
    color: '#fff'
  },
  text: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 36,
    fontWeight: '100'
  },
  bigText: {
    fontSize: 24,
    color: '#fff',
    fontWeight: '900'
  }
});