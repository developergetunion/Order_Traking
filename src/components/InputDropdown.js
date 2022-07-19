import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import DownIcon from '../assets/icons/DownIcon.svg';
import {moderateScale, scale} from 'react-native-size-matters';
import Colors from '../constant/Colors';

const InputDropdown = ({data = [], value, selectName, onSelect = () => {}}) => {
  const [showOption, setshowOption] = useState(false);

  const onSelectedItem = item => {
    setshowOption(false);
    onSelect(item);
  };

  const OutputValue = () => {
    return (
      <View>
        <View style={styles.value1}>
          <Text style={styles.valueStyle}>{value}</Text>
        </View>
      </View>
    );
  };
  return (
    <View>
      <View style={styles.dropdownSection}>
        <View style={styles.InnerText}>
          <Text style={styles.text}>
            {!!value ? <OutputValue /> : selectName}
          </Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.dropdownIcon}
          onPress={() => setshowOption(!showOption)}>
          <DownIcon
            style={{
              paddingRight: moderateScale(75),
              transform: [{rotate: showOption ? '180deg' : '0deg'}],
            }}
          />
        </TouchableOpacity>
      </View>
      {showOption && (
        <View style={styles.dropdownValue}>
          {data?.map((item, ind) => (
            <TouchableOpacity
              key={ind}
              style={styles.value}
              onPress={() => onSelectedItem(item)}>
              <Text style={styles.valueStyle}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

export default InputDropdown;

const styles = StyleSheet.create({
  dropdownSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: Colors.darkBlue,
    height: 54,
    alignItems: 'center',
    borderRadius: 12,
  },
  InnerText: {
    paddingLeft: moderateScale(15),
  },
  text: {
    fontSize: 18,
    // lineHeight: scale(9),
    letterSpacing: scale(0.5),
    color: Colors.darkBlue,
    fontFamily: 'Poppins-Regular',
  },
  valueStyle: {
    fontSize: 14,
    letterSpacing: scale(0.1),
    color: Colors.white,
    fontFamily: 'Poppins-Medium',
  },
  value: {
    backgroundColor: Colors.darkBlue,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: moderateScale(12),
    paddingVertical: moderateScale(6),
    borderRadius: moderateScale(10),
    marginRight: moderateScale(5),
    justifyContent: 'center',
    marginBottom: 8,
  },
  value1: {
    backgroundColor: Colors.darkBlue,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: moderateScale(12),
    paddingVertical: moderateScale(6),
    borderRadius: moderateScale(10),
    marginRight: moderateScale(5),
    justifyContent: 'center',
  },
  dropdownValue: {
    flexDirection: 'row',
    marginTop: moderateScale(5),
    borderWidth: 1,
    borderColor: Colors.darkBlue,
    borderRadius: moderateScale(12),
    padding: moderateScale(10),
    paddingBottom: 30,
    alignItems: 'center',
    flexWrap: 'wrap',
  },
});
