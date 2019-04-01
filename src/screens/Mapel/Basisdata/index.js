import React, {Component} from 'react';
import { Text, Left, Right, Icon, Card, CardItem  } from 'native-base';
import {  StyleSheet, ScrollView, Image ,TouchableOpacity, TouchableHighlight, FlatList, View } from 'react-native';
import { CreateStackNavigator } from 'react-navigation';

class ListKD extends Component {
  render(){
    return(
            <CardItem style={style.list}>
              <Left style={{flex:5}}>
                <Text>{this.props.kd}</Text>
              </Left>
              <Right style={{flex: 1}}>
                <Icon name="arrow-forward" />
              </Right>
             </CardItem>
    );
  }
}

class BasisData extends Component {
  static navigationOptions = {
    title: 'List Materi',
    headerStyle: {
      backgroundColor: '#312a72',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontFamily: 'Roboto_medium'
    },
  };

  render(){
    const { navigation } = this.props;
    const Mapel = navigation.getParam('namamapel','MATAPELAJARAN');
    return(
      <ScrollView>
        <View style={style.box}>
            <Icon name='md-cloud' style={{color: '#fff', fontSize: 60, alignSelf:'center', marginTop: 15}}></Icon>
            <Text style={style.homeTitle}>{this.props.navigation.getParam('namamapel', 'Materi')}</Text>
        </View>
        <View style={{padding:10}}>
        <Card>     
          <TouchableOpacity onPress={()=> this.props.navigation.navigate('bd32slide13') }>
            <ListKD kd='Struktur Hirarki Basisdata' />
          </TouchableOpacity>
          <TouchableOpacity onPress={ () => this.props.navigation.navigate('bd32slide1')} >
            <ListKD kd='Diagram Hubungan Antar Entitas' />
          </TouchableOpacity>
          <ListKD kd='Perintah DDL, DML, dan DCL' />
          <ListKD kd='Tipe Data Pada Basisdata' />
          <ListKD kd='Teknik Normalisasi Data' />
          <ListKD kd='Record, Table, dan Field' />  
          </Card>
        </View>
      </ScrollView>
    );
  }
}

const style = StyleSheet.create({
  list: {
    height: 70,
    fontSize: 14,
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

export default BasisData;