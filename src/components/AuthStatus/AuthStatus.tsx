import React, {useContext, useState} from 'react';
import {Context} from "../../ContextProvider";
import {observer} from "mobx-react-lite";
import "./AuthStatus.css"
import { ReactComponent as ACircled } from "../../assets/images/a-circled.svg"

const NotAuth = React.lazy(() => import('../NotAuth/NotAuth'));

const AuthStatus = observer(() => {
    const [visibleModal, setVisibleModal] = useState(false)
    const {globalStore} = useContext(Context)


    const getNotAuthInfo=()=>{
        setVisibleModal(true)
    }
    return (
        <div>
            {globalStore.Authorization
                ? <ACircled className="auth"/>
                : <div>
                    <ACircled className="auth getNotAuthInfo" onClick={getNotAuthInfo}/>
                    <NotAuth visibleModal={visibleModal} setVisibleModal={setVisibleModal}/>
                </div>
            }
        </div>
    );
});

export default AuthStatus;