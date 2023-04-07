/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

interface Props {
	opacity?: number;
}

const Overlay:React.FC<Props> = ({opacity}) => {
  return(
	<View style={[styles.container, {
		opacity: opacity ? opacity : 0,
	}]} />
  );
};

export default Overlay;

const styles = StyleSheet.create({
	container: {
		position: 'absolute',
		width: '100%',
		height: '100%',
		backgroundColor: '#000',
		zIndex: 1,
	},
});