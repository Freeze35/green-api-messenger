import React, {useContext, useState} from 'react';
import {Context} from "../ContextProvider";
import NotAuth from "./NotAuth/NotAuth";
import {observer} from "mobx-react-lite";

const AuthStatus = observer(() => {
    const [visibleModal, setVisibleModal] = useState(false)
    const {globalStore} = useContext(Context)

    const getNotAuthInfo=()=>{
        setVisibleModal(true)
    }

    return (
        <div>
            {globalStore.Authorization
                ? <label className="auth">Авторизирован</label>
                : <div>
                    <label className="auth getNotAuthInfo" onClick={getNotAuthInfo}>
                        Вы не авторизированы</label>
                    <NotAuth visibleModal={visibleModal} setVisibleModal={setVisibleModal}/>
                </div>
            }
        </div>
    );
});

export default AuthStatus;