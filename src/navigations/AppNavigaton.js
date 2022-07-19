import React from 'react';
import {Image} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import Colors from '../constant/Colors';
import HomeScreen from '../screens/HomeScreen';
import TrackOrder from '../screens/TrackOrder';
import Clipboard from '../assets/icons/Clipboard.svg';
import ClipboardColor from '../assets/icons/ClipboardColor.svg';
import History from '../assets/icons/History.svg';
import TrackOrders from '../assets/icons/TrackOrder.svg';
import Rupees from '../assets/icons/Rupees.svg';
import PricesScreen from '../screens/PricesScreen';
import Cart from '../screens/Cart';
import FilterScreen from '../screens/FilterScreen';
import DetailsForm from '../screens/DetailsForm';
import TrackOrderColor from '../assets/icons/TrackOrdersColor.svg';
import HistoryColor from '../assets/icons/HistoryColor.svg';
import RupeesColor from '../assets/icons/RupeesColor.svg';
import UserDetails from '../screens/UserDetails';
import UserDetailForm from '../screens/UserDetailForm';
import HistoryScreen from '../screens/History/HistoryScreen';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Delivered from '../screens/History/Delivered';
import Pending from '../screens/History/Pending';
import Cancelled from '../screens/History/Cancelled';

const TopTab = createMaterialTopTabNavigator();

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const AppNavigation = () => {
  const BottomNav = () => {
    return (
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarHideOnKeyboard: true,
          tabBarActiveTintColor: Colors.white,
          tabBarInactiveTintColor: Colors.black,
          tabBarActiveBackgroundColor: Colors.darkBlue,
          tabBarShowLabel: false,
          tabBarItemStyle: {
            margin: 5,
            borderRadius: 15,
          },
          headerTitleContainerStyle: {
            // marginVertical: 10,
          },
          headerStyle: {
            backgroundColor: Colors.backgroundColor,
            // borderBottomColor: '#ffffff',
            // borderBottomWidth: 3,
          },
          headerTitleStyle: {
            fontSize: 32,
            lineHeight: scale(42),
            letterSpacing: scale(0.5),
            color: Colors.darkBlue,
            fontFamily: 'Poppins-Medium',
          },
          tabBarStyle: {
            position: 'absolute',
            borderRadius: moderateScale(20),
            marginBottom: moderateScale(10),
            marginHorizontal: moderateScale(10),
            height: verticalScale(74),
            style: {
              borderRadius: moderateScale(20),
            },
          },

          tabBarIcon: ({focused, size, color}) => {
            let IconName;
            if (route.name === 'Home') {
              IconName = focused ? Clipboard : ClipboardColor;
            } else if (route.name === 'History') {
              IconName = focused ? HistoryColor : History;
            } else if (route.name === 'TrackOrder') {
              IconName = focused ? TrackOrderColor : TrackOrders;
            } else if (route.name === 'Price') {
              IconName = focused ? RupeesColor : Rupees;
            }
            return (
              <IconName
                style={{
                  width: 34,
                  height: 34,
                  color: color,
                }}
              />
            );
          },
        })}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="History"
          component={TopBarScreen}
          // options={{headerShown: false}}
        />
        <Tab.Screen
          name="TrackOrder"
          component={TrackOrder}
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Price"
          component={PricesScreen}
          options={{headerShown: false}}
        />
      </Tab.Navigator>
    );
  };

  const TopBarScreen = () => {
    return (
      <TopTab.Navigator
        screenOptions={{
          tabBarPressColor: 'transparent',
          tabBarPressOpacity: 1,
          tabBarActiveTintColor: Colors.white,
          tabBarInactiveTintColor: Colors.darkBlue,
          tabBarActiveBackgroundColor: Colors.darkBlue,
          tabBarLabelStyle: {
            fontSize: 15,
            lineHeight: scale(24),
            letterSpacing: scale(0.5),
            fontFamily: 'Poppins-SemiBold',
            textTransform: 'none',
          },
          tabBarStyle: {
            backgroundColor: Colors.white40,
            height: 50,
            elevation: 0,
            marginHorizontal: 15,
            borderRadius: 10,
            shadowColor: Colors.boxShadow,
            shadowOffset: {width: 0, height: 1},
            shadowOpacity: 0.8,
            shadowRadius: 9,
            elevation: 9,
            borderWidth: 0.4,
            borderColor: Colors.boxShadow,
          },
          tabBarIndicatorStyle: {
            backgroundColor: Colors.darkBlue,
            height: '100%',
            borderRadius: 10,
          },
        }}>
        <TopTab.Screen name="Pending" component={Pending} />
        <TopTab.Screen name="Delivered" component={Delivered} />
        <TopTab.Screen name="Canceled" component={Cancelled} />
      </TopTab.Navigator>
    );
  };
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Bottom" component={BottomNav} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="FilterScreen" component={FilterScreen} />
      <Stack.Screen name="UserDetailForm" component={UserDetailForm} />
      <Stack.Screen name="UserDetails" component={UserDetails} />
    </Stack.Navigator>
  );
};

export default AppNavigation;
