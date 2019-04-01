import React , {Component} from 'react';
import {ScrollView, StyleSheet, Image } from 'react-native';
import {Text, Radio, List, ListItem, Left, Right, Button, Icon, View } from 'native-base';

class Materi1 extends Component {
  static navigationOptions= {
    title: 'One to One',
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
            Hubungan satu ke satu (one to one) berarti setiap himpunan entitas hanya boleh berhubungan dengan satu himpunan entitas lainnya.
          </Text>
          <Text style={styles.bodyContent}>
            Berikut adalah contoh dari penerapan One to One
          </Text>
            <View style={{height: 260, width: 95, alignSelf: 'center'}}>
              <Image source={{ uri : 'https://farm8.staticflickr.com/7811/40527121783_37368e456a_m.jpg'}} style={{width: null, height: 245}} />
            </View>
            <Text style={styles.bodyContent}>Berikut adalah contoh lain one to one : </Text>
            <View style={{height: 179, width: 240, marginTop: 8, alignSelf: 'center'}}>
              <Image source={{ uri : 'http://mfikri.com/assets/images/8400d4f078e0c06d6f29f4b972cf4fe4.jpg'}} style={{width: null, height: 174}} />
            </View>
            <Text style={styles.bodyContentEnd}>Pada gambar diatas dapat dilihat bahwa satu himpunan entitas suami hanya berhubungan tepat dengan 
              satu himpunan entitas istri. Dalam arti kata suami atau istri tidak boleh selingkuh.</Text>
        </ScrollView>
        <Button rounded primary style={styles.button} onPress={ () => this.props.navigation.navigate('bd32slide11')} >
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
    paddingBottom: 80
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