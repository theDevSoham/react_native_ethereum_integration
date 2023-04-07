/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Loader = () => {
  return (
	<View style={styles.container}>
		<Text style={styles.text}>Loading...</Text>
	</View>
  );
};

export default Loader;

const styles = StyleSheet.create({
	container: {
		position: 'absolute',
		width: '100%',
		height: '100%',
		backgroundColor: 'rgba(255, 255, 255, 0.7)',
		zIndex: 3,
		justifyContent: 'center',
		alignItems: 'center',
	},

	text: {
		fontSize: 20,
		color: '#000',
		fontFamily: 'MerriweatherSans-Bold',
	},
});
