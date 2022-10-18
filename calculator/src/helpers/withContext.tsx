import React, {
    createContext, ReactNode, useState
} from 'react';
import { job } from './helpers';

interface listData {
    setList: Function,
    list: Array<job>
}
export const GlobalContext = createContext<listData>({ list: [], setList: () => {} });

const withContext = (Component: ReactNode) => {
    const [list, setList] = useState([])

    return (
        <GlobalContext.Provider value={{ list, setList }}>
            {Component}
        </GlobalContext.Provider>
    )
}
export default withContext