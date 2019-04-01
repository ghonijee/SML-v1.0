import React , {Component} from 'react';
import {ScrollView, StyleSheet, Image } from 'react-native';
import {Text, Radio, List, ListItem, Left, Right, Button, Icon, View } from 'native-base';
import Video from 'react-native-video';
import { WebView } from "react-native-webview";

class Materi1 extends Component {
  static navigationOptions= {
    title: 'Video',
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
          <WebView
            style={ styles.WebViewContainer }
            javaScriptEnabled={true}
            domStorageEnabled={true}
            source={{uri: 'https://www.youtube.com/embed/R0zL5lvB_Pw' }}
          />
          <ScrollView style={styles.boxMateri}>
            <Text style={{fontSize: 15, textAlign: 'center'}}>Simaklah video berikut! dimana akan dijelaskan implementasi Derajat Relasi dan 
              kardinalitas.</Text>
            <Text style={{fontSize: 15, fontWeight: 'bold', marginTop:10, textAlign: 'center'}}>"Sekrang selesaikan studi kasus yang sudah dicatat tadi, dan kemudian presentasikan hasil pekerjaanmu / kelompokmu
              didepan kelas."</Text>
          </ScrollView>
        <Button rounded primary style={styles.button} onPress={ () => this.props.navigation.navigate('Basisdata')} >
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
  content : {
    fontSize: 20,
    color: '#4546f0',
    
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
  },
  backgroundVideo: {
    position: 'relative',
    top: 50,
    left: 50,
    bottom: 0,
    right: 0,
  },
});

export default Materi1;