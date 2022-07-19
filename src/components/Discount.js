import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Colors from '../constant/Colors';
import {moderateScale, scale} from 'react-native-size-matters';

const Discount = () => {
  return (
    <View style={styles.container}>
      <View style={styles.discountSection}>
        <Text style={styles.discountText}>Additional Discount %</Text>
        <Text style={styles.discountValue}>0%</Text>
      </View>
    </View>
  );
};

export default Discount;

const styles = StyleSheet.create({
  container: {},
  discountSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  discountText: {
    fontSize: scale(18),
    lineHeight: scale(24),
    letterSpacing: scale(0.5),
    color: Colors.darkBlue,
    fontFamily: 'Montserrat-Bold',
  },
  discountValue: {
    fontSize: scale(18),
    lineHeight: scale(24),
    letterSpacing: scale(0.5),
    color: Colors.darkBlue,
    fontFamily: 'Montserrat-Bold',
    paddingHorizontal: moderateScale(16),
    paddingVertical: moderateScale(3),
    shadowColor: Colors.boxShadow,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 2,
    // borderWidth: 0.5,
    borderColor: Colors.boxShadow,
    borderRadius: moderateScale(5),
    textAlign: 'center',
  },
});
