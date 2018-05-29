import React from 'react';
import { ScrollView, StyleSheet, Dimensions } from 'react-native';
import { PetTile } from './PetTile.js';

export const PetList = ( props ) => {

	let { width } = Dimensions.get('window');
	let space     = 2;
	let w         = width / 2 - space;

	let tiles = props.pets.map((item, index) => {

		if (item.images.length > 0) {
			return (
				<PetTile 
					key={item.key}
					size={w} 
					image={item.images[0]} 
					space={space}
					clickAnimal={props.clickAnimal}
				>
					{index}
				</PetTile>
			)
		}
	});

	return (
		<ScrollView 
			contentContainerStyle={styles.container}
		>
			{tiles}
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		flexWrap: 'wrap'
	}
})