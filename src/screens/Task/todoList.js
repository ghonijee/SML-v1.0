import React, {Component} from 'react';
import { View,TouchableOpacity , Text, StyleSheet } from 'react-native'
import {List, ListItem } from 'native-base'

const listTodo = ({todos, toggleTodo}) => (
  <View>
    <List>    
    {todos.map( todo => 
      <ListItem style={{flexDirection: 'row'}}>
        <TouchableOpacity style={{flex: 7,}} key={todo.id} onPress={() => toggleTodo(todo.id)}>
          <Text style={{fontSize: 20, textDecorationLine: todo.completed ? 'line-through' : 'none'}}>{todo.id +'. '+ todo.text}</Text>
        </TouchableOpacity>
          <Text style={{flex: 1}}>{todo.completed ? 'Done': ''}</Text>
      </ListItem>
    )}
     </List>
  </View>
)

export default listTodo;