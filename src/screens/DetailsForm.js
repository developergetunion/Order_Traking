import {ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import Colors from '../constant/Colors';
import InputWithIcon from '../components/InputWithIcon';
import SelectDropdown from '../components/SelectDropdown';
import Buttons from '../components/Buttons';
import Profile from '../assets/icons/Profile.svg';
import Smartphone from '../assets/icons/Smartphone.svg';
import Calender from '../assets/icons/Calender.svg';
import HomeIcon from '../assets/icons/HomeIcon.svg';
import Group from '../assets/icons/Group.svg';
import CupponIcon from '../assets/icons/CupponIcon.svg';
import {useDispatch} from 'react-redux';
import {createUserStart} from '../redux/productList/action';

const initialState = {
  name: '',
  mobile_no: '',
  birth_date: '',
  city: '',
  area: '',
  address: '',
  landmark: '',
  cupon: '',
  msg_box: '',
};

const DetailsForm = () => {
  const [formValue, setformValue] = useState(initialState);
  const {name, mobile_no, birth_date, address, landmark, cupon, msg_box} =
    formValue;

  const dispatch = useDispatch();
  // const onInputChange = () => {
  //   setformValue({...formValue});
  // };
  // const onNameChange = () => {
  //   con
  // }

  const onPressButton = e => {
    e.preventDefault();
    if (
      name &&
      mobile_no &&
      birth_date &&
      address &&
      landmark &&
      cupon &&
      msg_box
    ) {
      dispatch(createUserStart(formValue));
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.formSection}>
        <View style={styles.hedStyle}>
          <Text style={styles.hedText}>Fill the details</Text>
        </View>
        <View>
          <InputWithIcon
            placeholder="Full Name"
            Icon={<Profile />}
            value={name}
            onInputChange={onNameChange}
          />
        </View>
        <View>
          <InputWithIcon
            placeholder="Mobile Number"
            Icon={<Smartphone />}
            value={mobile_no}
            onInputChange={onMobileChange}
          />
        </View>
        <View>
          <InputWithIcon
            placeholder="mm/dd/yy"
            Icon={<Calender />}
            value={birth_date}
            onInputChange={onInputChange}
          />
        </View>
        <View style={{marginBottom: 30}}>
          <SelectDropdown dropDownName="City" />
        </View>
        <View style={{marginBottom: 30}}>
          <SelectDropdown dropDownName="Area" />
        </View>
        <View>
          <InputWithIcon
            placeholder="Flat/House No./Building/Apartment"
            Icon={<HomeIcon />}
            value={address}
            onInputChange={onInputChange}
          />
        </View>
        <View>
          <InputWithIcon
            placeholder="Landmark"
            Icon={<Group />}
            value={landmark}
            onInputChange={onInputChange}
          />
        </View>
        <View>
          <InputWithIcon
            placeholder="Apply Coupon (ex. FLAT50)"
            Icon={<CupponIcon />}
            value={cupon}
            onInputChange={onInputChange}
          />
        </View>
        <View style={styles.msgBoxStyle}>
          <TextInput
            placeholder="Customization (If you wud like to customise your order. 
            Enter the details here or Whatsapp us on below number)"
            placeholderTextColor={Colors.placeholder}
            style={styles.msgBox}
            value={msg_box}
            onInputChange={onInputChange}
          />
        </View>
        <View style={{marginBottom: 15}}>
          <Buttons
            name="Submit"
            bg={Colors.darkBlue}
            color={Colors.white}
            onPressButton={onPressButton}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default DetailsForm;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.backgroundColor,
    flex: 1,
  },
  formSection: {
    marginHorizontal: moderateScale(15),
  },
  hedText: {
    fontSize: 28,
    lineHeight: scale(42),
    letterSpacing: scale(0.5),
    fontWeight: '500',
    color: Colors.darkBlue,
    fontFamily: 'Poppins',
  },
  hedStyle: {
    marginVertical: moderateScale(25),
  },
  msgBox: {
    // height: verticalScale(145),
    // width: '80%',
    // flex: 1,
    paddingBottom: 145,
    fontSize: 12,
    lineHeight: scale(23),
    letterSpacing: scale(0.5),
    fontWeight: '500',
    color: Colors.darkBlue,
    fontFamily: 'Poppins',
    paddingHorizontal: 5,
  },
  msgBoxStyle: {
    borderWidth: 1,
    borderColor: Colors.darkBlue,
    marginBottom: 30,
    borderRadius: 10,
  },
});
