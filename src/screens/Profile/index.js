import React, {Component} from 'react';
import {Platform, StyleSheet, View,  TouchableOpacity } from 'react-native';
import {Icon, Button, Text, Content, Thumbnail,Card, CardItem, Header, Right } from 'native-base';
import firebase from 'react-native-firebase';

export default class App extends Component {
  static navigationOptions = {
    title: 'Profile',
  };

  state = { currentUser: null }
  componentDidMount() {
    const { currentUser } = firebase.auth()
    this.setState({ currentUser })
  }

  update = () => {
    const user = firebase.auth().currentUser;
    user.updateProfile({
      displayName: "Adie Yunus Azizah",
      photoURL: "https://example.com/jane-q-user/profile.jpg"
    }).then(function() {
      // Update successful.
    }).catch(function(error) {
      // An error happened.
    });
  }
  render() {
    const { currentUser } = this.state
    return (
      <View style={styles.container}>
        <View style={styles.box}>
          <Thumbnail style={styles.foto} large source={{uri: currentUser && currentUser.photoUrl }}/>
          <Text style={{fontSize: 20, color: '#fff', textAlign:'center'}}>{currentUser && currentUser.email}</Text>
        </View>
        <Card>
            <CardItem>
              <Icon active name="md-eye" />
              <Text>{currentUser && currentUser.uid}</Text>
             </CardItem>
            <CardItem>
              <Icon active name="md-person" />
              <Text>{currentUser && currentUser.displayName}</Text>
             </CardItem>
            <CardItem>
              <Icon active name="md-mail" />
              <Text>{currentUser && currentUser.email}</Text>
             </CardItem>
           </Card>
        <Button warning rounded style={styles.logout} onPress={ () => firebase.auth().signOut() }>
          <Text>Logout</Text>
        </Button>
        {/* <Button warning rounded style={styles.logout} onPress={ () => this.update }>
          <Text>Update</Text>
        </Button> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f0f4',
  },
  titleCard: {
    fontSize: 15,
    justifyContent: 'center',
  },
  textSubtitle: {
    fontSize: 12,
  },
  box : {
    height: 190,
    backgroundColor: '#342d7a',
    position: 'relative',
    alignItems: 'center',
    // marginBottom: -80
  },
  homeTitle: {
    color: '#fff',
    flex: 1,
    alignSelf: 'center',
    fontSize: 25,
    fontFamily: 'Roboto_medium',
    fontWeight: '700',
  },
  foto: {
    marginTop: 25,
    marginBottom: 10,
    width: 100,
    height: 100
  },
  logout: {
    margin: 10,
    alignSelf: 'center'
  }
});