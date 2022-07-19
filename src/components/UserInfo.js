import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Animated,
} from 'react-native';
import React, {useEffect} from 'react';
import {moderateScale, scale} from 'react-native-size-matters';
import Colors from '../constant/Colors';
import {useNavigation} from '@react-navigation/native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {connect} from 'react-redux';
import {getUserDetails} from '../redux/productList/action';

const SCREEN_WIDTH = Dimensions.get('window').width;

const UserInfo = ({users, fetchUsers}) => {
  navigation = useNavigation();

  useEffect(() => {
    fetchUsers;
  }, []);

  const rightSwipe = (progress, dragX) => {
    const scale = dragX.interpolate({
      inputRange: [0, 100],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    });
    return (
      <TouchableOpacity
        activeOpacity={0.6}
        style={styles.editButton}
        onPress={() => {
          navigation.navigate('UserDetailForm'),
            {
              user_id,
            };
        }}>
        <Animated.Text
          style={{
            fontSize: 18,
            lineHeight: 24,
            letterSpacing: 0.5,
            color: Colors.white,
            fontFamily: 'Poppins-SemiBold',
            transform: [{scale: scale}],
          }}>
          Edit
        </Animated.Text>
      </TouchableOpacity>
    );
  };
  {
    /* <FlatList
showsVerticalScrollIndicator={false}
data={users.filter(item => item.delivered === false)}
keyExtractor={(item, index) => index.toString()}
// ItemSeparatorComponent={ItemSeparatorView}
renderItem={UserData}
// ListHeaderComponent={ContentThatGoesAboveTheFlatList}
// ListFooterComponent={ContentThatGoesBelowTheFlatList}
/> */
  }

  return (
    <View>
      {users
        ?.filter(item => item.delivered === false)
        .map((item, ind) => (
          <View style={styles.userInfoSection} key={ind}>
            <Swipeable renderRightActions={rightSwipe}>
              <TouchableOpacity
                activeOpacity={0.5}
                style={styles.card}
                onPress={() => navigation.navigate('UserDetails')}>
                <Text style={styles.companyName}>{item.mallForwardToName}</Text>
                <Text style={styles.phoneNo}>{item.cust_num}</Text>
                <Text style={styles.address}>
                  {item.cust_houseno},{item.delivered.toString()}
                </Text>
                <Text style={styles.orderDate}>Order {item.ord_date}</Text>
              </TouchableOpacity>
            </Swipeable>

            {/* <FlatList
          showsVerticalScrollIndicator={false}
          data={filteredResults}
          keyExtractor={(item, index) => index.toString()}
          // ItemSeparatorComponent={ItemSeparatorView}
          renderItem={itemData}
        /> */}
          </View>
        ))}
    </View>
  );
};

const mapStateToProps = state => {
  return {
    users: state.product.users,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: dispatch(getUserDetails()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: SCREEN_WIDTH,
    // position: 'absolute',
  },
  userInfoSection: {
    marginTop: 10,
  },
  card: {
    paddingLeft: moderateScale(18),
    paddingVertical: moderateScale(10),
    backgroundColor: Colors.white,
    borderRadius: 20,
  },
  companyName: {
    fontSize: 16,
    lineHeight: scale(24),
    letterSpacing: scale(0.5),
    color: Colors.darkBlue,
    fontFamily: 'Poppins-SemiBold',
  },
  phoneNo: {
    fontSize: 14,
    lineHeight: scale(24),
    letterSpacing: scale(0.5),
    color: Colors.darkBlue,
    fontFamily: 'Poppins-Medium',
  },
  address: {
    fontSize: 11,
    lineHeight: scale(18),
    letterSpacing: scale(0.5),
    color: Colors.black50,
    fontFamily: 'Poppins-Medium',
  },
  orderDate: {
    fontSize: 12,
    lineHeight: scale(18),
    letterSpacing: scale(0.5),
    color: Colors.orderDate,
    fontFamily: 'Poppins-SemiBold',
  },
  editButton: {
    backgroundColor: 'red',
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    paddingHorizontal: 25,
    justifyContent: 'center',
    backgroundColor: Colors.darkBlue,
    // position: 'relative',
  },
});
