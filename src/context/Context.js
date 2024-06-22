import { createContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [cart, setCart] = useLocalStorage('cart', []);

    return <DataContext.Provider value={{cart, setCart}}>{children}</DataContext.Provider>
}