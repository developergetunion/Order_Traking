import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {moderateScale, scale} from 'react-native-size-matters';
import UserInfo from '../../components/UserInfo';
import Colors from '../../constant/Colors';
import TopBarNavigation from '../../navigations/TopBarNavigation';

const HistoryScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.historySection}>
        <Text style={styles.hedText}>History</Text>
        <View style={styles.topNav}>
          <TouchableOpacity style={styles.boxStye}>
            <Text style={styles.textStyle}>Pending</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.boxStye2}>
            <Text style={styles.textStyle2}>Delivered</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.boxStye3}>
            <Text style={styles.textStyle2}>Cancelled</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.recentTextStyle}>Recent</Text>
        </View>
        <View>
        </View>
      </View>
    </View>
  );
};

export default HistoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },
  historySection: {
    // marginHorizontal: moderateScale(15),
    marginTop: moderateScale(25),
    paddingHorizontal: 15,
  },
  hedText: {
    fontSize: 28,
    lineHeight: scale(42),
    letterSpacing: scale(0.5),
    color: Colors.darkBlue,
    fontFamily: 'Poppins-Medium',
    marginBottom: moderateScale(10),
  },
  boxStye: {
    paddingHorizontal: moderateScale(30),
    paddingVertical: moderateScale(13),
    backgroundColor: Colors.darkBlue,
    borderRadius: 10,
  },
  textStyle: {
    fontSize: 15,
    lineHeight: scale(24),
    letterSpacing: scale(0.5),
    color: Colors.white,
    fontFamily: 'Poppins-SemiBold',
  },
  boxStye2: {
    paddingHorizontal: moderateScale(30),
    paddingVertical: moderateScale(13),
    // backgroundColor: Colors.white40,
    borderRadius: 10,
  },
  boxStye3: {
    paddingVertical: moderateScale(13),
    // backgroundColor: Colors.white40,
    borderRadius: 10,
  },
  textStyle2: {
    fontSize: 15,
    lineHeight: scale(24),
    letterSpacing: scale(0.5),
    color: Colors.darkBlue,
    fontFamily: 'Poppins-SemiBold',
  },
  topNav: {
    flexDirection: 'row',
    backgroundColor: Colors.white40,
    borderRadius: 10,
    marginVertical: moderateScale(20),
    // justifyContent: 'space-around',
  },
  recentTextStyle: {
    fontSize: 22,
    lineHeight: scale(33),
    letterSpacing: scale(0.5),
    color: Colors.darkBlue,
    fontFamily: 'Poppins-Medium',
  },
});
