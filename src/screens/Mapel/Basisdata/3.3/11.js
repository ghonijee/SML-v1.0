import React , {Component} from 'react';
import {ScrollView, StyleSheet, Image } from 'react-native';
import {Text, Radio, List, ListItem, Left, Right, Button, Icon, View } from 'native-base';

class Materi1 extends Component {
  static navigationOptions= {
    title: 'One to Many',
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
            Hubungan satu ke banyak (one to many) berarti  satu dari setiap himpunan entitas boleh berhubungan dengan banyak himpunan entitas lainnya.
          </Text>
          <Text style={styles.bodyContent}>
          Berikut adalah contoh dari penerapan One to Many : 
          </Text>
            <View style={{height: 260, width: 101, alignSelf: 'center'}}>
              <Image source={{ uri : 'https://farm8.staticflickr.com/7849/40527121603_162fb7a540_m.jpg'}} style={{width: null, height: 240}} />
            </View>
            <Text>Berikut adalah contoh lain one to many : </Text>
            <View style={{height: 139, width: 240, marginTop: 8, marginBottom: 50, alignSelf: 'center'}}>
              <Image source={{ uri : 'http://mfikri.com/assets/images/e59eb3c0dad705ab197735ece0bed9d9.jpg'}} style={{width: null, height: 174}} />
            </View>
            <Text style={styles.bodyContentEnd}>
              Pada gambar diatas dapat dilihat bahwa satu himpunan ibu memiliki banyak hubungan ke himpunan entitas anak. 
              Dalam arti kata satu ibu bisa memiliki banyak anak dan satu anak hanya dimiliki oleh satu ibu.
            </Text>
        </ScrollView>
        <Button rounded primary style={styles.button} onPress={ () => this.props.navigation.navigate('bd32slide9')} >
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