import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ToastAndroid,
} from 'react-native';
import React, {useState} from 'react';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import Buttons from '../components/Buttons';
import Profile from '../assets/icons/Profile.svg';
import Smartphone from '../assets/icons/Smartphone.svg';
import Calender from '../assets/icons/Calender.svg';
import HomeIcon from '../assets/icons/HomeIcon.svg';
import Group from '../assets/icons/Group.svg';
import CupponIcon from '../assets/icons/CupponIcon.svg';
import {connect, useDispatch} from 'react-redux';
import Colors from '../constant/Colors';
import {createUserStart} from '../redux/productList/action';
import {useNavigation} from '@react-navigation/native';
import InputDropdown from '../components/InputDropdown';

const StateData = ['Maharashtra', 'Chhattisgarh'];
const CityData = ['Nagpur', 'Raipur'];
const delivery_day = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const delivery_time = ['7 to 11a', '11to2p', '2to5p', '5to8p'];

const UserDetailForm = ({cart, route}) => {
  const dispatch = useDispatch();
  navigation = useNavigation();
  const formatYmd = date => date.toISOString().slice(0, 10);
  const todayDate = formatYmd(new Date());
  const _id = route.params.user_id;

  console.log('this is my id =>>>>>>>>>>>>>>>>>>>>>>>>>>>>', _id);
  // const getEditDetails = type => {
  //   if (route.params) {
  //     switch (type) {
  //       case 'cust_city':
  //         return route.params.cust_city;
  //       case 'cust_houseno':
  //         return route.params.cust_houseno;
  //       case 'cust_landmark':
  //         return route.params.cust_landmark;
  //       case 'cust_nam':
  //         return route.params.cust_nam;
  //       case 'cust_num':
  //         return route.params.cust_num;
  //       case 'ord_date':
  //         return route.params.ord_date;
  //       case 'pref_delivery_day':
  //         return route.params.pref_delivery_day;
  //       case 'pref_delivery_time':
  //         return route.params.pref_delivery_time;
  //       case 'cust_pincode':
  //         return route.params.cust_pincode;
  //       case 'cust_state':
  //         return route.params.cust_state;
  //       case 'cust_street':
  //         return route.params.cust_street;
  //     }
  //   }
  //   return '';
  // };

  const [input, setinput] = useState({
    city:'',
    comments: '',
    coupon: '',
    delivered: false,
    houseno:'',
    image: '',
    landmark:'',
    location:
      '{"latitude":21.2555526,"longitude":81.6363762,"time":{"_date":"2022-07-13T11:10:49.567Z"}}',
    name:'',
    newVMall: true,
    number: '',
    ord_date: `${todayDate}`,
    payType: 'SingingCharacter.payLater',
    pincode:'',
    pref_delivery_day:'',
    pref_delivery_time:'',
    state: '',
    street: '',
    tamount: '100',
    umunbers: '[9340577322]',
    user_id: '6267572733',
    usr_nam: 'Styled Shop',
    usr_num: '6267572733',
    _csrf: '',
    isValidUser: true,
    isValidMo_Num: true,
    isValidHouse: true,
    isValidStreet: true,
  });

  const handleChange = (name, value) => {
    setinput({
      ...input,
      [name]: value,
    });
  };

  const onPressButton = () => {
    if (
      input.city &&
      input.houseno &&
      input.landmark &&
      input.name &&
      input.number &&
      input.ord_date &&
      input.pincode &&
      input.pref_delivery_day &&
      input.pref_delivery_time &&
      input.state &&
      input.street &&
      input.tamount
    ) {
      const items = JSON.stringify(cart);
      const orderAllData = {...input, items: items};
      const dispachData = dispatch(createUserStart(orderAllData));
      console.log('this is dispachData =============>', dispachData);
      setinput('');
      // navigation.navigate('History');
      ToastAndroid.show('Submited Data Sucessfully...!', ToastAndroid.SHORT);
    } else {
      alert('Some input are empty');
    }
  };
  const handleValidateUser = val => {
    if (val.trim().length >= 4) {
      setinput({
        ...input,
        isValidUser: true,
      });
    } else {
      setinput({
        ...input,
        isValidUser: false,
      });
    }
  };
  const handleValidateHouse = val => {
    if (val.trim().length >= 1) {
      setinput({
        ...input,
        isValidHouse: true,
      });
    } else {
      setinput({
        ...input,
        isValidHouse: false,
      });
    }
  };
  const handleValidateStreet = val => {
    if (val.trim().length >= 1) {
      setinput({
        ...input,
        isValidStreet: true,
      });
    } else {
      setinput({
        ...input,
        isValidStreet: false,
      });
    }
  };
  const handleValidateUserMobile = val => {
    if (val.trim().length >= 10 && val.trim().length <= 10) {
      setinput({
        ...input,
        isValidMo_Num: true,
      });
    } else {
      setinput({
        ...input,
        isValidMo_Num: false,
      });
    }
  };

  // if (input.city == value) {
  //   input.state[0];
  // }
  return (
    <View style={styles.container}>
      <View style={styles.userDetailSection}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.formSection}>
          <View style={styles.hedStyle}>
            <Text style={styles.hedText}>Fill the details</Text>
          </View>
          <View style={styles.inputSection}>
            <View style={styles.icon}>
              <Profile />
            </View>
            <TextInput
              placeholder="Full Name"
              placeholderTextColor={Colors.placeholder}
              style={styles.inputStyle}
              value={input.name}
              onChangeText={e => handleChange('name', e)}
              onEndEditing={e => handleValidateUser(e.nativeEvent.text)}
            />
          </View>
          {input.isValidUser ? null : (
            <Text style={styles.errorMsg}>
              Username must be 4 characters long.
            </Text>
          )}
          <View style={styles.inputSection}>
            <View style={styles.icon}>
              <Smartphone />
            </View>
            <TextInput
              placeholder="Mobile Number"
              keyboardType={'numeric'}
              placeholderTextColor={Colors.placeholder}
              style={styles.inputStyle}
              value={input.number}
              onChangeText={e => handleChange('number', e)}
              onEndEditing={e => handleValidateUserMobile(e.nativeEvent.text)}
            />
          </View>
          {input.isValidMo_Num ? null : (
            <Text style={styles.errorMsg}>Mobile number must be 10 digit.</Text>
          )}
          <View style={styles.inputSection}>
            <View style={styles.icon}>
              <Calender />
            </View>
            <TextInput
              placeholder="mm/dd/yy"
              placeholderTextColor={Colors.placeholder}
              style={styles.inputStyle}
              value={input.ord_date}
              onChangeText={e => handleChange('ord_date', e)}
            />
          </View>
          <View style={{marginTop: 30}}>
            <InputDropdown
              data={CityData}
              onSelect={e => handleChange('city', e)}
              value={input.city}
              selectName="City"
            />
            {input.city == '' ? (
              <Text style={styles.errorMsg}>City must be required.</Text>
            ) : null}
          </View>
          <View style={{marginTop: 30}}>
            <InputDropdown
              data={StateData}
              // onChangeText={e => handleChange('state', e)}
              onSelect={e => handleChange('state', e)}
              value={input.state}
              selectName="State"
            />
            {input.state == '' ? (
              <Text style={styles.errorMsg}>State must be required.</Text>
            ) : null}
          </View>

          <View style={{marginTop: 30}}>
            <InputDropdown
              data={delivery_day}
              onSelect={e => handleChange('pref_delivery_day', e)}
              value={input.pref_delivery_day}
              selectName="Delivery Day"
            />
            {input.pref_delivery_day == '' ? (
              <Text style={styles.errorMsg}>
                Delivery Days must be required.
              </Text>
            ) : null}
          </View>
          <View style={{marginTop: 30}}>
            <InputDropdown
              data={delivery_time}
              onSelect={e => handleChange('pref_delivery_time', e)}
              value={input.pref_delivery_time}
              selectName="Delivery Time"
            />
            {input.pref_delivery_time == '' ? (
              <Text style={styles.errorMsg}>
                Delivery timing must be required.
              </Text>
            ) : null}
          </View>
          <View style={styles.inputSection}>
            <View style={styles.icon}>
              <HomeIcon />
            </View>
            <TextInput
              placeholder="Pincode"
              keyboardType={'numeric'}
              placeholderTextColor={Colors.placeholder}
              style={styles.inputStyle}
              value={input.pincode}
              onChangeText={e => handleChange('pincode', e)}
            />
          </View>
          <View style={styles.inputSection}>
            <View style={styles.icon}>
              <HomeIcon />
            </View>
            <TextInput
              placeholder="Flat/House No./Building"
              placeholderTextColor={Colors.placeholder}
              style={styles.inputStyle}
              value={input.houseno}
              onChangeText={e => handleChange('houseno', e)}
              onEndEditing={e => handleValidateHouse(e.nativeEvent.text)}
            />
          </View>
          {input.isValidHouse ? null : (
            <Text style={styles.errorMsg}>
              Please enter Flat/House No/Building.
            </Text>
          )}
          <View style={styles.inputSection}>
            <View style={styles.icon}>
              <HomeIcon />
            </View>
            <TextInput
              placeholder="Street"
              placeholderTextColor={Colors.placeholder}
              style={styles.inputStyle}
              value={input.street}
              onChangeText={e => handleChange('street', e)}
              onEndEditing={e => handleValidateStreet(e.nativeEvent.text)}
            />
          </View>
          {input.isValidStreet ? null : (
            <Text style={styles.errorMsg}>Please enter street.</Text>
          )}
          <View style={styles.inputSection}>
            <View style={styles.icon}>
              <Group />
            </View>
            <TextInput
              placeholder="Landmark"
              placeholderTextColor={Colors.placeholder}
              style={styles.inputStyle}
              value={input.landmark}
              onChangeText={e => handleChange('landmark', e)}
            />
          </View>

          <View style={styles.inputSection}>
            <View style={styles.icon}>
              <CupponIcon />
            </View>
            <TextInput
              placeholder="Apply Coupon (ex. FLAT50)"
              placeholderTextColor={Colors.placeholder}
              style={styles.inputStyle}
              value={input.coupon}
              onChangeText={e => handleChange('coupon', e)}
              onEndEditing={e => handleValidateUser(e.nativeEvent.text)}
            />
          </View>
          <View style={styles.msgBoxStyle}>
            <TextInput
              placeholder="Customization (If you wud like to customise your order. 
            Enter the details here or Whatsapp us on below number)"
              placeholderTextColor={Colors.placeholder}
              style={styles.msgBox}
              value={input.comments}
              onChangeText={e => handleChange('comments', e)}
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
    </View>
  );
};
const mapStateToProps = state => {
  return {
    cart: state.product.cart,
  };
};
export default connect(mapStateToProps)(UserDetailForm);

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.backgroundColor,
    flex: 1,
  },
  userDetailSection: {
    marginHorizontal: moderateScale(10),
  },
  inputSection: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: Colors.darkBlue,
    marginTop: moderateScale(18),
  },
  icon: {
    marginLeft: moderateScale(8),
    marginRight: moderateScale(18),
  },

  inputStyle: {
    fontSize: 14,
    letterSpacing: scale(0.5),
    color: Colors.darkBlue,
    fontFamily: 'Poppins-Medium',
    flex: 1,
    borderLeftWidth: 1,
    borderLeftColor: Colors.darkBlue,
    marginVertical: 5,
    paddingLeft: moderateScale(30),
  },
  formSection: {
    marginHorizontal: moderateScale(15),
  },
  hedText: {
    fontSize: 28,
    lineHeight: scale(42),
    letterSpacing: scale(0.5),
    color: Colors.darkBlue,
    fontFamily: 'Poppins-Medium',
  },
  hedStyle: {
    marginTop: moderateScale(25),
  },
  msgBox: {
    // height: verticalScale(145),
    // width: '80%',
    // flex: 1,
    paddingBottom: 145,
    fontSize: 12,
    lineHeight: scale(23),
    letterSpacing: scale(0.5),
    color: Colors.darkBlue,
    fontFamily: 'Poppins-Medium',
    paddingHorizontal: 5,
    flex: 1,
    width: '100%',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
  },
  msgBoxStyle: {
    borderWidth: 1,
    borderColor: Colors.darkBlue,
    marginBottom: 30,
    marginTop: 20,
    borderRadius: 10,
    flexWrap: 'wrap',
  },
  errorMsg: {
    fontSize: 11,
    letterSpacing: scale(0.5),
    color: 'red',
    fontFamily: 'Poppins-Medium',
    // textAlign:'center'
    paddingLeft: 42,
  },
});
