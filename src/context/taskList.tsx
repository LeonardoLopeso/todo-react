import { createContext, useState } from 'react';
import { Item } from '../types/Item';


export const MyContext = createContext({});

const taskListProvider = ( {children}: any ) => {
    const [list, setList] = useState<Item[]>([
        { id: 1, name: 'Comprar o pão na padaria', done: false },
        { id: 2, name: 'Comprar um bolo na padaria', done: true },
    ]);

    return (
        <MyContext.Provider value={list}>
            {children}
        </MyContext.Provider>
    );
}

export default taskListProvider;