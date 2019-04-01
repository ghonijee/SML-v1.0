import React , {Component} from 'react';
import {ScrollView, StyleSheet, Image } from 'react-native';
import {Text, Radio, List, ListItem, Left, Right, Button, Icon, View } from 'native-base';

class Materi1 extends Component {
  static navigationOptions= {
    title: 'Entitas',
    headerStyle: {
      backgroundColor: '#312a72',
      fontFamily: 'Romanttica'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontFamily: 'Romanttica'
    },
  };

  render(){
    return(
      <View style={styles.container}>
        <ScrollView style={styles.boxMateri}>
          <Text style={styles.bodyContent}>
            Entitas, merupakan Objek yang mewakili sesuatu yang Nyata dan dapat dibedakan dari sesuatu yang lain. 
            Objek dasar dapat berupa orang, benda, atau hal lain yang keterangannya perlu disimpan dalam database.
          </Text>
          <Text style={styles.bodyContent}>
            Untuk menggambarkan entitas dilakukan dengan cara mengikuti aturan berikut:
          </Text>
            <Text style={styles.bodyContent}>1.  Entitas dinyatakan dengan simbol persegi panjang.</Text>
            <Text style={styles.bodyContent}>2.  Nama entitas berupa kata benda tinggal</Text>
            <Text style={styles.bodyContent}>3.  Nama entitas sebisa mungkin menggunakan nama yang mudah dipahami dan menyatakan maknanya dengan jelas.</Text>
            <Text style={styles.bodyContent}>Simbolnya adalah : </Text>
            <View style={{height: 83, width: 169, alignSelf: 'center'}}>
              <Image source={{ uri : 'https://farm8.staticflickr.com/7875/40526926433_7fa2a38be3_m.jpg'}} style={{width: null, height: 83}} />
            </View>
            <Text>Berikut adalah contoh Entitas : </Text>
            <View style={{height: 29, width: 250, marginTop: 8, marginBottom: 50, alignSelf: 'center'}}>
              <Image source={{ uri : 'https://farm8.staticflickr.com/7827/33616313818_1d75178899_m.jpg'}} style={{width: null, height: 29}} />
            </View>


        </ScrollView>
        <Button rounded primary style={styles.button} onPress={ () => this.props.navigation.navigate('SoalEntitas')} >
            <Icon name='arrow-forward' style={{fontSize: 36, alignContent: 'center', justifyContent: 'center'}}></Icon>
        </Button>
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
    padding: 25,
    paddingTop: 15,
    backgroundColor: '#fff',
    alignContent: 'center'
    // borderRounded: 5,
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: '800',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    margin: 10,
    fontWeight: '800',
  },
  bodyContent: {
    fontSize: 15,
    padding: 5
  },
  bodyContentEnd: {
    fontSize: 16,
    padding: 5,
    paddingBottom: 100
  },
  button: {
    position: 'absolute',
    left: 'auto',
    right: 20,
    bottom: 20,
    top: 'auto',
    height: 58,
    width: 60,
    flex:1
  }
});

export default Materi1;