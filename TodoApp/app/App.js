import React, {Component} from 'react';
import {View, ScrollView, StyleSheet, TouchableHighlight} from 'react-native';
import Heading from './Heading';
import Input from './Input';

let todoIndex = 0;

class App extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: '', //Value to hold current state of TextInput that will add the todos
      todos: [], // Array to keep todos
      type: 'All', // Value to store type of todo currently viewing (All, Current, or Active)
    };
  }

  inputChange(inputValue) {
    console.log(' Input value: ', inputValue);
    this.setState({inputValue: inputValue});
  }

  submitTodo() {
    if (this.state.inputValue.match(/^\s*$/)) {
      return;
    }
    const todo = {
      title: this.state.inputValue,
      todoIndex,
      complete: false,
    };
    todoIndex++;
    const todos = [...this.state.todos, todo];
    this.setState({todos: todos, inputValue: ''});
  }

  render() {
    const {inputValue} = this.state;
    return (
      <View style={styles.container}>
        <ScrollView keyboardShouldPersistTaps="always" style={styles.content}>
          <Heading />
          <Input
            inputValue={inputValue}
            inputChange={(text) => this.inputChange(text)}
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Component fills entire space of parent container
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    paddingTop: 60,
  },
});

export default App;
