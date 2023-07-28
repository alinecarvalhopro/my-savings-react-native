import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import MyInput from '../../fragments/MyInput/MyInput';
import SelectDropdown from 'react-native-select-dropdown';

const FormAddUpdate = () => {
  const [description, setDescription] = useState('');
  const [money, setMoney] = useState('');
  const [updates, setUpdates] = useState([]);
  const [updateType, setUpdateType] = useState('');
  const updateTypes = ['Expense', 'Gain'];

  const submit = () => {
    const data = {
      description,
      money,
      updateType,
    };
    setUpdates([...updates, data]);
    setDescription('');
    setMoney('');
    setUpdateType('');
  };

  return (
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
  );
};

export default FormAddUpdate;

const styles = StyleSheet.create({
  fomrContainer: {
    marginHorizontal: 16,
    padding: 16,
    borderColor: '#E4D47D',
    borderWidth: 1,
    borderRadius: 5,
  },
  button: {
    height: 56,
    marginTop: 10,
    borderRadius: 5,
    backgroundColor: '#E4D47D',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
