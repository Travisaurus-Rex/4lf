import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { ButtonGroup } from 'react-native-elements';

export const AnimalPicker = (props) => {

	const buttons = ['Any', 'Dog', 'Cat', 'Bird', 'Other'];

	return (
		<View style={styles.view}>
			<Text style={styles.label}>Type of animal</Text>
			<ButtonGroup
				innerBorderStyle={{ color: '#fff', width: 1 }}
				onPress={selectedIndex => props.update(selectedIndex, buttons[selectedIndex])}
				selectedIndex={props.selected}
				buttons={buttons}
				containerStyle={styles.container}
				textStyle={styles.text}
				selectedTextStyle={{color: '#23d69d'}}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	view: {
		marginBottom: 24,
	},
	label: {
		alignSelf: 'flex-start',
		color: '#fff',
		paddingLeft: 10
	},
	container: { 
		backgroundColor: 'transparent'
	},
	text: {
		color: "#fff", 
		fontSize: 12
	},
	border: {
		color: '#fff',
		width: 1
	}
})