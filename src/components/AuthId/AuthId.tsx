import React, {useContext, useState} from 'react';
import Modal from "../Modal/Modal";
import {Context} from "../../ContextProvider";
import {ReactComponent as SendButton} from "../../assets/images/send_button.svg";
import "./AuthI.css"
import {getAccountSettings} from "../../http/messengerApi";

interface NotAuthInterface{
    visibleModal: boolean
    setVisibleModal: React.Dispatch<React.SetStateAction<boolean>>
}

const AuthId:React.FC<NotAuthInterface> = ({visibleModal,setVisibleModal}) => {


    const [IdInstance,setIdInstance] =useState("")
    const [TokenInstance,setTokenInstance] =useState("")
    const [visError,setVisError] =useState(false)
    const {globalStore} = useContext(Context)


    const CheckAuth = () =>{
        getAccountSettings(globalStore,IdInstance,TokenInstance)
            .then(data => {
                if(typeof data === "object") {
                    globalStore.setIdInstance(IdInstance)
                    globalStore.setTokenInstance(TokenInstance)
                }
                else {
                    setVisError(prev=>!prev)
                    setTimeout(()=>{
                        setVisError(prev=>!prev)
                    },3000)
                }
            })
    }

    return (
        <Modal style={{display:"flex"
            ,flexDirection:"column"
            ,fontSize:"2vw",zIndex:20
            ,width:"auto"}}
               visible={visibleModal}
               setVisible={setVisibleModal}
               className="auth_id_first"
               turnOff={true}
               visibleCloseBut={false}
        >
            <h1 className="auth_text" style={{color:"green",marginBottom:"20px"}}>
                Авторизация
            </h1>
            <p style={{width:"80%"}}>
                Добро пожаловать на Green Api Chat
            </p>
            <input style={{width:"70%"}} onChange={e => setIdInstance(e.target.value.trim())}
                   className="input_auth"
                   placeholder="Введите ID_INSTANCE..."/>
            <input style={{width:"70%"}} onChange={e => setTokenInstance(e.target.value.trim())}
                   className="input_auth"
                   placeholder="Введите TOKEN_INSTANCE..."/>
            <div id="error_message" className={visError?"error_message_open":"error_message_close"}>
                Некорректные данные или пользователь не авторизирован</div>
            <div className ="send_button_align ">
            <SendButton onClick={CheckAuth} className="auth_button_first button_circle"/>
            </div>
        </Modal>
    );
};

export default AuthId;