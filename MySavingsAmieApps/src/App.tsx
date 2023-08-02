import React, {useState} from 'react';
import {
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import FormAddUpdate from './components/FormAddUpdate/FormAddUpdate';
import Header from './components/Header/Header';
import {SavingsProvider} from './provider/SavingsContext';
import TransactionsList from './components/TransactionsList/TransactionsList';

const App = () => {
  const [modal, setModal] = useState(false);
  return (
    <SavingsProvider>
      <SafeAreaView style={styles.appContainer}>
        <Header />
        <FormAddUpdate />
        <TouchableOpacity
          style={{
            height: 56,
            marginHorizontal: 16,
            marginTop: 20,
            borderRadius: 5,
            backgroundColor: '#e6d264',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => setModal(true)}>
          <Text style={{fontSize: 18, fontWeight: '500', color: '#000000'}}>
            View my financial summary
          </Text>
        </TouchableOpacity>
        <Text style={{textAlign: 'center', marginTop: 20}}>
          alinecarvalhodev
        </Text>
        <Modal visible={modal} animationType="slide">
          <TouchableOpacity onPress={() => setModal(false)}>
            <Text>Close Modal</Text>
          </TouchableOpacity>
          <TransactionsList />
        </Modal>
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
