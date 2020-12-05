import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
// import styled from '@emotion/native';

const Input = () => (
  <View style={styles.inputContainer}>
    <TextInput
      style={styles.input}
      placeholder="What needs to be done?"
      placeholderTextColor="#CACACA"
      selectionColor="#666666"
    />
  </View>
);

/* const inputContainer = styled.View`
  margin-left: 20px;
  margin-right: 20px;
  shadow-opacity: 0.2;
  shadow-radius: 3;
  shadow-color: '#000000';
  shadow-offset: {width: 2, height: 2};
` */

const styles = StyleSheet.create({
  inputContainer: {
    marginLeft: 20,
    marginRight: 20,
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowColor: '#000000',
    shadowOffset: {width: 2, height: 2},
  },
  input: {
    height: 60,
    backgroundColor: '#ffffff',
    paddingLeft: 10,
    paddingRight: 10,
  },
});

export default Input;
