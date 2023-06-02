import React, {Suspense, useContext, useEffect, useRef, useState} from 'react';
import "./App.css"

import {Context} from "./ContextProvider";
import {observer} from "mobx-react-lite";
import CheckReceiveNotification from "./components/helpers/LogicForProcessingRequests/CheckReceiveNotification";
import Loader from "./components/helpers/loaders/Loader";
const AppRouter = React.lazy(() => import('./routes/AppRouter'));
const AuthId = React.lazy(() => import('./components/AuthId/AuthId'));


const App = observer(() => {
    const {globalStore} = useContext(Context)
    const [visible,SetVisible] = useState(true)
    const checkRefInterval =  useRef(null)
    const [lastData, setLastData] = useState<boolean>(false)

    //after reload return from local our id and token
    useEffect(() => {
        const idInstance = localStorage.getItem('idInstance')||""
        const tokenInstance = localStorage.getItem('tokenInstance')||""

        globalStore.setIdInstance(idInstance)
        globalStore.setTokenInstance(tokenInstance)
    }, []);

    //save to local browser our id and token
    useEffect(() => {
        localStorage.setItem('idInstance', globalStore.idInstance);
        localStorage.setItem('tokenInstance', globalStore.tokenInstance);

        //checking new messages
        // set timeout every 5s and for fast chats 1,5s if LastData not null
             CheckReceiveNotification({
                 globalStore,
                 checkInterval: checkRefInterval,
                 lastData,
                 setLastData, timeout:5000
             })

    }, [globalStore.idInstance,globalStore.tokenInstance])

    //Local storage chats
    useEffect(() => {
        const chats = JSON.parse(localStorage?.getItem('chats')||"{}");
        globalStore.setCreateChats(chats);

    },[]);

    useEffect(() => {
        localStorage?.setItem('chats', JSON.stringify(globalStore?.chats));
    }, [globalStore.chats])

  return (
    <div className="App">
        <Suspense fallback={<Loader visible={true}/>}>
        {!globalStore.idInstance.length
            ? <AuthId visibleModal={visible} setVisibleModal={SetVisible}/>
            : <AppRouter/>}
        </Suspense>
    </div>
  );
})

export default App;
