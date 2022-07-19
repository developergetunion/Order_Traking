import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {moderateScale, scale} from 'react-native-size-matters';
import Colors from '../constant/Colors';
const Buttons = ({name, bg, color, onPressButton = () => {}}) => {
  return (
    <View>
      <TouchableOpacity
        activeOpacity={0.6}
        style={[styles.button, {backgroundColor: bg}]}
        onPress={() => onPressButton()}>
        <Text style={[styles.buttonText, {color: color}]}>{name}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Buttons;

const styles = StyleSheet.create({
  button: {
    borderRadius: moderateScale(15),
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    textAlign: 'center',
    fontSize: scale(17),
    // lineHeight: scale(20),
    letterSpacing: scale(0.5),
    // color: Colors.darkBlue,
    fontFamily: 'Biryani-SemiBold',
  },
});
