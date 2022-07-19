import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  Image,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Colors from '../constant/Colors';
import {moderateScale} from 'react-native-size-matters';
import Card from '../components/Card';
import SearchBar from '../components/SearchBar';
import Header from '../components/Header';
import SearchCard from '../components/SearchCard';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={Colors.backgroundColor}
        barStyle="dark-content"
      />
      <View style={styles.homePage}>
        <Header />
        <View>
          <SearchCard />
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,

    // backgroundColor: 'red',
  },
  homePage: {
    marginHorizontal: moderateScale(15),
    marginTop: moderateScale(25),
  },
});
