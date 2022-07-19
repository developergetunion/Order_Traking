import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Colors from '../../constant/Colors';
import {scale} from 'react-native-size-matters';
import UserInfo from '../../components/UserInfo';

const Delivered = () => {
  return (
    <View style={styles.container}>
      <View style={styles.pendingScreenSection}>
        <Text style={styles.recentTextStyle}>Recent</Text>
        <View>
          <UserInfo />
          <UserInfo />
        </View>
      </View>
    </View>
  );
};

export default Delivered;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.backgroundColor,
    flex: 1,
  },
  pendingScreenSection: {
    marginHorizontal: 15,
    marginTop: 20,
  },
  recentTextStyle: {
    fontSize: 22,
    lineHeight: scale(33),
    letterSpacing: scale(0.5),
    color: Colors.darkBlue,
    fontFamily: 'Poppins-Medium',
  },
});
