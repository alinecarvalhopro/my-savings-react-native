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
        style={{
          fontSize: 20,
          marginHorizontal: 16,
          marginBottom: 10,
        }}>
        Add a transaction
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
          placeholder=" Ex: 125.00"
        />
        <View>
          <Text
            style={{
              marginBottom: 5,
              color: '#545454',
            }}>
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
  fomrContainer: {
    marginHorizontal: 16,
    padding: 16,
    borderColor: '#e6d264',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
  },
  button: {
    height: 56,
    marginTop: 10,
    borderRadius: 5,
    backgroundColor: '#e6d264',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
