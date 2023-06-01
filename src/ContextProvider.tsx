import React, {createContext, ReactNode} from 'react';
import BooksStore from "./store/BooksStore";

export const Context = createContext<any>(null)

interface Props{
    children?: ReactNode
}

const ContextProvider:React.FC<Props> = ({children}) => {

    return (
        <Context.Provider
            value={{
                booksStore: new BooksStore()
            }}
        >
            {children}
        </Context.Provider>
    );
};

export default ContextProvider;