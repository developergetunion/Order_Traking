import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  FlatList,
} from 'react-native';
import React, {useEffect} from 'react';
import ImagesPath from '../constant/ImagesPath';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import Colors from '../constant/Colors';
import Currency from '../assets/icons/Currency.svg';
import Increment from '../assets/icons/Increment.svg';
import Decrement from '../assets/icons/Decrement.svg';

const Card = () => {
  // const productData = JSON.stringify(products);
  // console.log(`products is hear : ${products}`);
  // console.log(JSON.stringify(products));
  return (
    <View style={styles.container}>
      <View style={styles.cardSection}>
        <View style={styles.imgWithContain}>
          <View style={styles.leftImg}>
            <Image source={ImagesPath.product1} style={styles.productImg} />
          </View>
          <View style={styles.centerContaint}>
            <Text style={styles.productName}>Aloo Chips</Text>
            <Text style={styles.comppanyName}>Suchita Gruh Udyog</Text>
            <View style={styles.plusMinusIcon}>
              <TouchableOpacity activeOpacity={0.5}>
                <Increment style={styles.incrementIcon} />
              </TouchableOpacity>
              <Text style={styles.textNum}>5</Text>
              <TouchableOpacity activeOpacity={0.5}>
                <Decrement style={styles.decrementIcon} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.priceButtonSection}>
          <View style={styles.priceWithIcon}>
            <Currency style={styles.currencyIcon} />
            <Text style={styles.price}>50</Text>
          </View>
          <TouchableOpacity activeOpacity={0.5} style={styles.addButton}>
            <Text style={styles.buttonText}>Add</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Card;

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
    backgroundColor: Colors.white,
    // alignItems: 'center',
    // height: verticalScale(120),
    borderRadius: moderateScale(12),
    borderWidth: moderateScale(1),
    borderColor: Colors.darkBlue,
    marginTop: moderateScale(5),
    justifyContent: 'space-between',
    paddingBottom: 15,
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
    width: 170,
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
    paddingHorizontal: moderateScale(18),
    paddingVertical: moderateScale(8),
    backgroundColor: Colors.darkBlue,
    marginTop: moderateScale(29),
    borderRadius: moderateScale(5),
  },
  buttonText: {
    fontSize: scale(15),
    fontStyle: 'normal',
    letterSpacing: scale(0.5),
    color: Colors.white,
    fontFamily: 'Poppins-Medium',
  },
  leftImg: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  priceButtonSection: {
    marginTop: moderateScale(21),
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
