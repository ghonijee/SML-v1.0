import React , {Component} from 'react';
import {ScrollView, StyleSheet } from 'react-native';
// import {WebView } from 'react-native-webview';
import {Text, Radio, List, ListItem, Left, Right, Button, Icon, View } from 'native-base';
import HTML from 'react-native-render-html'

class Materi1 extends Component {
  static navigationOptions= {
    title: 'Pendahuluan',
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
          <Text style={styles.subtitle}>Komptensi Dasar</Text>
          <Text style={styles.bodyContent}>3.2  Memahami bentuk diagram hubungan antar entitas pada basis data</Text>
          <Text style={styles.bodyContent}>4.2  Mendiskusikan hubungan antar entitas dan keterkaitan antar data dalam diagram ERD	</Text>
          <Text style={styles.subtitle}>Tujuan Pembelajaran</Text>
          <Text style={styles.bodyContent}>1. Melalui presentasi, peserta didik dapat memahami diagram entitas antar data dengan rasa khidmat dan santun.</Text>
          <Text style={styles.bodyContent}>2. Melalui presentasi, peserta didik dapat memahami simbol-simbol entitas, atribut entitas, dan hubungan antar entitas dengan rasa khidmat dan santun.</Text>
          <Text style={styles.bodyContent}>3. Melalui presentasi, peserta didik dapat memahami kardinalitas hubungan antar entitas dengan rasa khidmat dan santun.</Text>
          <Text style={styles.bodyContent}>4. Melalui diskusi, peserta didik dapat mengetahui keterkaitan hubungan antar entitas dengan rasa percaya diri dan penuh tanggung jawab.</Text>
          <Text style={{paddingBottom: 100, fontSize: 15}}>5. Melalui diskusi, peserta didik dapat mengetahui keterkaitan hubungan antar data dengan rasa percaya diri dan tanggung jawab.</Text>
        </ScrollView>
        <Button rounded primary style={styles.button} onPress={ () => this.props.navigation.navigate('bd32slide2')} >
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
    fontSize: 15
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