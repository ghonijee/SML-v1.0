import React , {Component} from 'react';
import {ScrollView, StyleSheet, Image } from 'react-native';
import {Text, Radio, List, ListItem, Left, Right, Button, Icon, View } from 'native-base';

class Materi1 extends Component {
  static navigationOptions= {
    title: 'Relasi',
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
            Relasi, merupakan Hubungan diantara sejumlah ENTITAS yang berasal dari himpunan entitas yang berbeda.
          </Text>
          <Text style={styles.bodyContent}>
            Aturan penggambaran relasi antar entitas adalah:
          </Text>
            <Text style={styles.bodyContent}>1.  Relasi dinyatakan dengan simbol belah ketupat.</Text>
            <Text style={styles.bodyContent}>2.  Nama relasi dituliskan di dalam simbol belah ketupat.</Text>
            <Text style={styles.bodyContent}>3.  Relasi menghubungkan dua entitas.</Text>
            <Text style={styles.bodyContent}>4.  Nama relasi menggunakan kata kerja aktif tunggal.</Text>
            <Text style={styles.bodyContent}>5.  Nama relasi sebisa mungkin menggunakan nama yang mudah dipahami dan dapat menyatakan maknanya dengan jelas.</Text>
            <Text style={styles.bodyContent}>Simbolnya adalah : </Text>
            <View style={{height: 240, width: 238, alignSelf: 'center'}}>
              <Image source={{ uri : 'https://farm8.staticflickr.com/7840/33616340598_46db5f2b7d_m.jpg'}} style={{width: null, height: 240}} />
            </View>
            <Text>Berikut adalah contoh Entitas : </Text>
            <View style={{height: 179, width: 250, marginTop: 8, marginBottom: 50, alignSelf: 'center'}}>
              <Image source={{ uri : 'https://farm8.staticflickr.com/7806/46577690525_b11c866b74_m.jpg'}} style={{width: null, height: 179}} />
            </View>


        </ScrollView>
        <Button rounded primary style={styles.button} onPress={ () => this.props.navigation.navigate('SoalRelasi')} >
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