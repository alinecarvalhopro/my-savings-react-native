import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import FormAddUpdate from './components/FormAddUpdate/FormAddUpdate';
import Header from './components/Header/Header';
import {SavingsProvider} from './provider/SavingsContext';

const App = () => {
  return (
    <SavingsProvider>
      <SafeAreaView style={styles.appContainer}>
        <Header />
        <FormAddUpdate />
      </SafeAreaView>
    </SavingsProvider>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: '#fbfbfb',
  },
});

export default App;
