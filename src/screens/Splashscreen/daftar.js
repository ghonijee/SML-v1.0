import React, { Component } from 'react'
import { StyleSheet, View, Image, ScrollView, Dimensions } from 'react-native'
import { Button, Input, Form, Item, Label, H2, Text } from "native-base";
import KeyboardShift from './KeyboardShift';
const {height, width } = Dimensions.get('window');
import firebase from 'react-native-firebase';

// const config = {
//   apiKey: "AIzaSyBVlstHuTtJ1WMQKhSGGpNvp3OEjL-GsOs",
//   authDomain: "solomobilelearning.firebaseapp.com",
//   databaseURL: "https://solomobilelearning.firebaseio.com",
//   projectId: "solomobilelearning",
//   storageBucket: "solomobilelearning.appspot.com",
//   messagingSenderId: "1097040946073"
// };

// firebase.initializeApp(config);

export default class daftarPage extends Component {
  constructor(){
    super()
    this.state = ({
      email: '',
      password:''
    })
  }

  daftar = (email, password) => {
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((user) => {
        this.props.navigation.navigate('Splash');
        // If you need to do anything with the user, do it here
        // The user will be logged in automatically by the
        // `onAuthStateChanged` listener we set up in App.js earlier
      })
      .catch((error) => {
        const { code, message } = error;
        // For details of error codes, see the docs
        // The message contains the default Firebase string
        // representation of the error
      });
  }
  render() {
    return (
      <KeyboardShift>
        {() => (
          <View style={styles.container}>
          {/* <ScrollView style={styles.scroll}> */}
          <Image source={require('./sml-logo2.png')}  style={styles.logo} />
          <H2 style={{color: '#fff', textAlign: 'center', paddingBottom:5 }}>REGISTER</H2>
            <Form style={styles.form}>
              <Item rounded style={styles.Item}>
                <Label style={styles.label}>Username :</Label>
                <Input style={styles.Input} onChangeText={(email)=> this.setState({email})} />
              </Item>
              <Item rounded style={styles.Item}>
                <Label style={styles.label}>Password :</Label>
                <Input secureTextEntry={true} style={styles.Input}  onChangeText={(password) => this.setState({password})}  />
              </Item>
              <View style={{alignItems: 'center'}}>
                <Button success block rounded onPress={ () => this.daftar(this.state.email , this.state.password)}>
                  <Text style={{fontSize: 20, color:'#fff', fontWeight: 'bold'}}>Daftar</Text>
                </Button>
              </View>
            </Form>
            {/* </ScrollView> */}
        </View>
        )}
      </KeyboardShift>
      
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    left: 0,
    position: 'absolute',
    top: 0,
    width: '100%',
    // marginBottom: 0,
    // height: height,
    // width: width,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#312a72',
  },
  scroll:{
    height: height,
    
  },
  logo : {
    alignSelf: 'center',
    width: 140,
    height: 100,
    marginBottom: 25,
    // marginTop: 80
  },
  form: {
    // flex: 1
  },
  Input: {
    color: '#fff'
  },
  Item: {
    margin: 10,
    width: 300,
    // flexDirection: 'column'
  },
  label: {
    color: '#fff',
    alignItems: 'center',
    marginLeft: 20
  },
})
