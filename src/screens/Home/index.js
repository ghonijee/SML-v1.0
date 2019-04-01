import React, {Component} from 'react';
import { Text, View, Button, Content, Card, CardItem, Body, Icon  } from 'native-base';
import {  StyleSheet, ScrollView, Image, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback } from 'react-native';
// import {TouchableRipple} from 'react-native-paper';

class ListMapel extends Component {
  render() {
    return (
      <Card style={{ flex: 4, flexDirection:'row'}}>
            <CardItem header style={{ flex:1 }}>
              <Image source={{uri: this.props.foto }} style={{ width: 65 , height: 65 }} />
            </CardItem>
            <CardItem style={{ flex: 3}}>
              <Body style={styles.titleCard}>
                <Text>
                  {this.props.nama}
                </Text>
                <Text style={styles.textSubtitle}>
                  {this.props.detail}
                </Text>
              </Body>
            </CardItem>
         </Card>
    );
  }
}

export default class Home extends Component {
  static navigationOptions= {
    title: 'SML 1',
    headerStyle: {
      backgroundColor: '#312a72',
      fontFamily: 'Romanttica'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontFamily: 'Romanttica'
    },
  };
  
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.box}>
          <Icon name='md-book' style={{color: '#fff', fontSize: 60, alignSelf:'center', marginTop: 15}}></Icon>
          <Text style={styles.homeTitle}>MATAPELAJARAN</Text>
        </View>
        <Content style={{padding: 10 , paddingBottom: 20}}>
          <TouchableOpacity  onPress={ () => {
            this.props.navigation.navigate('Basisdata',{ namamapel : 'BASISDATA'}); 
            }} underlayColor="rgb(52, 45, 122)">
            <ListMapel nama='Basis Data' detail='Pembelajaran konsep database dan Konsep MySQL' foto='asset:/image/001-server.png' />
          </TouchableOpacity >
            <TouchableOpacity  onPress={ () => this.props.navigation.navigate('Basisdata')} >
            <ListMapel nama='Pemograman Berbasis Objek' detail='Pembelajaran untuk memahami konsep pemograman OOP' foto='asset:/image/004-java.png' />
            </TouchableOpacity>
            <TouchableOpacity onPress={ () => this.props.navigation.navigate('Basisdata')} >
            <ListMapel nama='Pemodelan Perangkat Lunak' detail='Pembelajaran tentang pengembangan sebuah software' foto='asset:/image/003-pemodelan.png' />
            </TouchableOpacity>
            <TouchableOpacity onPress={ () => this.props.navigation.navigate('Basisdata')} >
            <ListMapel nama='Pemograman Web dan Mobile' detail='Pembelajaran tentang mobile apps dan web apps' foto='asset:/image/002-web.png' />
            </TouchableOpacity>
            <TouchableOpacity onPress={ () => this.props.navigation.navigate('Basisdata')} >
            <ListMapel nama='Pengembangn Inovasi Kreatif' detail='Pembelajaran untuk dasar menjadi wirausaha' foto='asset:/image/005-creative.png' />
            </TouchableOpacity>
        </Content>
      </ScrollView>
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
    flex: 1,
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