import React from 'react';
import { View, StyleSheet } from 'react-native';
import { CheckBox } from 'react-native-elements';

export const PetsOrShelters = ( props ) => {

	return (
		<View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 10}}>
      <CheckBox 
        iconType="material"
        iconRight={true}
        containerStyle={{
        	backgroundColor: 'transparent',
					borderWidth: 0,
					marginLeft: 30
        }}
        uncheckedIcon="radio-button-unchecked"
        checkedIcon="radio-button-checked"
        uncheckedColor="#fff"
        checkedColor="#fff"
        checked={ props.searchForPets ? true : false}
        onPress={ () => props.update(true) }
        textStyle={{color: '#fff'}}
        title="Pets"
      />
      <CheckBox 
        iconType="material"
        containerStyle={styles.checkboxContainer}
        uncheckedIcon="radio-button-unchecked"
        checkedIcon="radio-button-checked"
        uncheckedColor="#fff"
        checkedColor="#fff"
        checked={ !props.searchForPets ? true : false }
        onPress={ () => props.update(false) }
        textStyle={{color: '#fff'}}
        title="Shelters"
      />
    </View>
	)
}

const styles = StyleSheet.create({
	checkboxContainer: {
		backgroundColor: 'transparent',
		borderWidth: 0
	},
})