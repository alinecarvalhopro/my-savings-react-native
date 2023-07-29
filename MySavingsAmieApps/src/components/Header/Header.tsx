import {useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {MyIcon} from '../../fragments/MyIcon/MyIcon';

const Header = () => {
  const [currentSecure, setCurrentSecure] = useState<boolean>(true);

  const handleOnPressEye = () => {
    setCurrentSecure(current => !current);
  };

  return (
    <View style={styles.header}>
      <View style={styles.frontHeader}>
        <Image
          style={{width: 50, height: 50, marginLeft: 10, marginRight: 10}}
          source={require('../../../assets/logo.png')}
        />
        <View style={{flex: 1, marginRight: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>

          <Text style={{fontSize: 16}}>Hello, Aline!</Text>
        <View 
        style={{flexDirection: 'row'}}
        >
          <Text
          style={{marginRight: 16, fontSize: 16}}
          >{currentSecure ? `Balance $ **` : <>{`Balance $ ${"100.00"}`}</>}</Text>
          <MyIcon
            name={currentSecure ? 'eye' : 'eye-blocked'}
            size={22}
            onPress={handleOnPressEye}
          />
        </View>

        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 70,
    marginBottom: 50,
    backgroundColor: '#E4D47D',
},
frontHeader: {
    height: 70,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#E4D47D',
    marginTop: 30,
    marginHorizontal: 16,
    backgroundColor: '#FFFFFF',
    zIndex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  }
});

export default Header;
