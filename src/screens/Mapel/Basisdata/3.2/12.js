import React , {Component} from 'react';
import {ScrollView, StyleSheet, Image } from 'react-native';
import {Text, Radio, List, ListItem, Left, Right, Button, Icon, View } from 'native-base';

class Materi1 extends Component {
  static navigationOptions= {
    title: 'Many to Many',
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
          Hubungan banyak ke banyak (many to many) berarti setiap himpunan entitas boleh berhubungan dengan banyak himpunan entitas lainnya dan sebaikanya.
          </Text>
          <Text style={styles.bodyContent}>
          Berikut adalah contoh dari penerapan Many to Many : 
          </Text>
            <View style={{height: 260, width: 101, alignSelf: 'center'}}>
              <Image source={{ uri : 'https://farm8.staticflickr.com/7836/47440233272_f98faf83cd_m.jpg'}} style={{width: null, height: 240}} />
            </View>
            <Text>Berikut adalah contoh lain Many to many : </Text>
            <View style={{height: 139, width: 240, marginTop: 8, marginBottom: 50, alignSelf: 'center'}}>
              <Image source={{ uri : 'http://mfikri.com/assets/images/08f801a4f0c7133cc6f6302f6c60abb7.jpg'}} style={{width: null, height: 174}} />
            </View>
            <Text style={styles.bodyContent}>
            Pada gambar diatas dapat dilihat bahwa satu himpunan mahasiswa memiliki banyak hubungan ke himpunan entitas matakuliah dan satu dari himpunan matakuliah memiliki banyak hubungan ke himpunan entitas mahasiswa.
            </Text>
            <Text style={styles.bodyContentEnd}>
              Dalam arti kata satu mahasiswa bisa memiliki banyak matakuliah dan satu matakuliah bisa dimiliki oleh banyak mahasiswa.
            </Text>
        </ScrollView>
        <Button rounded primary style={styles.button} onPress={ () => this.props.navigation.navigate('SoalKardinalitas')} >
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
    fontSize: 15,
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