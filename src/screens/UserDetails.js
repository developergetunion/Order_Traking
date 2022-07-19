import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Colors from '../constant/Colors';
import OutletInfoDetail from '../components/OutletInfoDetail';
import Card from '../components/Card';
import CartCard from '../components/CartCard';
import CheckoutCard from '../components/CheckoutCard';

const UserDetails = () => {
  return (
    <View style={styles.container}>
      <View>
        <OutletInfoDetail />
      </View>
      <View style={{marginHorizontal: 15}}>
        <CartCard />
      </View>
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          paddingHorizontal: 10,
        }}>
        {/* <CheckoutCard /> */}
      </View>
    </View>
  );
};

export default UserDetails;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.backgroundColor,
    flex: 1,
    position: 'relative',
  },
});
