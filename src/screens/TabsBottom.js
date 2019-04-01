import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
export default class FooterTabsIconTextExample extends Component {
  static navigationOptions= {
    title: 'SML 1',
    headerStyle: {
      backgroundColor: '#312a72',
      fontFamily: 'Romanttica'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontFamily: 'Romanttica'
    },
  };
  
  render() {
    return (
        <Footer>
          <FooterTab style={{backgroundColor: '#312a72'}}>
          <Button vertical
            active={ this.props.navigation.state.index === 0}
            onPress={ () => this.props.navigation.navigate('Home') }
            >
              <Icon name="home" />
              <Text>Home</Text>
            </Button>
            <Button vertical
            active={ this.props.navigation.state.index === 1 }
            onPress={ () => this.props.navigation.navigate('News') }
            >
              <Icon name="md-notifications" />
              <Text>News</Text>
            </Button>
            <Button vertical
            active={ this.props.navigation.state.index === 2}
            onPress={ () => this.props.navigation.navigate('Task') }
            >
              <Icon name="md-today" />
              <Text>Task</Text>
            </Button>
            
            <Button vertical
            active={ this.props.navigation.state.index === 3 }
            onPress={ () => this.props.navigation.navigate('Profile') }
            >
              <Icon name="md-person" />
              <Text>Akun</Text>
            </Button>
          </FooterTab>
        </Footer>
    );
  }
}