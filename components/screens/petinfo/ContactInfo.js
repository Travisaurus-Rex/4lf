import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const ContactInfo = ({contact}) => {


	return(
		<View style={styles.container}>
			<Text style={styles.label}>
				Contact
			</Text>
			{ !!contact.phone &&
				<Text style={styles.text}>{contact.phone}</Text>
			}
			{ !!contact.address1 &&
				<Text style={styles.text}>{contact.address1}</Text>
			}
			{ !!contact.address2 &&
				<Text style={styles.text}>{contact.address2}</Text>
			}
			{ !!contact.city &&
				<Text style={styles.text}>{contact.city}, {contact.state} {contact.zip}</Text>
			}
			{ !!contact.email &&
				<Text style={styles.text}>{contact.email}</Text>
			}
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
		fontSize: 14
	}
})