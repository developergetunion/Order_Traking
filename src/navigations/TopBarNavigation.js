import {View, Text} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Delivered from '../screens/History/Delivered';
import Pending from '../screens/History/Pending';
import Cancelled from '../screens/History/Cancelled';

const TopTab = createMaterialTopTabNavigator();

const TopBarNavigation = () => {
  return (
    <TopTab.Navigator>
      <TopTab.Screen name="Pending" component={Pending} />
      <TopTab.Screen name="Delivered" component={Delivered} />
      <TopTab.Screen name="Cancelled" component={Cancelled} />
    </TopTab.Navigator>
  );
};

export default TopBarNavigation;
