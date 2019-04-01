import React , {Component} from 'react';
import {ScrollView, StyleSheet } from 'react-native';
import {Text, Radio, List, ListItem, Left, Right, Button, Icon, View } from 'native-base';

class Materi1 extends Component {
  static navigationOptions= {
    title: 'Studi Kasus',
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
          <Text style={styles.subtitle}>Ayo kita buat ERD dengan studi kasus dibawah ini: </Text>
          <Text style={styles.bodyContent}>1.  Suatu Sekolah mempunyai banyak siswa.</Text>
          <Text style={styles.bodyContent}>2.  Sekolah juga mempunyai banyak guru.</Text>
          <Text style={styles.bodyContent}>3.  Setiap siswa tidak harus mengikuti suatu mata pelajaran..</Text>
          <Text style={styles.bodyContent}>4.  Setiap mata pelajaran diajarkan oleh beberapa orang guru.</Text>
          <Text style={styles.bodyContent}>5.  Setiap guru mengajar banyak siswa di kelas.</Text>
          <Text style={styles.subtitle}>Catatlah Studi kasus ini di laporan sederhana.</Text>
        </ScrollView>
        <Button rounded primary style={styles.button} onPress={ () => this.props.navigation.navigate('bd32slide4')} >
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
    flex:1,
    padding: 15,
    paddingTop: 15,
    // paddingBottom: 50,
    backgroundColor: '#fff',
    alignContent: 'center'
    // borderRounded: 5,
  },
  title: {
    fontSize: 20,
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