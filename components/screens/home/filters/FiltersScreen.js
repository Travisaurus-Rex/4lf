import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { StackNavigator } from 'react-navigation';
import { LinearGradient } from 'expo';

import { Logo } from '../../../shared/Logo.js';
import { AnimalPicker } from './AnimalPicker.js';
import { AgePicker } from './AgePicker.js';
import { SizePicker }from './SizePicker.js';
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
		}
	}

	constructor(props) {
		super(props);

		let { navigation } = this.props;

		this.state = {
			animal: 'any',
			animalIndex: 0,
			age: 'Any',
			ageIndex: 0,
			size: 'Any',
			sizeIndex: 0,
			gender: 'none',
			zipCode: navigation.getParam('zipCode', null),
			zipCodeValid: true,
			zipCodeSubmitted: false,
		};

	}

	updateZipCode = (zipCode) => {
		this.setState({zipCode});
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

	updateSize = (index, size) => {
		this.setState({sizeIndex: index, size})
	}

	updateGender = (gender) => {
		this.setState({ gender })
	}

	search = () => {

		let { animal, age, size, gender, zipCode } = this.state;

		if (animal === 'any' || animal === 'Any') {
			animal = '';
		}

		if (age === 'any' || age === 'Any') {
			age = ''
		}

		if (size === 'any' || size === 'Any') {
			size = '';
		}

		if (gender === 'none') {
			gender = ''
		}

		if (this.state.zipCodeValid) {
			this.props.navigation.navigate('PetList', {
				zipCode: zipCode || '',
				animal: animal || '',
				age: age || '',
				size: size || '',
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
						<LocationInput setzip={this.updateZipCode} submit={this.validateZipCode} zipCode={this.state.zipCode} />
					</View>
					<AnimalPicker 
						selected={this.state.animalIndex} 
						update={this.updateAnimal} 
					/>
					<AgePicker 
						selected={this.state.ageIndex} 
						update={this.updateAge} 
					/>
					<SizePicker
						selected={this.state.sizeIndex}
						update={this.updateSize}
					/>
					<GenderPicker
						gender={this.state.gender}
						select={this.updateGender}
					/>
				<View style={styles.buttonContainer}>
					<Button
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
	searchButton: {
		marginTop: 24,
		width: 300,
		backgroundColor: '#fff',
	},
})