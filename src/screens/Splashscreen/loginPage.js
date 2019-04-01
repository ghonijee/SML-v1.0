import React, { Component } from 'react'
import { StyleSheet, View, Image, ScrollView, Dimensions, TouchableHighlight } from 'react-native'
import { Button, Input, Form, Item, Label, H2, Text } from "native-base";
import KeyboardShift from './KeyboardShift';
const {height, width } = Dimensions.get('window');
import firebase from 'react-native-firebase';
import Daftar from './daftar';
// import { TouchableOpacity } from 'react-native-gesture-handler';

export default class loginPage extends Component {

  constructor(){
    super()
    this.state = ({
      email: '',
      password:''
    })
  }

  login = (email, password) => {
      firebase.auth().signInWithEmailAndPassword(email, password)
      .then((user) => {
        this.props.navigation.navigate('Splash');
      }).catch((error) => {
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
          <H2 style={{color: '#fff', textAlign: 'center', paddingBottom:5 }}>LOGIN</H2>
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
                <Button success block rounded onPress={ () => this.login(this.state.email , this.state.password)}>
                  <Text style={{fontSize: 20, color:'#fff', fontWeight: 'bold'}}>Login</Text>
                </Button>
                <TouchableHighlight onPress={()=> {
                  // return <Daftar />
                  this.props.navigation.navigate('daftarPage');
                } 
              }>
                  <Text style={{color : '#fff', padding: 5 }}>Daftar disini</Text>
                </TouchableHighlight>
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
