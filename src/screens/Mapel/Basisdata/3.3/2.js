import React , {Component} from 'react';
import {ScrollView, StyleSheet, Image, Dimensions, Modal, TouchableHighlight } from 'react-native';
import {Text, Radio, List, ListItem, Left, Right, Button, Icon, View, Thumbnail } from 'native-base';
import ImageViewer from 'react-native-image-zoom-viewer';
const win = Dimensions.get('screen');

const imgList = [
  {
    url: 'https://farm8.staticflickr.com/7829/47493104441_464e1fc14a_m.jpg'
  },
  {
    url: 'https://farm8.staticflickr.com/7867/47493104301_4f6a6380d3_m.jpg'
  }
]
class Materi1 extends Component {
  static navigationOptions= {
    title: 'Contoh ERD',
    headerStyle: {
      backgroundColor: '#312a72',
      fontFamily: 'Romanttica'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontFamily: 'Romanttica'
    },
  };

  state = {
    modalVisible: false
  }
  render(){
    return(
      <View style={styles.container}>
        <ScrollView style={styles.boxMateri}>
          <Text style={{fontSize: 15, marginBottom: 20,}}>Perhatikan contoh ERD dibawah ini</Text>
            <TouchableHighlight onPress={ () => this.setState({modalVisible : true})}>
              <Image
                style={{flex:1, width: null, height: 145}}
                source={{uri: 'https://farm8.staticflickr.com/7829/47493104441_464e1fc14a_m.jpg'}}
              />
            </TouchableHighlight>
          <Text style={{fontSize: 15, marginBottom: 20, marginTop: 30}}>Selanjutnya contoh ke-2</Text>
          <TouchableHighlight onPress={ () => this.setState({modalVisible : true})}>
            <Image style={{flex:1, width: null, height: 145}} source={{uri: 'https://farm8.staticflickr.com/7867/47493104301_4f6a6380d3_m.jpg'}}
            />
          </TouchableHighlight>
        </ScrollView>
        <Modal visible={this.state.modalVisible} transparent={true} onRequestClose={() => this.setState({modalVisible :false}) }>
          <ImageViewer imageUrls={imgList} />
        </Modal>
        <Button rounded primary style={styles.button} onPress={ () => this.props.navigation.navigate('bd32slide3')} >
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