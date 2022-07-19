import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import ImagesPath from '../constant/ImagesPath';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import Colors from '../constant/Colors';
import Vector from '../assets/icons/Vector.svg';
import Union from '../assets/icons/Union.svg';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {searchProductStart} from '../redux/productList/action';
const SearchBar = ({searchInput, searchItems = () => {}}) => {
  navigation = useNavigation();

  // console.log('this is my data------->', search);
  // const [searchData, setsearchData] = useState({
  //   searchInput: '',
  // });
  // const dispatch = useDispatch();

  // const handleChange = (name, value) => {
  //   setsearchData({
  //     ...searchData,
  //     [name]: value,
  //   });
  // };
  // const SearchButton = () => {
  //   dispatch(searchProductStart(searchData));
  //   setsearchData('');
  // };
  // console.log('this is a search text', searchData);

  return (
    <View style={styles.searchSection}>
      <Union style={styles.searchIcon} />
      <TextInput
        placeholder="search"
        placeholderTextColor={Colors.gray}
        style={styles.inputStyle}
        value={searchInput}
        onChangeText={text => searchItems(text)}
      />
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => navigation.navigate('FilterScreen')}>
        <Vector style={styles.adjustIcon} />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  searchSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(12),
    marginTop: moderateScale(18),
    borderColor: Colors.inputBorder,
    borderWidth: 1,
  },
  searchIcon: {
    width: moderateScale(24),
    height: verticalScale(21),
    marginLeft: moderateScale(21),
    marginRight: moderateScale(15),
    tintColor: Colors.darkBlue,
  },
  adjustIcon: {
    width: moderateScale(24),
    height: verticalScale(21),
    marginRight: moderateScale(16),
    tintColor: Colors.darkBlue,
  },
  inputStyle: {
    flex: 1,
    fontSize: scale(16),
    paddingVertical: moderateScale(16),
    fontFamily: 'Poppins-Regular',
  },
});
