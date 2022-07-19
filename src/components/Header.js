import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Colors from '../constant/Colors';
import {scale} from 'react-native-size-matters';

const Header = () => {
  return (
    <View style={styles.headerText}>
      <Text style={styles.headerTextStyle}>Entry Order</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerTextStyle: {
    color: Colors.darkBlue,
    fontSize: scale(28),
    lineHeight: scale(48),
    fontFamily: 'Poppins-Medium',
  },
});
