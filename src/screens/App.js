import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { createBottomTabNavigator, createAppContainer, createStackNavigator, createSwitchNavigator} from 'react-navigation';
import HomePage from './Home/index';
import NewsPage from './News/index';
import ProfilePage from './Profile/index';
import TaskPage from './Task/index';
import TabBottom from './TabsBottom';
import { Icon, Container, Left, Text, Header, Body, Right, Title, StyleProvider  } from 'native-base';
import Login from './Splashscreen/loginPage';
import Daftar from './Splashscreen/daftar';
import splash from './Splashscreen/index';
// Basis data 3.3 komponen ERD
import Basisdata from './Mapel/Basisdata/index';
import bd32slide1 from './Mapel/Basisdata/3.2/1';
import bd32slide2 from './Mapel/Basisdata/3.2/2';
import bd32slide3 from './Mapel/Basisdata/3.2/3';
import bd32slide4 from './Mapel/Basisdata/3.2/4';
import bd32slide5 from './Mapel/Basisdata/3.2/5';
import bd32slide6 from './Mapel/Basisdata/3.2/6';
import bd32slide7 from './Mapel/Basisdata/3.2/7';
import bd32slide8 from './Mapel/Basisdata/3.2/8';
import bd32slide9 from './Mapel/Basisdata/3.2/9';
import bd32slide10 from './Mapel/Basisdata/3.2/10';
import bd32slide11 from './Mapel/Basisdata/3.2/11';
import bd32slide12 from './Mapel/Basisdata/3.2/12';
import bd32slide13 from './Mapel/Basisdata/3.2/13';
import SoalErd from './Mapel/Basisdata/3.2/soal1';
import SoalEntitas from './Mapel/Basisdata/3.2/soal2';
import SoalAtribut from './Mapel/Basisdata/3.2/soal3';
import SoalRelasi from './Mapel/Basisdata/3.2/soal4';
import SoalKardinalitas from './Mapel/Basisdata/3.2/soal5';
// redux import
import store from '../store'
import { Provider } from 'react-redux'
import firebase from 'react-native-firebase';

const TabNavigator = createBottomTabNavigator({
  Home: HomePage,
  News: NewsPage,
  Task: TaskPage,
  Profile: ProfilePage
},
{
  tabBarComponent: props =>
      <TabBottom
        {...props}
      />,
  initialRouteName:'Home',
  
});
// const splah = createSwitchNavigator({
//   splahscreen : splash
// })
const StackApp = createStackNavigator({
  //route matapelajaran
  // splahPage: splah,
  // daftarPage: {screen: Daftar},
  // loginPage: {screen: Login},
  Basisdata: {screen: Basisdata},
  bd32slide1: {screen: bd32slide1},
  bd32slide2: {screen: bd32slide2},
  bd32slide3: {screen: bd32slide3},
  bd32slide4: {screen: bd32slide4},
  bd32slide5: {screen: bd32slide5},
  bd32slide6: {screen: bd32slide6},
  bd32slide7: {screen: bd32slide7},
  bd32slide8: {screen: bd32slide8},
  bd32slide9: {screen: bd32slide9},
  bd32slide10: {screen: bd32slide10},
  bd32slide11: {screen: bd32slide11},
  bd32slide12: {screen: bd32slide12},
  bd32slide13: {screen: bd32slide13},
  SoalErd: {screen: SoalErd},
  SoalEntitas: {screen: SoalEntitas},
  SoalAtribut: {screen: SoalAtribut},
  SoalRelasi: {screen: SoalRelasi},
  SoalKardinalitas: {screen: SoalKardinalitas},
  //route tabBottomNavigation
  TabBottom: {screen: TabNavigator,
    navigationOptions: ()=> ({
      title: 'SML',
      headerStyle: {
        backgroundColor: '#312a72'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontFamily: 'Romanttica'
      },
    }),
  }
},
{
  initialRouteName:'TabBottom',
  headerMode: 'screen',
  headerLayoutPreset: 'center',
  // tabBarOptions: {
  //   activeTintColor: '#312a72',
  //   activeBackgroundColor : '#fff'
  // },
  // defaultNavigationOptions: {
  //   headerStyle: {
  //     backgroundColor: '#f4511e',
  //   },
  //   headerTintColor: '#fff',
  //   headerTitleStyle: {
  //     fontWeight: 'bold',
  //   },
  // },
});

const AppContainer = createAppContainer(StackApp);

export default class App extends React.Component {
  // constructor() {
  //   super();
  //   this.unsubscriber = null;
  //   this.state = {
  //     user: null,
  //   };
  // }
  // componentDidMount() {
  //   this.unsubscriber = firebase.auth().onAuthStateChanged((user) => {
  //     this.setState({user});
  //   });
  // }

  // componentWillUnmount() {
  //   if (this.unsubscriber) {
  //     this.unsubscriber();
  //   }
  // }

  render() {
    // if (!this.state.user) {
    //   return this.props.navigation.navigate('loginPage')
    //   // return <Login />
    // }

    return(
      <Provider store={store}>
        <Container>
          <AppContainer />
        </Container>
      </Provider>
    ); 
  }
}

const style = StyleSheet.create({
  title: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 16,
  },
  container:{
    flex: 1,
    backgroundColor:'#bb5485'
  }
});