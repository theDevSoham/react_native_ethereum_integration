/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable eol-last */

import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import eth_bg from '../assets/images/eth_bg.jpg';
import {useNavigation} from '@react-navigation/native';
import Overlay from '../components/Overlay';

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 2000);
  }, []);

  return (
    <ImageBackground source={eth_bg} style={styles.container}>
      <View style={styles.textCont}>
		<Text style={styles.tagTxt}>React Native {'\n'} x {'\n'} Ethereum</Text>
	  </View>
	  <Overlay opacity={0.6} />
    </ImageBackground>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textCont: {
	justifyContent: 'center', 
	alignItems: 'center',
	position: 'absolute',
	width: '100%',
	height: '100%',
	zIndex: 2,
  },
  tagTxt: {
	fontSize: 50,
	color: 'white',
	fontFamily: 'MerriweatherSans-Bold',
	textAlign: 'center',
  },
});
