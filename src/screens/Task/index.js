import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import AddTodo from './AddTodo'
import VisivibleTodos from './VisivibleTodos';

export default class Task extends Component {
  static navigationOptions = {
    title: 'Task',
  };

  constructor(){
    super()
    this.state = {
      todo : [],
      vFilter: 'SHOW_ALL'
    }
  }

  render() {
    return (
      <View>
        <AddTodo />
        <View style={styles.listTodo}>
          <VisivibleTodos />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  listTodo: {
    marginTop: 70,
    // paddingLeft: 10,
    marginRight: 20

  }
});