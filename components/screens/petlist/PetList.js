import React from 'react';
import { ScrollView, StyleSheet, Dimensions } from 'react-native';
import { PetTile } from './PetTile.js';

let { width } = Dimensions.get('window');

export const PetList = ({ pets }) => {

	let space = 2;

	let w = width / 2 - space;


	let tiles = pets.map( (pet, i) => {
		return (
			<PetTile 
				key={i} 
				size={w} 
				image={pet.images[0]} 
				space={space}
			/>
		)
	} );

	return <ScrollView contentContainerStyle={styles.container}>{tiles}</ScrollView>;

}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		flexWrap: 'wrap',
	}
})