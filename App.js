import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppNavigation from './src/navigations/AppNavigaton';
import {NavigationContainer} from '@react-navigation/native';
import store from './src/redux/store';
import {Provider} from 'react-redux';

const App = () => {
  return (
    <View style={styles.container}>
      <Provider store={store}>
        <NavigationContainer>
          <AppNavigation />
        </NavigationContainer>
      </Provider>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
