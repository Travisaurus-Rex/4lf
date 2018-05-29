import React from 'react';
import { View, StyleSheet } from 'react-native';
import { LocationInput } from './LocationInput.js';
import { LocationDetect } from './LocationDetect.js';

export const Location = (props) => {
	return (
		<View style={styles.columnContainer}>
			<LocationInput 
				{...props}
			/>
    </View>
	)
} 

const styles = StyleSheet.create({
	columnContainer: {
    display: 'flex', 
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center', 
    justifyContent: 'center', 
  },
})