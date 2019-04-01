/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import SplashScreen from './src/screens/Splashscreen/index';
import App from './src/screens/App';
import { createStackNavigator , createAppContainer, createSwitchNavigator } from 'react-navigation';
import loginPage from './src/screens/Splashscreen/loginPage'
import daftarPage from './src/screens/Splashscreen/daftar';


const Splashawal = createSwitchNavigator({
  Splash : SplashScreen,
  Home: App,
  loginPage: loginPage,
  daftarPage: daftarPage,
},{
  initialRouteName:'Splash',
  headerMode: 'none'
});

// const Loading = createAppContainer(Splashawal);
export default Loading = createAppContainer(Splashawal);
// export default class loading extends React.Component {
//   render() {
//     return(
//       <View>
//         <Loading />
//       </View>
//     ); 
//   }
// }