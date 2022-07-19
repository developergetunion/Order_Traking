import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import Currency from '../assets/icons/Currency.svg';
import Colors from '../constant/Colors';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import Buttons from './Buttons';
import {useNavigation} from '@react-navigation/native';
import {connect, useDispatch} from 'react-redux';
import {createUserStart} from '../redux/productList/action';

const CheckoutCard = ({cart}) => {
  const dispatch = useDispatch();
  navigation = useNavigation();
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    let price = 0;
    let items = 0;

    cart.forEach(item => {
      (items += item.qty), (price += items * item.price);
    });
    setTotalPrice(price);
    setTotalItems(items);
  }, [cart, totalItems, totalPrice, setTotalItems, setTotalPrice]);

  let discount = 20;
  let allIncPrice = totalPrice - discount;
  // const onPressButton = () => {
  //   navigation.navigate('UserDetailForm');
  // };
  // const addOrderData = JSON.stringify(cart);
  // const items = [addOrderData];
  const onPressButton = () => {
    // e.preventDefault();
    // console.log('this is add data ----------------->', items);
    navigation.navigate('UserDetailForm');
  };
  return (
    <View style={styles.conatiner}>
      <View style={styles.checkoutCardSection}>
        <View style={styles.leftRightSection}>
          <Text style={styles.leftStyle}>Total MRP</Text>
          <View style={styles.rightIconWithText}>
            <Currency style={styles.currencyIcon} />
            <Text style={styles.rightTextStyle}> {totalPrice}</Text>
          </View>
        </View>
        <View style={styles.leftRightSection}>
          <Text style={styles.leftStyle2}>Discount</Text>
          <View style={styles.rightIconWithText}>
            <Currency style={styles.currencyIcon} />
            <Text style={styles.rightTextStyle2}> {discount}.00</Text>
          </View>
        </View>
        <View style={styles.leftRightSection}>
          <Text style={styles.leftStyle3}>Additional Discount</Text>
          <View style={styles.rightIconWithText}>
            <Currency style={styles.currencyIcon} />
            <Text style={styles.rightTextStyle3}> 0.00</Text>
          </View>
        </View>
        <View style={styles.leftRightSection}>
          <Text style={styles.leftStyle4}>Total MRP</Text>
          <View style={styles.rightIconWithText}>
            <Currency style={styles.currencyIcon} />
            <Text style={styles.rightTextStyle4}> {allIncPrice}.00</Text>
          </View>
        </View>
        <View>
          <Buttons
            name={'Checkout'}
            bg={Colors.white}
            color={Colors.darkBlue}
            onPressButton={onPressButton}
          />
          {/* <TouchableOpacity onPress={onPressButton}>
            <Text>OnPress</Text>
          </TouchableOpacity> */}
        </View>
      </View>
    </View>
  );
};
const mapStateToProps = state => {
  return {
    cart: state.product.cart,
  };
};
export default connect(mapStateToProps)(CheckoutCard);

const styles = StyleSheet.create({
  conatiner: {
    backgroundColor: Colors.darkBlue,
    borderRadius: moderateScale(20),
    position: 'absolute',
    width: '100%',
    bottom: 0,
  },
  checkoutCardSection: {
    marginHorizontal: moderateScale(15),
    marginVertical: moderateScale(11),
  },
  leftRightSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftStyle: {
    fontSize: scale(15),
    lineHeight: scale(18),
    letterSpacing: scale(0.5),
    color: Colors.white,
    marginTop: moderateScale(14),
    fontFamily: 'Montserrat-Bold',
  },
  leftStyle2: {
    fontSize: scale(15),
    lineHeight: scale(18),
    letterSpacing: scale(0.5),
    color: Colors.white,
    marginTop: moderateScale(10),
    fontFamily: 'Montserrat-Medium',
  },
  leftStyle3: {
    fontSize: scale(15),
    lineHeight: scale(18),
    letterSpacing: scale(0.5),
    color: Colors.white,
    marginTop: moderateScale(10),
    fontFamily: 'Montserrat-Medium',
  },
  leftStyle4: {
    fontSize: scale(20),
    lineHeight: scale(24),
    letterSpacing: scale(0.5),
    color: Colors.white,
    marginVertical: moderateScale(23),
    fontFamily: 'Montserrat-Bold',
  },
  rightIconWithText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  currencyIcon: {
    width: moderateScale(22),
    height: verticalScale(22),
  },
  rightTextStyle: {
    fontSize: scale(15),
    lineHeight: scale(18),
    letterSpacing: scale(0.5),
    color: Colors.white,
    fontFamily: 'Montserrat-Bold',
  },
  rightTextStyle2: {
    fontSize: scale(15),
    lineHeight: scale(18),
    letterSpacing: scale(0.5),
    color: Colors.white,
    fontFamily: 'Montserrat-Medium',
  },
  rightTextStyle3: {
    fontSize: scale(15),
    lineHeight: scale(18),
    letterSpacing: scale(0.5),
    color: Colors.white,
    fontFamily: 'Montserrat-Medium',
  },
  rightTextStyle4: {
    fontSize: scale(20),
    lineHeight: scale(24),
    letterSpacing: scale(0.5),
    fontWeight: '600',
    color: Colors.white,
    fontFamily: 'Montserrat-Bold',
  },
});
