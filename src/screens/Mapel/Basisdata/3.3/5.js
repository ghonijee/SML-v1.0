import React , {Component} from 'react';
import {ScrollView, StyleSheet, Image, Dimensions, Modal, TouchableHighlight } from 'react-native';
import {Text, Radio, List, ListItem, Left, Right, Button, Icon, View, Thumbnail } from 'native-base';
import ImageViewer from 'react-native-image-zoom-viewer';
const win = Dimensions.get('screen');

const imgList = [
  {
    url: 'http://mfikri.com/assets/images/00a1b09e500687b60f3c347aa67ab7fa.jpg'
  }
];

class Materi1 extends Component {
  static navigationOptions= {
    title: 'KOMPONEN ERD',
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
          <Text style={{fontSize: 20,
                        marginBottom: 30,
                        fontWeight: '800',
                        textAlign: 'center',
                        }}>Gambar Komponen ERD</Text>
            <TouchableHighlight onPress={ () => this.setState({modalVisible : true})}>
              <Image
                style={{flex:1, width: 280, height: 230, marginLeft: -10}}
                source={{uri: 'http://mfikri.com/assets/images/00a1b09e500687b60f3c347aa67ab7fa.jpg'}}
              />
            </TouchableHighlight>
            <Text style={styles.bodyContent}>Dari gambar diatas bisa dilihat bahwa ada 3 komponen, yaitu :</Text>
            <Text style={styles.bodyContent}>a.  Entitas</Text>
            <Text style={styles.bodyContent}>b.  Relasi</Text>
            <Text style={styles.bodyContent}>c.  Attribut</Text>
        </ScrollView>
        <Modal visible={this.state.modalVisible} transparent={true} onRequestClose={() => this.setState({modalVisible :false}) }>
          <ImageViewer imageUrls={imgList} />
        </Modal>
        <Button rounded primary style={styles.button} onPress={ () => this.props.navigation.navigate('bd32slide6')} >
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
  bodyContent: {
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