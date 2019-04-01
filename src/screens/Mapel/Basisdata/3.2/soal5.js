import React , {Component} from 'react';
import {ScrollView, StyleSheet, Alert, Platform } from 'react-native';
import {Text, Radio, List, ListItem, Left, Right, View } from 'native-base';
import { RadioButton , Button, Headline } from 'react-native-paper';


class Soal1 extends Component {
  static navigationOptions= {
    title: 'Quiz 5',
    headerStyle: {
      backgroundColor: '#312a72',
      fontFamily: 'Romanttica'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontFamily: 'Romanttica'
    },
  };

  constructor(props) {
    super(props);
    this.state = { isShowingText: true, value: '' };
  }

  render(){
    return(
      <View style={styles.container}>
        <View style={styles.boxMateri}>
          <View style={{flex:8}}>
          {/* <Text style={styles.title}>Hubungan Relasi Antar Entitas</Text> */}
          <Text>
            Hubungan entitas dimana hanya boleh berhubungan satu entitas dengan satu entitas lainnya adalah?...
          </Text>
          <RadioButton.Group
            onValueChange={value => this.setState({ value })}
            value={this.state.value}
          >
            <View style={{flexDirection:'row'}}>
              <RadioButton value="1" primary />
              <Text style={{padding: 7, fontSize: 15, flex: 7}}>
              One to Two                         
              </Text>
            </View>
            <View style={{flexDirection:'row'}}>
              <RadioButton value="2" primary />
              <Text style={{padding: 7, fontSize: 15, flex: 7}}>
              One to Many
              </Text>
            </View>
            <View style={{flexDirection:'row'}}>
              <RadioButton value="3" primary />
              <Text style={{padding: 7, fontSize: 15, flex: 7}}>
              Many to One               
              </Text>
            </View>
            <View style={{flexDirection:'row'}}>
              <RadioButton value="4" primary />
              <Text style={{padding: 7, fontSize: 15, flex: 7}}>
              One to One  
              </Text>
            </View>
          </RadioButton.Group>
          </View>
          <View style={{flex:1}}>
            <Button style={{flex:1, backgroundColor: '#342d7a'}} mode="contained" onPress={()=> {
              if (this.state.value == '4') {
                Alert.alert('Benar! Anda boleh lanjut.');
                this.props.navigation.navigate('bd32slide13');
              } else {
                Alert.alert('Salah! Silahkan baca lagi materinya.');
              }
            }}>
              <Headline style={styles.submit}>SUBMIT</Headline>
            </Button>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding: 20,
    backgroundColor: '#f1f0f4',
  },
  boxMateri: {
    flex: 1,
    padding: 15,
    paddingTop: 15,
    backgroundColor: '#fff',
    // borderRounded: 5,
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: '800',
    textAlign: 'center',
  },
  submit: {
    color: '#fff',
    fontSize: 18,
  }
});

export default Soal1;