import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import {moderateScale, scale} from 'react-native-size-matters';
import Colors from '../constant/Colors';
const InputWithIcon = ({
  Icon,
  placeholder,
  value,
  name,
  onInputChange = () => {},
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.inputSection}>
        <View style={styles.icon}>{Icon}</View>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={Colors.placeholder}
          style={styles.inputStyle}
          value={value}
          onChangeText={onInputChange}
        />
      </View>
    </View>
  );
};

export default InputWithIcon;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: moderateScale(10),
  },
  inputSection: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: Colors.darkBlue,
    marginBottom: moderateScale(34),
  },
  icon: {
    marginLeft: moderateScale(8),
    marginRight: moderateScale(18),
  },

  inputStyle: {
    fontSize: 14,
    letterSpacing: scale(0.5),
    fontWeight: '500',
    color: Colors.darkBlue,
    fontFamily: 'Poppins',
    flex: 1,
    borderLeftWidth: 1,
    borderLeftColor: Colors.darkBlue,
    marginVertical: 5,
    paddingLeft: moderateScale(30),
  },
});
