import { createContext, useContext, useState } from "react";

interface ISanvingsProviderProps {
    children: React.ReactNode;
  }

interface ISanvingsContext {
    description: string,
    setDescription: React.Dispatch<React.SetStateAction<string>>,
    money: string,
    setMoney: React.Dispatch<React.SetStateAction<string>>,
    updates: object[],
    setUpdates: React.Dispatch<React.SetStateAction<object[]>>,
    updateType: string,
    setUpdateType: React.Dispatch<React.SetStateAction<string>>,
    updateTypes: string[],
    submit: () => void
}

const SavingContext = createContext({} as ISanvingsContext)

export const SavingsProvider = ({children}: ISanvingsProviderProps) => {
    const [description, setDescription] = useState('');
    const [money, setMoney] = useState('');
    const [updates, setUpdates] = useState<object[]>([]);
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
        <SavingContext.Provider value={{description, setDescription, money, setMoney, updates, setUpdates, updateType, setUpdateType, updateTypes, submit}}>{children}</SavingContext.Provider>
    )
}

export const useSavingsContext = () => useContext(SavingContext);