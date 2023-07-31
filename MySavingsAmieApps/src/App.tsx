import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import FormAddUpdate from './components/FormAddUpdate/FormAddUpdate';
import Header from './components/Header/Header';
import {SavingsProvider} from './provider/SavingsContext';
import TransactionsList from './components/TransactionsList/TransactionsList';

const App = () => {
  return (
    <SavingsProvider>
      <SafeAreaView style={styles.appContainer}>
        <Header />
        <FormAddUpdate />
        <TransactionsList />
      </SafeAreaView>
    </SavingsProvider>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: '#f3f2f2',
    flex: 1,
  },
});

export default App;
