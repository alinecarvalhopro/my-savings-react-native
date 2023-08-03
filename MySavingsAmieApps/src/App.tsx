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
import {MyIcon} from './fragments/MyIcon/MyIcon';

const App = () => {
  const [modal, setModal] = useState(false);

  return (
    <SavingsProvider>
      <SafeAreaView style={styles.appContainer}>
        <Header />
        <FormAddUpdate />
        <TouchableOpacity
          style={styles.buttonToSumary}
          onPress={() => setModal(true)}>
          <Text style={styles.textButtonSumary}>View my financial summary</Text>
        </TouchableOpacity>
        <Text style={styles.aline}>by Aline Carvalho</Text>
        <Modal visible={modal} animationType="slide">
          <MyIcon
            style={styles.actionModal}
            name="arrow-down2"
            size={22}
            color="#000000"
            onPress={() => setModal(false)}
          />
          <TransactionsList />
        </Modal>
      </SafeAreaView>
    </SavingsProvider>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: '#FFF',
    flex: 1,
  },
  buttonToSumary: {
    height: 56,
    marginHorizontal: 16,
    marginTop: 20,
    borderRadius: 5,
    backgroundColor: '#e6d264',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButtonSumary: {
    fontSize: 20,
    fontFamily: 'Nunito-SemiBold',
    color: '#545454',
  },
  aline: {
    textAlign: 'center',
    marginTop: 30,
    fontFamily: 'Nunito-Regular',
    fontSize: 14,
    color: '#444444',
  },
  actionModal: {alignSelf: 'flex-end', margin: 20},
});

export default App;
