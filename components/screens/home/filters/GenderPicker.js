import React from 'react';
import { View, StyleSheet } from 'react-native';
import { CheckBox } from 'react-native-elements';

export const GenderPicker = (props) => {

	checkCurrentSelection = (val) => {
		if (props.gender === val) {
			props.select('none');
		} else {
			props.select(val);
		}
	}

	return (
		<View style={{flexDirection: 'row', justifyContent: 'center'}}>
			<CheckBox 
				iconType="material"
				containerStyle={styles.checkboxContainer}
				uncheckedIcon="radio-button-unchecked"
				checkedIcon="radio-button-checked"
				uncheckedColor="#fff"
				checkedColor="#fff"
				checked={props.gender == 'male' ? true : false}
				onPress={() => checkCurrentSelection('male')}
				textStyle={{color: '#fff'}}
				title="Male"
			/>
			<CheckBox 
				iconType="material"
				containerStyle={styles.checkboxContainer}
				uncheckedIcon="radio-button-unchecked"
				checkedIcon="radio-button-checked"
				uncheckedColor="#fff"
				checkedColor="#fff"
				checked={props.gender == 'female' ? true : false}
				onPress={() => checkCurrentSelection('female')}
				textStyle={{color: '#fff'}}
				title="Female"
			/>
		</View>
	)

}

const styles = StyleSheet.create({
	checkboxContainer: {
		backgroundColor: 'transparent',
		borderWidth: 0
	}
})