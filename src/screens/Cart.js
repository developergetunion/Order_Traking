import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Colors from '../constant/Colors';
import {moderateScale} from 'react-native-size-matters';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import CartCard from '../components/CartCard';
import AddItemsButton from '../components/AddItemsButton';
import Discount from '../components/Discount';
import CheckoutCard from '../components/CheckoutCard';
import {useNavigation} from '@react-navigation/native';

const Cart = () => {
  navigation = useNavigation();
  const addItemsButton = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.conatiner}>
      <View style={styles.cartPage}>
        <View>
          <Header />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.cartCardStyle}>
            <CartCard />
          </View>
          <View>
            <AddItemsButton addItemsButton={addItemsButton} />
          </View>
          <View style={styles.discountStyle}>
            <Discount />
          </View>
        </ScrollView>
      </View>
      <View style={styles.checkoutStyle}>
        <CheckoutCard />
      </View>
    </View>
  );
};

export default Cart;
const styles = StyleSheet.create({
  conatiner: {
    backgroundColor: Colors.backgroundColor,
    flex: 1,
  },
  cartPage: {
    marginHorizontal: moderateScale(15),
    flex: 1,
    paddingBottom: 30,
  },
  checkoutStyle: {
    // position: 'absolute',
    flex: 0.4,
    // paddingHorizontal: moderateScale(10),
    marginHorizontal: 10,
  },
  discountStyle: {
    marginVertical: moderateScale(10),
  },
  cartCardStyle: {
    marginBottom: moderateScale(10),
  },
});
