import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Text, Dimensions, Image } from 'react-native';
import { Avatar, Icon } from 'react-native-elements';
import { StackNavigator } from 'react-navigation';
import { LinearGradient } from 'expo';
import { TextGroup } from './TextGroup.js';
import { ContactInfo } from './ContactInfo.js';

export default class PetInfoScreen extends Component {

	static navigationOptions = {
		title: 'Search Results',
    headerTransparent: true,
    headerTintColor: 'transparent'
  };

	constructor(props) {
		super(props);

		this.state = {
			animal: this.props.navigation.getParam('selectedPet', null)
		};
	}

	capitalize = ( text ) => {
		return text.substring(0,1).toUpperCase() + text.substring(1).toLowerCase();
	}

	componentDidMount() {
		let { breeds, options } = this.state.animal;

		this.formatBreeds(breeds);
		this.formatOptions(options);
	}

	formatBreeds = breeds => {

		let breedText = '';

		if (Array.isArray(breeds) && breeds.length > 1) {
			breeds.forEach((breed, index) => {
				if (index + 1 === breeds.length) {
					breedText += breed;
				} else {
					breedText += breed + ', ';
				}
			})

			this.setState({ breeds: breedText });
		} else {
			this.setState({ breeds });
		}
	}

	formatOptions = options => {
		
		let optionsText = '';

		if (Array.isArray(options)) {
			options.forEach((opt, i) => {
				if (i === options.length - 1) {
					optionsText += opt;
				} else {
					optionsText += opt + ', ';
				}
			})
		}

		this.setState({ options: optionsText})

	}

	render() {

		let { width: w } = Dimensions.get('window');
		let { animal } = this.state;

		return (
			<ScrollView contentContainerStyle={styles.container}>
				<LinearGradient
	        start={[1, 0]}
	        end={[0, 1]}
	        colors={['#568AEB', '#56C3EB', '#23d69d', '#1DDB85']}
	        style={{ alignItems: 'center', width: w, paddingTop: 40, paddingBottom: 20}}
	      >
	   
					<Avatar
						source={{
							uri: animal.images[0]
						}}
						xlarge
						rounded
					/>
					<View style={styles.horizontal}>
						<Text style={styles.name}>{this.capitalize(animal.name)}</Text>
						<Icon 
								type="font-awesome"
								name={animal.sex === 'M' ? 'mars' : 'venus'}
								color="#23d69d"
								raised={true}
								size={20}
								containerStyle={{
									backgroundColor: '#fff',
									width: 36,
									height: 36,
									borderRadius: 18
								}}
							/>
					</View>
					<Text style={styles.breeds}>{this.state.breeds}</Text>
				</LinearGradient>
				<View style={styles.infoContainer}>
				{ !!animal.contact &&
					<ContactInfo contact={animal.contact} />
				}
				{ !!this.state.options &&
					<TextGroup label="Info">
						{this.state.options}
					</TextGroup>
				}
				{ !!animal.description &&
					<TextGroup label="Description">
						{animal.description}
					</TextGroup>
				}
				</View>
			</ScrollView>
		)
	}
}

const space = 10;

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
	},
	horizontal: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		flexWrap: 'wrap'
	},
	name: {
		fontSize: 30,
		color: '#fff'
	},
	breeds: {
		color: '#fff'
	},
	infoContainer: {
		width: '100%',
		alignItems: 'flex-start',
		padding: 20
	}
})