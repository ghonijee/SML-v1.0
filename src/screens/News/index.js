import React, {Component} from 'react';
import {Platform, StyleSheet, View, Button, TouchableOpacity } from 'react-native';
import {FlatList} from 'react-native'
import {List, ListItem, Card, CardItem, Body, Content, Icon,Text } from 'native-base'
import db from '../../firebase'

let newssRef = db.ref('/news');

export default class App extends Component {
  static navigationOptions = {
    title: 'News',
  };

  constructor(){
    super()
    this.state = {
      newss: []
    }
  }

  componentDidMount() {
    newssRef.on('value', snap => {
      let data = snap.val();
      let newss = Object.values(data);
      this.setState({ newss });
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.box}>
          <Icon name='md-notifications' style={{color: '#fff', fontSize: 60, alignSelf:'center', marginTop: 15}}></Icon>
          <Text style={styles.homeTitle}>INFORMASI</Text>
        </View>
        <Content style={{padding: 10 , paddingBottom: 20}}>
        {this.state.newss.map((item, index) => {
          return (
            <View key={index} >
              <Card>
                <CardItem header style={{flexDirection: 'row'}}>
                  <Text style={{flex: 1}}>Dari : {item.from}</Text>
                  <Text style={{flex: 1}}>Untuk : {item.to}</Text>
                </CardItem>
                <CardItem>
                  <Body>
                    <Text>
                    {item.berita}
                    </Text>
                  </Body>
                </CardItem>
              </Card>
            </View>
          );
        })}
        </Content>
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
    // flex: 1,
    backgroundColor: '#342d7a',
    position: 'relative',
    marginBottom: -80
  },
  homeTitle: {
    color: '#fff',
    flex: 1,
    alignSelf: 'center',
    fontSize: 25,
    fontFamily: 'Roboto_medium',
    fontWeight: '700',
  },
});