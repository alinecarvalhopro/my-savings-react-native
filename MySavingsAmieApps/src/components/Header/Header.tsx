import {useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {MyIcon} from '../../fragments/MyIcon/MyIcon';
import {useSavingsContext} from '../../provider/SavingsContext';

const Header = () => {
  const {updates} = useSavingsContext();
  const [currentSecure, setCurrentSecure] = useState<boolean>(true);

  const values = updates.map(value => value.money);

  const totalValue = values.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0,
  );

  const handleOnPressEye = () => {
    setCurrentSecure(current => !current);
  };

  return (
    <View style={styles.header}>
      <View style={styles.frontHeader}>
        <Image
          style={styles.logo}
          source={require('../../../assets/logo.png')}
        />
        <View
          style={styles.containerTitleAndBalance}>
          <Text
            style={styles.title}>
            My Savings
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.balance}>
              {currentSecure ? (
                `Balance $ **`
              ) : (
                <>{`$ ${totalValue.toFixed(2)}`}</>
              )}
            </Text>
            <MyIcon
              name={currentSecure ? 'eye' : 'eye-blocked'}
              size={22}
              color="#000"
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
    backgroundColor: '#e6d264',
  },
  frontHeader: {
    height: 70,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#e6d264',
    marginTop: 30,
    marginHorizontal: 16,
    backgroundColor: '#FFFFFF',
    zIndex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {width: 50, height: 50, marginLeft: 10, marginRight: 10},
  containerTitleAndBalance: {
    flex: 1,
    marginRight: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Borel-Regular',
    fontSize: 22,
    color: '#848484',
  },
  balance: {marginRight: 10, fontFamily: 'Nunito-SemiBold', fontSize: 16, color: '#000'}
});

export default Header;
