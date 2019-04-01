import React , {Component} from 'react';
import {ScrollView, StyleSheet } from 'react-native';
import {Text, Radio, List, ListItem, Left, Right, Button, Icon, View } from 'native-base';

class Materi1 extends Component {
  static navigationOptions= {
    title: 'ERD',
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
          <Text style={styles.title}>Hubungan Relasi Antar Entitas</Text>
          <Text style={styles.bodyContent}>
            Hubungan relasi antar entitas atau biasa disebut ERD adalah suatu model untuk menjelaskan mengenai hubungan antar data dalam basis data 
            berdasarkan objek-objek dasar data yang memiliki hubungan antar relasi.
          </Text>
          <Text style={styles.bodyContent}>
            ERD merupakan suatu model jaringan yang menggunakan susunan data yang disimpan pada sistem secara abstrak. ERD juga menggambarkan hubungan 
            antara satu entitas yang memiliki sejumlah atribut dengan entitas yang lain dalam suatu sistem yang terintegrasi.
          </Text>
          <Text style={styles.bodyContentEnd}>
            ERD digunakan oleh perancang sistem untuk memodelkan data yang nantinya akan dikembangkan menjadi database. Model data ini juga akan membantu pada saat 
            melakukan analisis dan perancangan database, karena model data ini akan menunjukkan bermacam-macam data yang dibutuhkan dan 
            hubungan antar data. ERD ini juga merupakan model konseptual yang dapat mendeskripsikan hubungan antara file yang digunakan untuk 
            memodelkan struktur data serta hubungan antar data.
          </Text>
        </ScrollView>
        <Button rounded primary style={styles.button} onPress={ () => this.props.navigation.navigate('SoalErd')} >
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
    fontSize: 16,
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