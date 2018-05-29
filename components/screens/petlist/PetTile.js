import React from 'react';
import { TouchableOpacity, ImageBackground } from 'react-native';

export const PetTile = (props) => {

	let image;
	let { children: i } = props; 

	if (props.image) {
		image = { uri: props.image};

	} else {
		image = require('../../../assets/images/no_pic.png');
	}	

	return (
		<TouchableOpacity
			style={{marginBottom: props.space * 2}}
			onPress={() => props.clickAnimal(i)}
			>
			<ImageBackground style={{ 
				backgroundColor: '#CCC', 
				width: props.size, 
				height: props.size,
			}}
				source={image}
			>
			</ImageBackground>
		</TouchableOpacity>
	)
}