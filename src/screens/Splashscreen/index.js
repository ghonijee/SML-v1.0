import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ActivityIndicator, TouchableOpacity, Image } from 'react-native';
import {H3} from 'native-base'
import firebase from 'react-native-firebase';
// import console = require('console');

export default class App extends Component {
  // constructor() {
  //   super();
  //   this.unsubscriber = null;
  //   this.state = {
  //     user: null,
  //   };
  // }
  // componentDidMount() {
  //   this.unsubscriber = firebase.auth().onAuthStateChanged((user) => {
  //     this.setState({user});
  //   });
  // }

  // componentWillUnmount() {
  //   if (this.unsubscriber) {
  //     this.unsubscriber();
  //   }
  // }
  /**
   * Listen for any auth state changes and update component state
   */
  componentDidMount() {
    setTimeout(
      () => {
        firebase.auth().onAuthStateChanged(user => {
          this.props.navigation.navigate(user ? 'Home' : 'loginPage')
        })
      },
      3 * 1000
    );
  }
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('./sml-logo2.png')}  style={styles.logo} />
        <H3 style={styles.learning}>SOLO MOBILE LEARNING</H3>
        {/* <TouchableOpacity onPress={ () => this.props.navigation.navigate('loginPage')} >
          <Text  style={styles.next}>Next</Text>
        </TouchableOpacity> */}
        <ActivityIndicator size="large" style={styles.loading} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#312a72',
  },
  logo : {
    width: 180,
    height: 140
  },
  welcome: {
    fontSize: 18,
    textAlign: 'center',
    color: '#fff',
  },
  learning: {
    // fontSize: 20,
    marginTop: 25,
    textAlign: 'center',
    color: '#fff',
  },
  next: {
    marginTop: 10,
    textAlign: 'center',
    color: '#fff',
    fontSize: 22
  },
  loading: {
    marginTop: 30
  }
});