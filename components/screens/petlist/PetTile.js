import React from 'react';
import { ImageBackground } from 'react-native';
export const PetTile = (props) => {
	return (
		<ImageBackground style={{ 
			backgroundColor: '#CCC', 
			width: props.size, 
			height: props.size,
			marginBottom: props.space * 2,
		}}
			source={{
				uri: props.image
			}}>
		</ImageBackground>
	)
}