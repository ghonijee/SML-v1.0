import React , {Component} from 'react';
import {ScrollView, StyleSheet, Image } from 'react-native';
import {Text, Radio, List, ListItem, Left, Right, Button, Icon, View } from 'native-base';

class Materi1 extends Component {
  static navigationOptions= {
    title: 'Attribut',
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
          Atribut sering juga disebut sebagai properti, merupakan keterangan-keterangan yang terkait 
          pada sebuah entitas yang perlu dsimpan sebagai database.
          </Text>
          <Text style={styles.bodyContent}>
          Atribut, merupakan pendeskripsian karakteristik dari ENTITAS. 
          Atribut digambarkan dalam bentuk lingkaran atau elips dengan mengikuti aturan sebagai berikut:
          </Text>
            <Text style={styles.bodyContent}>1.  Atribut dinyatakan dengan simbol ellipse.</Text>
            <Text style={styles.bodyContent}>2.  Nama atribut ditulis dalam simbol ellipse.</Text>
            <Text style={styles.bodyContent}>3.  Nama atribut berupa kata benda tunggal.</Text>
            <Text style={styles.bodyContent}>4.  Nama atribut sebisa mungkin menggunakan nama yang mudah dipahami dan padat menyatakan maknanya dengan jelas.</Text>
            <Text style={styles.bodyContent}>5.  Atribut dihubungkan dengan entitas yang sesuai dengan menggunakan garis.</Text>
            <Text style={styles.bodyContent}>Simbolnya adalah : </Text>
            <View style={{height: 63, width: 150, alignSelf: 'center'}}>
              <Image source={{ uri : 'https://farm8.staticflickr.com/7913/32550908467_b93f402d5c_m.jpg'}} style={{width: null, height: 63}} />
            </View>
            <Text>Berikut adalah contoh Atribut : </Text>
            <View style={{height: 76, width: 258, marginTop: 8, marginBottom: 50, alignSelf: 'center', paddingBottom: 100}}>
              <Image source={{ uri : 'https://farm8.staticflickr.com/7925/32550955367_782f8514a6_m.jpg'}} style={{width: null, height: 76}} />
            </View>


        </ScrollView>
        <Button rounded primary style={styles.button} onPress={ () => this.props.navigation.navigate('SoalAtribut')} >
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