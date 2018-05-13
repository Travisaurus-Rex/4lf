import React from 'react';
import { Icon } from 'react-native-elements';

export const LocationDetect = (props) => {
	return (
		<Icon
	      name='my-location'
	      type='MaterialIcons'
	      color='#23d69d'
	      containerStyle={{
	        backgroundColor: '#fff',
	        padding: 8,
	        borderRadius: 25
	      }}
	      onPress={() => alert('Are you sure you want to detect your location?')}
	    />
	)
}