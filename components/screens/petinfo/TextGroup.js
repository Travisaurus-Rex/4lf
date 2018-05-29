import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const TextGroup = ( props ) => {

	return (
		<View style={styles.container}>
			<Text style={styles.label}>{props.label}</Text>
			<Text style={styles.text}>{props.children || 'Not provided.'}</Text>
		</View>
	)

}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		justifyContent: 'flex-start',
		marginBottom: 10
	},
	label: {
		color: '#B8B8B8',
		fontSize: 12
	},
	text: {
		fontSize: 18
	}
})