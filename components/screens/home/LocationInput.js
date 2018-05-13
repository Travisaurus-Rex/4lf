import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

export const LocationInput = (props) => {
	return (
		<TextInput
	      placeholder="ZIP CODE"
	      placeholderTextColor="#fff"
	      underlineColorAndroid="transparent"
	      keyboardType="numeric"
	      maxLength={5}
	      style={styles.input}
	      value={props.zipCode}
	      onChangeText={zipCode => props.setzip(zipCode)}
	      onSubmitEditing={props.submit}
	    />
	)
}

const styles = StyleSheet.create({
  input: {
    width: 150,
    height: 40,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 25,
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
    marginRight: 14,
  }
})