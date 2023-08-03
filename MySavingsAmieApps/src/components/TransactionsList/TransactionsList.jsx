import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import {useSavingsContext} from '../../provider/SavingsContext';
import {MyIcon} from '../../fragments/MyIcon/MyIcon';

const TransactionsList = () => {
  const {updates, removeTransaction} = useSavingsContext();

  const values = updates.map(value => value.money);

  const totalValue = values.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0,
  );

  return (
    <>
      {updates.length > 0 ? (
        <>
          <Text style={styles.titleModal}>Sumary</Text>
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
                        borderWidth: 2,
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
                        borderWidth: 2,
                        borderRadius: 5,
                        padding: 16,
                        backgroundColor: '#FFFFFF',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }
                }>
                <View style={styles.containerTransaction}>
                  <View style={styles.boxTransactionAndDate}>
                    <Text style={styles.descriptionText}>
                      {item.description.substring(0, 20)}
                    </Text>
                    <Text style={{color: '#000'}}>
                      {item.date.toLocaleDateString('en-EUA')}
                    </Text>
                  </View>
                  <View style={styles.boxMoneyType}>
                    <View style={{flexDirection: 'row'}}>
                      <MyIcon name="coin-dollar" size={20} color="#000" />
                      <Text style={styles.moneyText}>
                        {item.money.toFixed(2)}
                      </Text>
                    </View>
                    <Text style={styles.updateType}>{item.updateType}</Text>
                  </View>
                </View>
                <MyIcon
                  name="bin"
                  size={20}
                  color="#000"
                  onPress={() => removeTransaction(item.id)}
                />
              </View>
            )}
          />
          <View style={styles.boxBalance}>
            <Text style={styles.textBalance}>{`Balance`}</Text>
            <Text style={styles.textBalance}>{`$ ${totalValue.toFixed(
              2,
            )}`}</Text>
          </View>
        </>
      ) : (
        <>
          <Image
            style={styles.coinImage}
            source={require('../../../assets/coins.png')}
          />
          <Text style={styles.messageModal}>
            There are no registered transactions
          </Text>
        </>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  boxTransactionAndDate: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  descriptionText: {
    fontSize: 16,
    color: '#000',
  },
  boxMoneyType: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  moneyText: {
    marginLeft: 5,
    fontSize: 16,
    color: '#000',
  },
  updateType: {color: '#000', fontSize: 14},
  titleModal: {
    marginHorizontal: 16,
    marginBottom: 10,
    fontFamily: 'Nunito-SemiBold',
    fontSize: 22,
    color: '#000',
  },
  containerTransaction: {flex: 1, marginRight: 20},
  boxBalance: {
    height: 70,
    marginTop: 10,
    marginHorizontal: 16,
    borderTopWidth: 2,
    borderTopColor: '#e6d264',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  textBalance: {fontFamily: 'Nunito-SemiBold', fontSize: 20, color: '#000'},
  messageModal: {
    marginHorizontal: 16,
    marginTop: 20,
    marginBottom: 10,
    fontFamily: 'Nunito-SemiBold',
    fontSize: 22,
    color: '#000',
    textAlign: 'center',
  },
  coinImage: {width: 100, height: 100, alignSelf: 'center'},
});

export default TransactionsList;
