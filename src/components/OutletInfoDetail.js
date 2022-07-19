import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Calender from '../assets/icons/Calender.svg';
import BackButton from '../assets/icons/BackButton.svg';
import ClockIcon from '../assets/icons/ClockIcon.svg';
import {moderateScale, scale} from 'react-native-size-matters';
import Colors from '../constant/Colors';

const OutletInfoDetail = () => {
  return (
    <View style={styles.container}>
      <View style={styles.detailsSection}>
        <View style={styles.header}>
          <TouchableOpacity>
            <BackButton />
          </TouchableOpacity>
          <Text style={styles.hederStyle}>Details</Text>
          <View></View>
        </View>
        <View style={styles.bottomWidthStyle}>
          <View style={styles.outletInfo}>
            <Text style={styles.companyName}>Gupta kirana Store</Text>
            <Text style={styles.phoneNo}>+91 9088435521</Text>
            <Text style={styles.address}>
              Cookdi para, Maharajband, Raipur, Chhattisgarh (492001)
            </Text>
            <View style={styles.dateAndTimeSection}>
              <View style={styles.calenderStyle}>
                <Calender />
                <Text style={styles.dateAndTimeTextStyle}>
                  Order date: 21-May-2022
                </Text>
              </View>
              <View style={styles.calenderStyle}>
                <ClockIcon />
                <Text style={styles.dateAndTimeTextStyle}>05 : 30 PM</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default OutletInfoDetail;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.backgroundColor,
  },
  detailsSection: {
    overflow: 'hidden',
  },
  hederStyle: {
    fontSize: 28,
    lineHeight: scale(42),
    letterSpacing: scale(0.5),
    color: Colors.darkBlue,
    fontFamily: 'Poppins-Medium',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: moderateScale(24),
    marginHorizontal: moderateScale(25),
  },
  companyName: {
    fontSize: 20,
    lineHeight: scale(24),
    letterSpacing: scale(0.5),
    color: Colors.darkBlue,
    fontFamily: 'Montserrat-Bold',
  },
  phoneNo: {
    fontSize: 16,
    lineHeight: scale(24),
    letterSpacing: scale(0.5),
    color: Colors.darkBlue,
    fontFamily: 'Montserrat-SemiBold',
    // marginVertical: 3,
  },
  address: {
    fontSize: 12,
    lineHeight: scale(18),
    letterSpacing: scale(0.5),
    color: Colors.darkBlue,
    fontFamily: 'Montserrat-Medium',
  },
  outletInfo: {
    marginTop: moderateScale(30),
    marginHorizontal: moderateScale(25),
    paddingLeft: moderateScale(12),
  },
  dateAndTimeSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: moderateScale(10),
  },
  dateAndTimeTextStyle: {
    fontSize: 12,
    lineHeight: scale(18),
    letterSpacing: scale(0.5),
    color: Colors.orange,
    fontFamily: 'Montserrat-Bold',
    marginLeft: moderateScale(11),
  },
  calenderStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bottomWidthStyle: {
    borderBottomWidth: 0.5,
    borderRadius: moderateScale(5),
    borderBottomColor: Colors.boxShadow,
    paddingBottom: moderateScale(15),
  },
});
