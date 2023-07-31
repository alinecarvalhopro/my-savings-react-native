import {FlatList, StyleSheet, Text, View} from 'react-native';
import {useSavingsContext} from '../../provider/SavingsContext';
import {MyIcon} from '../../fragments/MyIcon/MyIcon';

const TransactionsList = () => {
  const {updates, removeTransaction} = useSavingsContext();
  return (
    <>
      {updates.length > 0 ? (
        <>
          <Text
            style={{
              fontSize: 20,
              marginHorizontal: 16,
              marginTop: 20,
            }}>
            Sumary
          </Text>
          <FlatList
            style={{
              paddingBottom: 16,
            }}
            data={updates}
            renderItem={({item}) => (
              <View
                key={item.id}
                style={
                  item.updateType === 'Gain'
                    ? {
                        marginHorizontal: 16,
                        marginTop: 10,
                        borderColor: '#a5e96b',
                        borderWidth: 1,
                        borderRadius: 5,
                        padding: 16,
                        backgroundColor: '#FFFFFF',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }
                    : {
                        marginHorizontal: 16,
                        marginTop: 10,
                        borderColor: '#e57e6c',
                        borderWidth: 1,
                        borderRadius: 5,
                        padding: 16,
                        backgroundColor: '#FFFFFF',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }
                }>
                <View style={{flex: 1, marginRight: 20}}>
                  <View
                    style={{
                      marginBottom: 10,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Text style={styles.descriptionText}>
                      {item.description.substring(0, 20)}
                    </Text>
                    <Text>{item.date.toLocaleDateString('en-EUA')}</Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <View style={{flexDirection: 'row'}}>
                      <MyIcon name="coin-dollar" size={20} color='#000000' />
                      <Text style={styles.moneyText}>
                        {item.money.toFixed(2)}
                      </Text>
                    </View>
                    <Text>{item.updateType}</Text>
                  </View>
                </View>
                <MyIcon
                  name="bin"
                  size={20}
                  color="#000000"
                  onPress={() => removeTransaction(item.id)}
                />
              </View>
            )}
          />
        </>
      ) : (
        <Text
          style={{
            fontSize: 20,
            marginHorizontal: 16,
            marginTop: 20,
            marginBottom: 10,
          }}>
          There are no registered transactions
        </Text>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  descriptionText: {
    fontSize: 16,
    color: '#000000',
  },
  moneyText: {
    marginLeft: 5,
    fontSize: 16,
    color: '#000000',
  },
});

export default TransactionsList;
