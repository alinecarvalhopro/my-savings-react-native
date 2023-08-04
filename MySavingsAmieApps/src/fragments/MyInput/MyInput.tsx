import {StyleSheet, Text, TextInput, View} from 'react-native';

interface IMyInputProps {
  label: string,
  value: string,
  placeholder: string,
  onChangeText: React.Dispatch<React.SetStateAction<string>>
}

const MyInput = ({label, value, placeholder, onChangeText}: IMyInputProps) => {
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
    fontFamily: 'Nunito-SemiBold', 
    fontSize: 18,
    color: '#000000',
  },
  textInput: {
    height: 56,
    borderColor: '#000000',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
  },
});
