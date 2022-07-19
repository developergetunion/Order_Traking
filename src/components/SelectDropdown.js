import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Colors from '../constant/Colors';
import DownIcon from '../assets/icons/DownIcon.svg';
import CrossWhite from '../assets/icons/CrossWhite.svg';
import {moderateScale, scale} from 'react-native-size-matters';

const SelectDropdown = ({
  data = [],
  value,
  dropDownName,
  onSelect = () => {},
}) => {
  const CityStyle = () => {
    return (
      <View>
        <View style={styles.value}>
          <Text style={styles.valueStyle}>{value.name}</Text>
          <TouchableOpacity style={styles.DownIcon}>
            <CrossWhite style={styles.DownIcon} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  const [showOption, setshowOption] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.dropdownSection}>
        <View style={styles.InnerText}>
          <Text style={styles.text}>
            {!!value ? <CityStyle /> : dropDownName}
          </Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.dropdownIcon}
          onPress={() => setshowOption(!showOption)}>
          <DownIcon style={styles.DownIcon} />
        </TouchableOpacity>
      </View>
      {showOption && (
        <View style={styles.dropdownValue}>
          {data?.map((item, ind) => (
            <TouchableOpacity
              key={ind}
              style={styles.value}
              onPress={() => onSelect(item)}>
              <Text style={styles.valueStyle}>{item.name}</Text>
              <TouchableOpacity style={styles.DownIcon}>
                <CrossWhite style={styles.DownIcon} />
              </TouchableOpacity>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

export default SelectDropdown;

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
  dropdownIcon: {
    paddingRight: moderateScale(25),
  },
  value: {
    backgroundColor: Colors.darkBlue,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: moderateScale(12),
    paddingVertical: moderateScale(6),
    borderRadius: moderateScale(10),
    marginRight: moderateScale(5),
    justifyContent: 'center',
  },
  valueStyle: {
    fontSize: 14,
    // lineHeight: scale(9),
    letterSpacing: scale(0.1),
    color: Colors.white,
    fontFamily: 'Poppins-Medium',
  },
  DownIcon: {
    paddingRight: moderateScale(10),
    paddingLeft: 9,
  },
  dropdownValue: {
    flexDirection: 'row',
    marginTop: moderateScale(5),
    borderWidth: 1,
    borderColor: Colors.darkBlue,
    borderRadius: moderateScale(12),
    padding: moderateScale(10),
    paddingBottom: 120,
    alignItems: 'center',
  },
  valueStyleEmpty: {
    fontSize: 14,
    letterSpacing: scale(0.1),
    color: Colors.darkBlue,
    fontFamily: 'Poppins-Medium',
  },
  value2: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: moderateScale(12),
    paddingVertical: moderateScale(6),
    borderRadius: moderateScale(10),
    marginRight: moderateScale(5),
    borderWidth: 1,
    borderColor: Colors.darkBlue,
  },
});
