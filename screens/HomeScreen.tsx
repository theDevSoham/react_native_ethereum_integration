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
  Alert,
} from 'react-native';
import React from 'react';
import eth_bg from '../assets/images/eth_bg.jpg';
import Overlay from '../components/Overlay';

const HomeScreen = () => {
  const [amount, setAmount] = React.useState<number>(0);
  const [address, setAddress] = React.useState<string>('');

  const changeText: any = (text: string) => {
    if (isNaN(Number(text))) {
      Alert.alert('Error', 'Please enter number');
      return;
    }
    setAmount(Number(text));
  };

  const changeAddr: any = (text: string) => {
    setAddress(text);
  };

  const sumbitTxt: Function = () => {
    if (amount === 0 || address === '') {
      Alert.alert('Error', 'Please enter amount and address');
      return;
    }
    console.log(amount, address);
  };

  const clear: Function = () => {
    setAmount(0);
    setAddress('');
  };

  return (
    <ImageBackground source={eth_bg} style={styles.container}>
      <Overlay opacity={0.6} />
      <KeyboardAvoidingView style={styles.contentContainer}>
        <View style={styles.formBox}>
          <TextInput
            placeholder="Enter amount"
            placeholderTextColor="#AEAEAE"
            value={amount.toString()}
            style={styles.inputTxt}
            keyboardType="numeric"
            onChangeText={changeText}
          />
          <TextInput
            placeholder="Enter address to send to"
            placeholderTextColor="#AEAEAE"
            value={address}
            style={styles.inputTxt}
            onChangeText={changeAddr}
          />

          <View style={styles.btnCont}>
            <TouchableOpacity style={styles.btn} onPress={() => clear()}>
              <Text style={styles.btnTxt}>Clear</Text>
            </TouchableOpacity>
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
    borderColor: '#1ed97c',
    borderWidth: 2,
    paddingHorizontal: 10,
    marginVertical: '5%',
    fontFamily: 'MerriweatherSans-Medium',
    color: '#000',
  },

  formBox: {
    width: '80%',
    height: '50%',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 10,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  btnCont: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginVertical: '10%',
  },

  btn: {
    width: '40%',
    height: '100%',
    backgroundColor: '#1ed97c',
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
