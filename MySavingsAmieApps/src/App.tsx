import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import FormAddUpdate from './components/FormAddUpdate/FormAddUpdate';
import Header from './components/Header/Header';

const App = () => {
  return (
    <SafeAreaView style={styles.appContainer}>
      <Header />
      <FormAddUpdate />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: '#fbfbfb'
  },
});

export default App;
