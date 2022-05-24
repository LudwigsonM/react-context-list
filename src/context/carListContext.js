import { createContext, useState } from "react";

export const CarListContext = createContext({});


export const CarListContextProvider = ({ children }) => {
    const { Provider } = CarListContext;
    const [input, setInput] = useState('');
    const [carList, setCarList] = useState([]);

    const value = {
        input,
        setInput,
        carList,
        setCarList,
    };
    return <Provider value={value}>{children}</Provider>
};