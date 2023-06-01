import React from 'react';
import Header from "../Header/Header";
import { ReactComponent as GCircle } from "../../assets/images/gcircle.svg";
import { ReactComponent as Group } from "../../assets/images/group.svg"
import { ReactComponent as Menu } from "../../assets/images/menu.svg"
import { ReactComponent as Chat } from "../../assets/images/chat.svg"
import profileImg from "../../assets/images/person.png"
import {observer} from "mobx-react-lite";
import Opens from "../helpers/Opens";
import AuthStatus from "../AuthStatus/AuthStatus";
import SearchBar from "../SearchBar/SearchBar";
import "./LeftPanel.css"

interface LeftPanelInterface {
    style: React.CSSProperties
    globalStore?: any
}



const LeftPanel: React.FC<LeftPanelInterface> = observer(({style, globalStore}) => {

    const selectPhone = (phone:any) =>{
        globalStore.setSelectedChat(phone)
    }

    return (
        <div style={style} className="left_panel">
            <Header style={{padding:"0 20px 0",justifyContent:"space-between"}}>
                <span className="profile_block"
                      style={{width: "60%"}}>
                        <img className="profile_icon"
                             src={profileImg}
                             alt={""}
                             title="Профиль"
                             onClick={()=> Opens(globalStore, "profile")}
                        />
                    <AuthStatus/>
                </span>
                <span className="icon_block" style={{width: "10%"}} title="Создать группу">
                    <Group className="icon"/>
                </span>
                <span className="icon_block" style={{width: "10%"}} title="Статус">
                    <GCircle className="icon"/>
                </span>
                <span className="icon_block" onClick={()=> {
                    Opens(globalStore,"chatCreator")
                }} style={{width: "10%"}} title="Создать чат">
                    <Chat className="icon"/>
                </span>
                <span className="icon_block" style={{width: "10%"}} title="Меню">
                    <Menu className="icon"/>
                </span>
            </Header>
            <div className="search_div"></div>
            <SearchBar globalStore={globalStore}/>

            <div className="contacts">Контакты</div>
            {Object.keys(globalStore.chats).map(phone=>
                <button className={globalStore.selectedChat ===
                phone?"phone_select phone_select_check":"phone_select"}
                        key={phone+2} onClick={()=>selectPhone(phone)}>
                    <div className="phone_photo" key={phone}>
                        <img className="select_chat"
                             src={profileImg}
                             alt={""}
                             title="Профиль_номера"
                        />
                    </div>
                    <div key={phone+1} className="phone_text">{phone}</div>
                </button>
            )}

        </div>
    );
});

export default LeftPanel;