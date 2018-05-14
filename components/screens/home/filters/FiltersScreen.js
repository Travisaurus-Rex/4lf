import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { StackNavigator } from 'react-navigation';
import { LinearGradient } from 'expo';

import { Logo } from '../../../shared/Logo.js';
import { AnimalPicker } from './AnimalPicker.js';
import { AgePicker } from './AgePicker.js';
import { GenderPicker } from './GenderPicker.js';
import { LocationInput } from '../LocationInput.js';

export default class FiltersScreen extends Component {

	static navigationOptions = {
		headerTransparent: true,
		title: 'Search Filters',
		headerTintColor: '#fff',
		headerStyle: {
			borderBottomWidth: 1,
			borderColor: '#fff',
			elevation: 0
		},
		headerRight: (
			<Logo size={{width: 35, height: 35, marginRight: 20}} />
		)
	}

	constructor(props) {
		super(props);

		let { navigation } = this.props;

		this.state = {
			animal: 'Any',
			animalIndex: 0,
			age: 'Any',
			ageIndex: 0,
			gender: 'none',
			zipCode: navigation.getParam('zipCode', null),
			zipCodeValid: true,
			zipCodeSubmitted: false,
		};

	}

	updateZipCode = (zipCode) => {
		this.setState({zipCode});
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

	updateAnimal = (index, animal) => {
		this.setState({ animalIndex: index, animal: animal.toLowerCase() })
	}

	updateAge = (index, age) => {
		this.setState({ageIndex: index, age })
	}

	updateGender = (gender) => {
		this.setState({ gender })
	}

	search = () => {

		let { animal, age, gender, zipCode } = this.state;

		if (animal === 'any' || animal === 'other') {
			animal = '';
		}

		if (age === 'Any') {
			age = ''
		}

		if (gender === 'none') {
			gender = ''
		}

		if (this.state.zipCode) {
			this.props.navigation.navigate('PetList', {
				zipCode: zipCode || '',
				animal: animal || '',
				age: age || '',
				gender: gender || ''
			})
		}
	}

	render() {

		return (
			<LinearGradient
        start={[1, 0]}
        end={[0, 1]}
        colors={['#568AEB', '#56C3EB', '#23d69d', '#1DDB85']}
        style={{width: '100%', height: '100%'}}
      >
				<View style={styles.container}>
					<View style={{alignSelf: 'center', marginBottom: 24}}>
						<LocationInput zipCode={this.state.zipCode} />
					</View>
					<AnimalPicker 
						selected={this.state.animalIndex} 
						update={this.updateAnimal} 
					/>
					<AgePicker 
						selected={this.state.ageIndex} 
						update={this.updateAge} 
					/>
					<GenderPicker
						gender={this.state.gender}
						select={this.updateGender}
					/>
				<View style={styles.buttonContainer}>
					<Button
					  rounded
					  iconRight={{name: 'times-circle', type: 'font-awesome'}}
					  textStyle={{fontWeight: "500"}}
					  buttonStyle={styles.cancelButton}
						title="CANCEL"					/>
					<Button
					  rounded
					  iconRight={{name: 'search', color: '#23d69d'}}
						textStyle={{color: "#23d69d", fontWeight: "500"}}
					  buttonStyle={styles.searchButton}
						title="SEARCH"
						onPress={this.search}
					/>
					</View>
				</View>
			</LinearGradient>
		)
	}

}

const styles = StyleSheet.create({
	container: {
		flex: 1, 
		marginTop: 100, 
		padding: 20,
		justifyContent: 'center',
		width: '100%'
	},
	buttonContainer: { 
		flexDirection: 'row',
		justifyContent: 'space-around', 
	},
	cancelButton: {
		width: 150,
		borderWidth: 1,
		borderColor: '#fff',
		backgroundColor: 'transparent',
	},
	searchButton: {
		width: 150,
		backgroundColor: '#fff',
	},
})