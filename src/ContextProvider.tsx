import React, {createContext, ReactNode} from 'react';
import GlobalStore from "./store/GlobalStore";

export const Context = createContext<any>(null) //Create an empty Context to fill

interface Props{
    children?: ReactNode
}

const ContextProvider:React.FC<Props> = ({children}) => {


    return (
        <Context.Provider
            value={{
                globalStore: new GlobalStore() // connecting our GlobalStore for using in Context
            }}
        >
            {children}
        </Context.Provider>
    );
};

export default ContextProvider;