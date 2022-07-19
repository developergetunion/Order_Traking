import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import CrossIcon from '../assets/icons/CrossIcon.svg';
import Colors from '../constant/Colors';
import {moderateScale, scale} from 'react-native-size-matters';
import SelectDropdown from '../components/SelectDropdown';
import {useNavigation} from '@react-navigation/native';
import Buttons from '../components/Buttons';

const cityName = [
  {
    id: 1,
    name: 'All',
  },
  {
    id: 2,
    name: 'Raipur',
  },
  {
    id: 3,
    name: 'Nagpur',
  },
];

const vendorName = [
  {
    id: 1,
    name: 'All',
  },
  {
    id: 2,
    name: 'Demo',
  },
  {
    id: 3,
    name: 'Demo2',
  },
];

const FilterScreen = () => {
  const [selectItem, setselectItem] = useState(null);
  const [selectVendor, setselectVendor] = useState(null);

  const onSelectItem = item => {
    setselectItem(item);
  };
  const onSelectVendor = item => {
    setselectVendor(item);
  };
  navigation = useNavigation();
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Colors.gray100} barStyle="light-content" />
      <View style={styles.filterScreen}>
        <View style={styles.header}>
          <Text></Text>
          <Text style={styles.hederText}>Filter</Text>
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.crossIconStyle}
            onPress={() => navigation.goBack()}>
            <CrossIcon style={styles.CrossIcon} />
          </TouchableOpacity>
        </View>
        <View style={styles.filterSection}>
          <Text style={styles.cityStyle}>City</Text>
          <View>
            <SelectDropdown
              data={cityName}
              onSelect={onSelectItem}
              value={selectItem}
              dropDownName="All"
            />
          </View>
          <View>
            <Text style={styles.cityStyle}>Vendor</Text>
            <View>
              <SelectDropdown
                data={vendorName}
                onSelect={onSelectVendor}
                value={selectVendor}
                dropDownName="Select"
              />
            </View>
          </View>
        </View>
        <View style={styles.button}>
          <Buttons name="Confirm" bg={Colors.darkBlue} color={Colors.white} />
        </View>
      </View>
    </View>
  );
};

export default FilterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.gray100,
    paddingTop: moderateScale(20),
  },
  filterScreen: {
    backgroundColor: Colors.backgroundColor,
    borderTopLeftRadius: moderateScale(30),
    borderTopRightRadius: moderateScale(30),
    flex: 1,
    position: 'relative',
  },
  filterSection: {
    marginHorizontal: moderateScale(15),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: moderateScale(30),
    borderBottomWidth: 1,
    borderBottomColor: Colors.blue_40,
    paddingHorizontal: 25,
  },
  hederText: {
    fontSize: scale(25),
    lineHeight: scale(38),
    letterSpacing: scale(0.5),
    color: Colors.darkBlue,
    fontFamily: 'Poppins-Medium',
  },
  cityStyle: {
    fontSize: scale(20),
    lineHeight: scale(30),
    letterSpacing: scale(0.5),
    color: Colors.darkBlue,
    fontFamily: 'Poppins-Medium',
    marginTop: moderateScale(26),
    marginBottom: moderateScale(20),
  },
  button: {
    paddingHorizontal: 15,
    position: 'absolute',
    width: '100%',
    bottom: 0,
    paddingBottom: 15,
  },
});
