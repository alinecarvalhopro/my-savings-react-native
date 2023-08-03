import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import MyInput from '../../fragments/MyInput/MyInput';
import SelectDropdown from 'react-native-select-dropdown';
import {useSavingsContext} from '../../provider/SavingsContext';

const FormAddUpdate = () => {
  const {
    description,
    setDescription,
    money,
    setMoney,
    updateTypes,
    setUpdateType,
    submit,
  } = useSavingsContext();

  return (
    <>
      <Text
        style={styles.titleSection}>
        Register our finances
      </Text>
      <View style={styles.fomrContainer}>
        <MyInput
          label="Description"
          onChangeText={setDescription}
          value={description}
          placeholder="Ex: Supermaraket"
        />
        <MyInput
          label="Value $"
          onChangeText={setMoney}
          value={money}
          placeholder=" Ex: 125.00 or 125"
        />
        <View>
          <Text
            style={styles.labelTypeTransaction}>
            Transaction type
          </Text>
        </View>
        <SelectDropdown
          data={updateTypes}
          onSelect={selectedItem => {
            setUpdateType(selectedItem);
          }}
        />
        <TouchableOpacity style={styles.button} onPress={submit}>
          <Text style={styles.textButton}>Register</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default FormAddUpdate;

const styles = StyleSheet.create({
  titleSection: {
    marginHorizontal: 16,
    marginBottom: 10,
    fontFamily: 'Nunito-SemiBold', 
    fontSize: 22,
    color: '#000',
  },
  fomrContainer: {
    marginHorizontal: 16,
    padding: 16,
    borderColor: '#e6d264',
    borderWidth: 2,
    borderRadius: 5,
    backgroundColor: '#FFF',
  },
  labelTypeTransaction: {
    marginBottom: 5,
    fontFamily: 'Nunito-SemiBold', 
    fontSize: 18,
    color: '#000',
  },
  button: {
    height: 56,
    marginTop: 10,
    borderRadius: 5,
    backgroundColor: '#848484',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    fontFamily: 'Nunito-SemiBold', 
    fontSize: 20,
    color: '#FFF'
  },
});
