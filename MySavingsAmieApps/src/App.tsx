import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import FormAddUpdate from './components/FormAddUpdate/FormAddUpdate';

const App = () => {
  return (
    <SafeAreaView>
      <Text>My Savings</Text>
      <FormAddUpdate/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;
