import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import ImagesPath from '../constant/ImagesPath';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import Colors from '../constant/Colors';
import Plus from '../assets/icons/Plus.svg';

const AddItemsButton = ({addItemsButton = () => {}}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.6}
        style={styles.buttonSection}
        onPress={() => addItemsButton()}>
        <Plus style={styles.plusIcon} />
        <Text style={styles.buttonText}>Add Item</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddItemsButton;

const styles = StyleSheet.create({
  container: {
    marginVertical: moderateScale(10),
    marginHorizontal: moderateScale(5),
  },
  plusIcon: {
    width: moderateScale(22),
    height: verticalScale(22),
    tintColor: Colors.darkBlue,
  },
  buttonSection: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: moderateScale(33),
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'dashed',
    borderRadius: moderateScale(20),
    borderColor: Colors.darkBlue,
  },
  buttonText: {
    fontSize: scale(15),
    fontWeight: '600',
    color: Colors.buttonText,
    lineHeight: scale(24),
    letterSpacing: scale(0.5),
    marginLeft: moderateScale(15),
    fontFamily: 'Poppins-SemiBold',
  },
});
