import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Title } from 'native-base';
export default class HeaderTitleExample extends Component {
  render() {
    return (
        <Header>
          <Left/>
          <Body>
            <Title>SML</Title>
          </Body>
          <Right />
        </Header>
    );
  }
}