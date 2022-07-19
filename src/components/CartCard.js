import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import Colors from '../constant/Colors';
import Currency from '../assets/icons/Currency.svg';
import Increment from '../assets/icons/Increment.svg';
import Decrement from '../assets/icons/Decrement.svg';
import Delete from '../assets/icons/delete.svg';
import {connect} from 'react-redux';
import {
  removeFromCart,
  increaseQty,
  decressQty,
} from '../redux/productList/action';

const CartCard = ({cart, increaseQty, removeFromCart, decressQty}) => {
  return (
    <View style={styles.container}>
      {cart?.map((itemData, ind) => (
        <View key={ind} style={styles.cardSection}>
          <View style={styles.imgWithContain}>
            <View style={styles.leftImg}>
              <Image
                source={{uri: itemData.imageLink}}
                style={styles.productImg}
              />
            </View>
            <View style={styles.centerContaint}>
              <Text style={styles.productName}>{itemData.title}</Text>
              <Text style={styles.comppanyName}>{itemData.sold_by}</Text>
              <View style={styles.plusMinusIcon}>
                <TouchableOpacity
                  onPress={() => increaseQty(itemData.id)}
                  activeOpacity={0.5}>
                  <Increment style={styles.incrementIcon} />
                </TouchableOpacity>
                <Text style={styles.textNum}>{itemData.qty}</Text>
                <TouchableOpacity
                  onPress={() => decressQty(itemData.id)}
                  activeOpacity={0.5}>
                  <Decrement style={styles.decrementIcon} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.priceButtonSection}>
            <View style={styles.priceWithIcon}>
              <Currency style={styles.currencyIcon} />

              <Text style={styles.price}>{itemData.price}</Text>
            </View>
            <TouchableOpacity
              onPress={() => removeFromCart(itemData.id)}
              activeOpacity={0.5}
              style={styles.addButton}>
              <Delete style={styles.currencyIcon} />
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </View>
  );
};
const mapStateToProps = state => {
  return {
    cart: state.product.cart,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeFromCart: id => dispatch(removeFromCart(id)),
    increaseQty: id => dispatch(increaseQty(id)),
    decressQty: id => dispatch(decressQty(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartCard);

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  productImg: {
    width: moderateScale(70),
    height: verticalScale(70),
    borderRadius: moderateScale(10),
  },
  incrementIcon: {
    width: moderateScale(22),
    height: verticalScale(22),
    tintColor: Colors.darkBlue,
  },
  decrementIcon: {
    width: moderateScale(22),
    height: verticalScale(22),
    tintColor: Colors.darkBlue,
  },
  currencyIcon: {
    width: moderateScale(11),
    height: verticalScale(24),
    tintColor: Colors.darkBlue,
  },
  cardSection: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: moderateScale(10),
    height: verticalScale(120),
    borderColor: Colors.borderBottom,
    // marginTop: moderateScale(5),
    justifyContent: 'space-between',
    borderBottomWidth: moderateScale(0.5),
  },
  plusMinusIcon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  priceWithIcon: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  productName: {
    fontSize: scale(15),
    lineHeight: scale(24),
    letterSpacing: scale(0.5),
    color: Colors.numColor,
    fontFamily: 'Poppins-SemiBold',
  },
  centerContaint: {
    marginLeft: moderateScale(20),
    marginTop: moderateScale(21),
    width: moderateScale(180),
  },
  price: {
    fontSize: scale(20),
    lineHeight: scale(24),
    fontStyle: 'normal',
    letterSpacing: scale(0.5),
    marginLeft: moderateScale(5),
    color: Colors.numColor,
    fontFamily: 'Poppins-SemiBold',
  },
  addButton: {
    marginTop: moderateScale(29),
    alignItems: 'center',
  },

  leftImg: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  priceButtonSection: {
    marginTop: moderateScale(25),
    // justifyContent: 'space-between',
  },
  comppanyName: {
    fontSize: scale(10),
    lineHeight: scale(15),
    letterSpacing: scale(0.5),
    color: Colors.buttonText,
    marginBottom: moderateScale(18),
    fontFamily: 'Poppins-SemiBold',
  },
  textNum: {
    marginHorizontal: moderateScale(10),
    fontSize: scale(15),
    lineHeight: scale(24),
    letterSpacing: scale(0.5),
    color: Colors.numColor,
    fontFamily: 'Poppins-SemiBold',
  },
  imgWithContain: {
    flexDirection: 'row',
  },
});
