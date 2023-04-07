/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable no-mixed-spaces-and-tabs */

import {
	ImageBackground, 
	StyleSheet, 
	Text, 
	View, 
	TextInput,
	TouchableOpacity,
	KeyboardAvoidingView,
} from 'react-native';
import React from 'react';
import eth_bg from '../assets/images/eth_bg.jpg';
import Overlay from '../components/Overlay';

const HomeScreen = () => {

	const sumbitTxt:Function = () => {
		console.log('Submitted');
	};

  return (
    <ImageBackground source={eth_bg} style={styles.container}>
      <Overlay opacity={0.6} />
      <KeyboardAvoidingView style={styles.contentContainer}>
        <View style={styles.formBox}>
          <TextInput
            placeholder="Enter amount"
            placeholderTextColor="#AEAEAE"
            style={styles.inputTxt}
			keyboardType='numeric'
          />
          <TextInput
            placeholder="Enter address to send to"
            placeholderTextColor="#AEAEAE"
            style={styles.inputTxt}
          />

          <View style={styles.btnCont}>
			<TouchableOpacity style={styles.btn} onPress={() => sumbitTxt()}>
				<Text style={styles.btnTxt}>Submit</Text>
			</TouchableOpacity>
		  </View>
        </View>
      </KeyboardAvoidingView>
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
    justifyContent: 'center',
    alignItems: 'center',
  },

  inputTxt: {
    width: '100%',
    height: 50,
    borderRadius: 10,
    backgroundColor: '#fff',
	borderColor: '#ace3a6',
	borderWidth: 1,
    paddingHorizontal: 10,
    marginVertical: '5%',
	fontFamily: 'MerriweatherSans-Medium',
	color: '#000',
  },

  formBox: {
    width: '80%',
    height: '50%',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 10,
    padding: 20,
	justifyContent: 'center',
	alignItems: 'center',
  },

  btnCont: {
	width: '100%',
	height: 50,
	justifyContent: 'center',
	alignItems: 'center',
	marginVertical: '10%',
  },

  btn: {
	width: '40%',
	height: '100%',
	backgroundColor: '#ace3a6',
	borderRadius: 10,
	justifyContent: 'center',
	alignItems: 'center',
  },

  btnTxt: {
	color: 'white',
	fontSize: 18,
	fontFamily: 'MerriweatherSans-Medium',
  },
});
