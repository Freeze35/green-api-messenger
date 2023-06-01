import React, {useContext, useEffect} from 'react';
import {Link} from "react-router-dom";
import Modal from "../Modal/Modal";
import {getAccountSettings} from "../../http/messengerApi";
import "./NotAuth.css"
import {Context} from "../../ContextProvider";

interface NotAuthInterface{
    visibleModal: boolean
    setVisibleModal: React.Dispatch<React.SetStateAction<boolean>>
}

const NotAuth:React.FC<NotAuthInterface> = ({visibleModal,setVisibleModal}) => {

    const {globalStore} = useContext(Context)
    // authorization check REACT_APP_TOKEN_INSTANCE=fab4758659524c7690a5a21b7c76b8e7b5439443d00b4eb390
    useEffect(()=>{
            getAccountSettings(globalStore)
                .then(data => {
                    //checking wid exists or not
                    if (data.wid.length > 0) {
                        globalStore.setAuthorization(true)
                        setVisibleModal(false)
                    } else {
                        globalStore.setAuthorization(false)
                        setVisibleModal(true)
                        checkingAuth()
                    }
                })
    },[])

    //refresh checking if not authorized
    const checkingAuth = () =>{
        let timer
        if(globalStore.idInstance.length) {
            setInterval(() => {
                timer = getAccountSettings(globalStore)
                    .then(data => {
                        //checking wid exists or not
                        if (data?.wid?.length > 0) {
                            globalStore.setAuthorization(true)
                        } else {
                            globalStore.setAuthorization(false)

                            checkingAuth()
                        }
                    })
            }, 5000)
        }
        else {
            clearInterval(timer)
        }
    }

    //stop video YouTube
    useEffect(()=>{
        pauseVideo()
    },[visibleModal])

    //get iframe adding ?enablejsapi=1 to ID and send command on stop video
    const pauseVideo = () => {
        // At the place of pauseVideo you can use "stopVideo", "playVideo"
        let iframe = document.querySelector("iframe");
        iframe?.contentWindow?.postMessage(
            '{"event":"command","func":"stopVideo","args":""}',
            "*"
        );
    };

    return (
        <Modal visible={visibleModal} setVisible={setVisibleModal} className="no_auth">
            Ваш TOKEN_INSTANCE и ID_INSTANCE не авторизованы, пожалуйста авторизируйтесь по данному адресу
            <Link style={{margin: "0 5px 0"}} to="https://console.green-api.com/instanceList">
                console.green-api.com
            </Link>
            Или посмотрите видеоинструкцию GreenApi:
            <iframe className="video"
                    src="https://www.youtube.com/embed/e-91GrRDBVc?enablejsapi=1"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen></iframe>
        </Modal>
    );
};

export default NotAuth;