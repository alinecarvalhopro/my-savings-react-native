import {StyleSheet, Text, TextInput, View} from 'react-native';

const MyInput = ({label, value, placeholder, onChangeText}) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.textInput}
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default MyInput;

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 10,
  },
  label: {
    marginBottom: 5,
    color: '#545454',
  },
  textInput: {
    height: 56,
    borderColor: '#545454',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
  },
});
