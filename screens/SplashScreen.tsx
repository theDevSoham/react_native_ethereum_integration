/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable no-mixed-spaces-and-tabs */

import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import eth_bg from '../assets/images/eth_bg.jpg';

const SplashScreen = () => {
  return (
	<ImageBackground source={eth_bg} style={styles.container} />
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});