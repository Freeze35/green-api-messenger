import React, {useContext,} from 'react';
import "./messengerPage.css"
import {Context} from "../../ContextProvider";
import CentralBlock from "../../components/CentralChatBlock/CentralBlock";
import LeftPanel from "../../components/LeftPanel/LeftPanel";
import CreateChat from "../../components/CreateChat/CreateChat";
import {observer} from "mobx-react-lite";
import Profile from "../../components/Profile/Profile";
import useProgressiveImage from "../../components/helpers/hooks/useProgressiveImage";
import background from "../../assets/images/background.png"

const MessengerPage = observer(() => {

    const {globalStore} = useContext(Context)
    const loadedBack = useProgressiveImage(background)

    return (
        <div className="messenger_block">
            <CreateChat style={{zIndex: 10}} globalStore={globalStore}/>
            <LeftPanel
                style={{width: "30%"}}
                globalStore={globalStore}/>
            <Profile
                style={
                    globalStore.chatCreatorOpen
                        ? {width: "30%", pointerEvents: "auto"}
                        : {width: "30%", pointerEvents: "auto"}}/>
            {globalStore.selectedChat.length
                ? <CentralBlock style={{width: "70%"}} globalStore={globalStore}/>
                : <div className= "back_image"
                       style={{width: "70%",backgroundImage: `url(${loadedBack})`}}>
                    Welcome on Chat Page
                </div>
            }
        </div>
    );
});

export default MessengerPage;