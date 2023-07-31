import {createContext, useContext, useState} from 'react';

interface ISanvingsProviderProps {
  children: React.ReactNode;
}

interface ISanvingsContext {
  description: string;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
  money: string;
  setMoney: React.Dispatch<React.SetStateAction<string>>;
  updates: ITransaction[] | [];
  setUpdates: React.Dispatch<React.SetStateAction<ITransaction[]>>;
  updateType: string;
  setUpdateType: React.Dispatch<React.SetStateAction<string>>;
  updateTypes: string[];
  submit: () => void;
  removeTransaction: (transactionId: string) => void;
}

interface ITransaction {
  id: string;
  description: string;
  money: number;
  updateType: string;
  date: Date;
}

const SavingContext = createContext({} as ISanvingsContext);

export const SavingsProvider = ({children}: ISanvingsProviderProps) => {
  const [description, setDescription] = useState('');
  const [money, setMoney] = useState('');
  const [updates, setUpdates] = useState<ITransaction[]>([]);
  const [updateType, setUpdateType] = useState('');
  const updateTypes = ['Expense', 'Gain'];

  const submit = () => {
    const transaction = {
      id: `${new Date().getTime()}`,
      description,
      money: updateType === 'Gain' ? Number(money) : Number(-money),
      updateType,
      date: new Date(),
    };
    setUpdates([...updates, transaction]);
    setDescription('');
    setMoney('');
    setUpdateType('');
  };

  const removeTransaction = (transactionId: string) => {
    const newTransactionList = updates.filter(transation => {
      return transation.id !== transactionId;
    });
    setUpdates(newTransactionList);
  };

  return (
    <SavingContext.Provider
      value={{
        description,
        setDescription,
        money,
        setMoney,
        updates,
        setUpdates,
        updateType,
        setUpdateType,
        updateTypes,
        submit,
        removeTransaction,
      }}>
      {children}
    </SavingContext.Provider>
  );
};

export const useSavingsContext = () => useContext(SavingContext);
