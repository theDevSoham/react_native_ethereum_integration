/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable no-mixed-spaces-and-tabs */

import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import eth_bg from '../assets/images/eth_bg.jpg';
import Overlay from '../components/Overlay';

const HomeScreen = () => {
  return (
	<ImageBackground source={eth_bg} style={styles.container}>
		<Overlay opacity={0.6} />
		<View style={styles.contentContainer}></View>
	</ImageBackground>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},

	contentContainer: {
		position: 'absolute',
		width: '100%',
		height: '100%',
		zIndex: 2,
	},
});