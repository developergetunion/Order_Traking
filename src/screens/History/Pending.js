import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Colors from '../../constant/Colors';
import {scale} from 'react-native-size-matters';
import UserInfo from '../../components/UserInfo';
import {ScrollView} from 'react-native-gesture-handler';

const PendingScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.pendingScreenSection}>
        <Text style={styles.recentTextStyle}>Recent</Text>
        <ScrollView>
          <View>
            <UserInfo />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default PendingScreen;

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
