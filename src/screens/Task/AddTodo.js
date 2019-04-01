import React, {Component } from 'react'
import {TextInput, View, TouchableHighlight, Alert} from 'react-native'
import {Form, Icon } from 'native-base'
import {connect} from 'react-redux'


class AddTodo extends Component {
  state = {
    text: ''
  }

  addTodo = (text) => {
    if(text !==''){
      this.props.dispatch({
        type: 'ADD_TODO',
        text
      })
    }else{
      Alert.alert('Masukan Tugasmu!')
    }
    this.setState({
      text: ''
    })
  }
  render(){
    return(
      <Form>
        <View style={{ flex: 1, flexDirection: 'row'}}>
          <TextInput
          onChangeText={ (text) => this.setState({text})} 
          value={this.state.text}
          placeholder="Tulis tugasmu..."
          style={{borderWidth: 1, borderColor: '#f2f2e1', backgroundColor:'#f1f0f4', height: 60, flex: 5, paddingLeft: 15, fontSize: 18}}
          />
            <View style={{flex: 1, justifyContent: 'center',backgroundColor:'#f1f0f4', alignItems: 'center', height: 60}}>
              <TouchableHighlight onPress={()=> this.addTodo(this.state.text)}>
                <Icon name='add' style={{fontSize: 30, color: '#312a72'}} />
              </TouchableHighlight>
            </View>
        </View>
      </Form>
    )
  }
}

export default connect()(AddTodo);